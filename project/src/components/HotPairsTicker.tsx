import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface HotPair {
  pair: string;
  price: string;
  change: string;
  icon: string;
}

const hotPairs: HotPair[] = [
  {
    pair: 'SOL/USDC',
    price: '$101.25',
    change: '+5.2%',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
  },
  {
    pair: 'RAY/USDC',
    price: '$2.45',
    change: '-2.1%',
    icon: 'https://raw.githubusercontent.com/raydium-io/media-assets/master/logo.png'
  },
  {
    pair: 'BONK/USDC',
    price: '$0.00001234',
    change: '+12.3%',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png'
  },
  {
    pair: 'JTO/USDC',
    price: '$3.45',
    change: '+8.7%',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL/logo.png'
  },
  {
    pair: 'ORCA/USDC',
    price: '$1.85',
    change: '+3.9%',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png'
  },
  {
    pair: 'MNDE/USDC',
    price: '$0.42',
    change: '+3.5%',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png'
  }
];

export default function HotPairsTicker() {
  return (
    <div className="w-full bg-gray-900/50 backdrop-blur-md border-y border-gray-800/50 h-12 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-wrapper">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="ticker-content flex items-center gap-2">
              {hotPairs.map((pair, index) => (
                <button
                  key={`${pair.pair}-${i}-${index}`}
                  className="flex-shrink-0 flex items-center gap-1 hover:bg-gray-800/50 px-1.5 py-1 rounded-lg transition-all duration-300"
                >
                  <img
                    src={pair.icon}
                    alt={pair.pair}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-white font-medium whitespace-nowrap">{pair.pair}</span>
                  <span className={`flex items-center text-sm whitespace-nowrap ${
                    pair.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {pair.change.startsWith('+') ? (
                      <TrendingUp className="h-3 w-3 mr-0.5" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-0.5" />
                    )}
                    {pair.change}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}