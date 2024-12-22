import { TokenInfo } from '../types/dex';

const SOLANA_TOKEN_LIST_URL = 'https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json';

interface TokenList {
  name: string;
  timestamp: string;
  tokens: TokenInfo[];
}

let tokenListCache: TokenList | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const fetchTokenList = async (): Promise<TokenInfo[]> => {
  const now = Date.now();
  
  if (tokenListCache && now - lastFetchTime < CACHE_DURATION) {
    return tokenListCache.tokens;
  }

  try {
    const response = await fetch(SOLANA_TOKEN_LIST_URL);
    tokenListCache = await response.json();
    lastFetchTime = now;
    return tokenListCache.tokens;
  } catch (error) {
    console.error('Failed to fetch token list:', error);
    throw new Error('Failed to fetch token list');
  }
};

export const findTokenBySymbol = async (symbol: string): Promise<TokenInfo | undefined> => {
  const tokens = await fetchTokenList();
  return tokens.find(token => token.symbol === symbol);
};

export const findTokenByAddress = async (address: string): Promise<TokenInfo | undefined> => {
  const tokens = await fetchTokenList();
  return tokens.find(token => token.address.toString() === address);
};