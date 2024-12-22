// Network and API Configuration
export const NETWORK = 'mainnet-beta';
export const RPC_ENDPOINT = 'https://api.mainnet-beta.solana.com';

// Program IDs and Public Keys
export const DEX_PROGRAM_ID = ''; // To be filled with actual program ID
export const TOKEN_PROGRAM_ID = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';

// Pool Configuration
export const DEFAULT_SLIPPAGE = 0.5; // 0.5%
export const MAX_SLIPPAGE = 5; // 5%

// API Endpoints (for price feeds, etc)
export const API_ENDPOINTS = {
  PRICE_FEED: '/api/prices',
  POOLS: '/api/pools',
  TOKENS: '/api/tokens',
};

// Transaction Settings
export const TX_TIMEOUT = 30000; // 30 seconds
export const MAX_RETRIES = 3;

// Cache Settings
export const PRICE_CACHE_DURATION = 30 * 1000; // 30 seconds
export const POOL_CACHE_DURATION = 60 * 1000; // 1 minute