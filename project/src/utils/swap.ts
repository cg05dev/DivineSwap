import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { Pool, SwapQuote } from '../types/dex';
import { calculateConstantProduct } from './amm';
import { createSwapInstruction } from './instructions';
import { simulateTransaction } from './transactions';

export const getSwapQuote = async (
  pool: Pool,
  inputAmount: number,
  slippage: number = 0.5
): Promise<SwapQuote> => {
  const { amountOut, priceImpact, fee } = calculateConstantProduct(
    pool.reserveA,
    pool.reserveB,
    inputAmount,
    pool.fee
  );

  const minimumReceived = amountOut * (1 - slippage / 100);

  return {
    inputAmount,
    outputAmount: amountOut,
    priceImpact,
    fee,
    minimumReceived,
    route: [pool]
  };
};

export const prepareSwapTransaction = async (
  connection: Connection,
  wallet: PublicKey,
  pool: Pool,
  inputAmount: number,
  minOutputAmount: number
): Promise<Transaction> => {
  const transaction = new Transaction();

  // Add swap instruction
  const swapIx = await createSwapInstruction({
    poolAddress: pool.address,
    userSourceToken: wallet, // This will be the actual token account
    userDestinationToken: wallet, // This will be the actual token account
    amount: inputAmount,
    minAmountOut: minOutputAmount
  });

  transaction.add(swapIx);

  // Simulate transaction
  await simulateTransaction(connection, transaction, [wallet]);

  return transaction;
};