import { PublicKey } from '@solana/web3.js';

export interface Pool {
  address: PublicKey;
  tokenA: TokenInfo;
  tokenB: TokenInfo;
  reserveA: number;
  reserveB: number;
  fee: number;
  volume24h: number;
  tvl: number;
}

export interface TokenInfo {
  address: PublicKey;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
}

export interface SwapQuote {
  inputAmount: number;
  outputAmount: number;
  priceImpact: number;
  fee: number;
  minimumReceived: number;
  route: Pool[];
}

export interface SwapState {
  isLoading: boolean;
  error: string | null;
  quote: SwapQuote | null;
}

export interface PriceData {
  price: number;
  change24h: number;
  volume24h: number;
  timestamp: number;
}