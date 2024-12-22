import { Connection, PublicKey } from '@solana/web3.js';
import { Pool } from '../types/dex';
import { calculateConstantProduct } from './amm';

export interface LiquidityPosition {
  poolAddress: PublicKey;
  lpTokenBalance: number;
  share: number;
  value: number;
  tokenAAmount: number;
  tokenBAmount: number;
}

export const addLiquidity = async (
  connection: Connection,
  pool: Pool,
  tokenAAmount: number,
  tokenBAmount: number,
  slippage: number = 0.5
): Promise<{
  lpTokens: number;
  share: number;
  priceImpact: number;
}> => {
  // Validate amounts match pool ratio
  const currentPrice = pool.reserveB / pool.reserveA;
  const providedPrice = tokenBAmount / tokenAAmount;
  
  if (Math.abs(currentPrice - providedPrice) > slippage / 100) {
    throw new Error('Price impact too high');
  }

  // Calculate LP tokens to mint
  const totalSupply = 1000; // This will come from pool data
  const share = tokenAAmount / (pool.reserveA + tokenAAmount);
  const lpTokens = totalSupply * share;

  return {
    lpTokens,
    share: share * 100,
    priceImpact: Math.abs(currentPrice - providedPrice) * 100
  };
};

export const removeLiquidity = async (
  connection: Connection,
  pool: Pool,
  lpTokenAmount: number,
  slippage: number = 0.5
): Promise<{
  tokenAAmount: number;
  tokenBAmount: number;
  share: number;
}> => {
  // Calculate token amounts based on pool share
  const totalSupply = 1000; // This will come from pool data
  const share = lpTokenAmount / totalSupply;
  
  const tokenAAmount = pool.reserveA * share;
  const tokenBAmount = pool.reserveB * share;

  return {
    tokenAAmount,
    tokenBAmount,
    share: share * 100
  };
};