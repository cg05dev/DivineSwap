import { useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useConnection } from '@solana/wallet-adapter-react';
import { Pool } from '../types/dex';
import { fetchPoolData } from '../utils/pools';
import { POOL_CACHE_DURATION } from '../config/constants';

export const usePoolData = (poolAddress: PublicKey) => {
  const { connection } = useConnection();
  const [pool, setPool] = useState<Pool | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPool = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const poolData = await fetchPoolData(connection, poolAddress);
        setPool(poolData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch pool data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPool();
    const interval = setInterval(fetchPool, POOL_CACHE_DURATION);

    return () => clearInterval(interval);
  }, [connection, poolAddress]);

  return { pool, isLoading, error };
};