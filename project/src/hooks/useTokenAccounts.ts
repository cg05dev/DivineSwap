import { useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { findAssociatedTokenAddress } from '../utils/tokenAccounts';

export const useTokenAccounts = (tokenMints: PublicKey[]) => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [accounts, setAccounts] = useState<Map<string, PublicKey>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      if (!publicKey) return;

      setIsLoading(true);
      setError(null);

      try {
        const accountPromises = tokenMints.map(async (mint) => {
          const address = await findAssociatedTokenAddress(publicKey, mint);
          return [mint.toBase58(), address] as [string, PublicKey];
        });

        const accountEntries = await Promise.all(accountPromises);
        setAccounts(new Map(accountEntries));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch token accounts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, [connection, publicKey, tokenMints]);

  return { accounts, isLoading, error };
};