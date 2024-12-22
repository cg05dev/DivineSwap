import React from 'react';
import { X, ExternalLink, Twitter, TrendingUp, TrendingDown, Globe } from 'lucide-react';
import { Button } from './ui/Button';

interface TokenData {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  volume: string;
  liquidity?: string;
  icon: string;
  isNew?: boolean;
  marketCap?: string;
  created?: string;
  description?: string;
  website?: string;
  twitter?: string;
  totalSupply?: string;
  circulatingSupply?: string;
}

interface TokenModalProps {
  token: TokenData;
  onClose: () => void;
  onSwap: (token: TokenData) => void;
}

export default function TokenModal({ token, onClose, onSwap }: TokenModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 rounded-xl w-full max-w-2xl p-6 border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={token.icon} alt={token.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold text-white">{token.name}</h2>
              <div className="flex items-center gap-2 text-gray-400">
                <span>{token.symbol}</span>
                {token.isNew && (
                  <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                    New
                  </span>
                )}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold text-white mb-2">{token.price}</div>
              <div className={`flex items-center gap-2 text-lg ${
                token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {token.change.startsWith('+') ? (
                  <TrendingUp className="w-5 h-5" />
                ) : (
                  <TrendingDown className="w-5 h-5" />
                )}
                {token.change} (24h)
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Market Cap</div>
                <div className="text-white font-medium">{token.marketCap}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">24h Volume</div>
                <div className="text-white font-medium">{token.volume}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Liquidity</div>
                <div className="text-white font-medium">{token.liquidity}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Created</div>
                <div className="text-white font-medium">{token.created}</div>
              </div>
            </div>

            <div className="flex gap-3">
              {token.website && (
                <a
                  href={token.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <Globe className="w-5 h-5" />
                  Website
                </a>
              )}
              {token.twitter && (
                <a
                  href={token.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-[200px] bg-gray-800/30 rounded-lg flex items-center justify-center text-gray-400">
              Price Chart Coming Soon
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Total Supply</div>
                <div className="text-white font-medium">{token.totalSupply}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Circulating Supply</div>
                <div className="text-white font-medium">{token.circulatingSupply}</div>
              </div>
            </div>

            {token.description && (
              <div>
                <div className="text-sm text-gray-400 mb-2">About</div>
                <p className="text-white">{token.description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <Button
            variant="primary"
            className="flex-1 py-3 text-lg font-semibold"
            onClick={() => onSwap(token)}
          >
            Swap {token.symbol}
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}