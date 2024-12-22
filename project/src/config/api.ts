// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
  ENDPOINTS: {
    // Token endpoints
    TOKENS: '/api/v1/tokens',
    TOKEN_DETAILS: '/api/v1/tokens/:id',
    TOKEN_PRICE: '/api/v1/tokens/:id/price',
    TOKEN_HISTORY: '/api/v1/tokens/:id/history',
    
    // Swap endpoints
    SWAP_QUOTE: '/api/v1/swap/quote',
    SWAP_EXECUTE: '/api/v1/swap/execute',
    
    // Pool endpoints
    POOLS: '/api/v1/pools',
    POOL_DETAILS: '/api/v1/pools/:id',
    
    // Market endpoints
    MARKET_OVERVIEW: '/api/v1/market/overview',
    HOT_PAIRS: '/api/v1/market/hot-pairs',
  },
  
  // API request timeouts
  TIMEOUT: 10000, // 10 seconds
  
  // Cache durations
  CACHE_DURATION: {
    TOKENS: 60 * 1000, // 1 minute
    PRICES: 10 * 1000, // 10 seconds
    POOLS: 30 * 1000, // 30 seconds
  }
};