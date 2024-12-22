// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// Token Related Types
export interface TokenData {
  id: string;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  price: number;
  priceChange24h: number;
  volume24h: number;
  marketCap: number;
  liquidity: number;
  totalSupply: number;
  circulatingSupply: number;
  logoURI: string;
  isNew?: boolean;
  createdAt: string;
  description?: string;
  website?: string;
  twitter?: string;
}

export interface TokenPair {
  id: string;
  baseToken: TokenData;
  quoteToken: TokenData;
  price: number;
  priceChange24h: number;
  volume24h: number;
  liquidity: number;
  createdAt: string;
}

// Swap Related Types
export interface SwapQuote {
  inputToken: TokenData;
  outputToken: TokenData;
  inputAmount: number;
  outputAmount: number;
  price: number;
  priceImpact: number;
  minimumReceived: number;
  fee: number;
  route: TokenPair[];
}

// Pool Related Types
export interface Pool {
  id: string;
  tokenA: TokenData;
  tokenB: TokenData;
  reserveA: number;
  reserveB: number;
  fee: number;
  volume24h: number;
  tvl: number;
  apr: number;
}

// Market Data Types
export interface MarketData {
  price: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  volumeChange24h: number;
  marketCap: number;
  totalValueLocked: number;
  timestamp: number;
}