import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import { NETWORK, RPC_ENDPOINT } from '../config/constants';

// Initialize Solana connection
export const getConnection = () => new Connection(RPC_ENDPOINT, 'confirmed');

// Utility functions for transaction building
export const buildSwapTransaction = async (
  connection: Connection,
  wallet: PublicKey,
  poolAddress: PublicKey,
  inputAmount: number,
  minimumOutputAmount: number
): Promise<Transaction> => {
  // This will be implemented when the program ID and swap instruction layout are available
  throw new Error('Not implemented');
};

// Token utilities
export const getTokenBalance = async (
  connection: Connection,
  tokenAccount: PublicKey
): Promise<number> => {
  const balance = await connection.getTokenAccountBalance(tokenAccount);
  return Number(balance.value.uiAmount);
};

// Pool utilities
export const getPoolData = async (
  connection: Connection,
  poolAddress: PublicKey
) => {
  // This will be implemented when pool account layout is available
  throw new Error('Not implemented');
};