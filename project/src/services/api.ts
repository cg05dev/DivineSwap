import axios from 'axios';
import { API_CONFIG } from '../config/api';
import type { ApiResponse, TokenData, SwapQuote, Pool, MarketData } from '../types/api';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token related API calls
export const tokenService = {
  async getTokens(): Promise<ApiResponse<TokenData[]>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.TOKENS);
    return response.data;
  },

  async getTokenDetails(id: string): Promise<ApiResponse<TokenData>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.TOKEN_DETAILS.replace(':id', id));
    return response.data;
  },

  async getTokenPrice(id: string): Promise<ApiResponse<number>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.TOKEN_PRICE.replace(':id', id));
    return response.data;
  },
};

// Swap related API calls
export const swapService = {
  async getQuote(params: {
    inputToken: string;
    outputToken: string;
    amount: number;
    slippage: number;
  }): Promise<ApiResponse<SwapQuote>> {
    const response = await api.post(API_CONFIG.ENDPOINTS.SWAP_QUOTE, params);
    return response.data;
  },

  async executeSwap(params: {
    quoteId: string;
    userAddress: string;
    signature: string;
  }): Promise<ApiResponse<{ txHash: string }>> {
    const response = await api.post(API_CONFIG.ENDPOINTS.SWAP_EXECUTE, params);
    return response.data;
  },
};

// Pool related API calls
export const poolService = {
  async getPools(): Promise<ApiResponse<Pool[]>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.POOLS);
    return response.data;
  },

  async getPoolDetails(id: string): Promise<ApiResponse<Pool>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.POOL_DETAILS.replace(':id', id));
    return response.data;
  },
};

// Market related API calls
export const marketService = {
  async getOverview(): Promise<ApiResponse<MarketData>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.MARKET_OVERVIEW);
    return response.data;
  },

  async getHotPairs(): Promise<ApiResponse<Pool[]>> {
    const response = await api.get(API_CONFIG.ENDPOINTS.HOT_PAIRS);
    return response.data;
  },
};