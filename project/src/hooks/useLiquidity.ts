import { useState, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { addLiquidity, removeLiquidity, LiquidityPosition } from '../utils/liquidity';
import { Pool } from '../types/dex';

export const useLiquidity = (pool: Pool) => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const add = useCallback(async (
    tokenAAmount: number,
    tokenBAmount: number,
    slippage: number = 0.5
  ) => {
    if (!publicKey) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    setError(null);

    try {
      return await addLiquidity(
        connection,
        pool,
        tokenAAmount,
        tokenBAmount,
        slippage
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add liquidity');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [connection, publicKey, pool]);

  const remove = useCallback(async (
    lpTokenAmount: number,
    slippage: number = 0.5
  ) => {
    if (!publicKey) throw new Error('Wallet not connected');
    
    setIsLoading(true);
    setError(null);

    try {
      return await removeLiquidity(
        connection,
        pool,
        lpTokenAmount,
        slippage
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove liquidity');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [connection, publicKey, pool]);

  return {
    add,
    remove,
    isLoading,
    error
  };
};