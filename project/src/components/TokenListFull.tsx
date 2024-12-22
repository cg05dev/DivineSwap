import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import TokenModal from './TokenModal';

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
}

const tokens: TokenData[] = [
  {
    id: '1',
    name: 'Solana',
    symbol: 'SOL',
    price: '$101.25',
    change: '+5.2%',
    volume: '$1.2B',
    marketCap: '$45.2B',
    liquidity: '$850M',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
  },
  // Add more tokens as needed
];

export default function TokenListFull() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedToken, setSelectedToken] = useState<TokenData | null>(null);

  const getCategoryTitle = () => {
    switch (category) {
      case 'gainers':
        return 'Top Performers';
      case 'volume':
        return 'Highest Volume';
      case 'new':
        return 'New Liquidity Pools';
      default:
        return 'All Tokens';
    }
  };

  const handleTokenClick = (token: TokenData) => {
    setSelectedToken(token);
  };

  const handleSwapToken = (token: TokenData) => {
    setSelectedToken(null);
    navigate('/swap', { state: { selectedToken: token } });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/tokens')}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold text-white">{getCategoryTitle()}</h1>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-800">
                <th className="pb-4 pl-4">Token</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">24h Change</th>
                <th className="pb-4">Volume</th>
                <th className="pb-4">Market Cap</th>
                <th className="pb-4">Liquidity</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr
                  key={token.id}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors cursor-pointer"
                  onClick={() => handleTokenClick(token)}
                >
                  <td className="py-4 pl-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={token.icon}
                        alt={token.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-white">{token.name}</div>
                        <div className="text-sm text-gray-400">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-white">{token.price}</td>
                  <td>
                    <span className={`flex items-center gap-1 ${
                      token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {token.change.startsWith('+') ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {token.change}
                    </span>
                  </td>
                  <td className="text-white">{token.volume}</td>
                  <td className="text-white">{token.marketCap}</td>
                  <td className="text-white">{token.liquidity}</td>
                  <td>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSwapToken(token);
                      }}
                    >
                      Swap
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedToken && (
        <TokenModal
          token={selectedToken}
          onClose={() => setSelectedToken(null)}
          onSwap={handleSwapToken}
        />
      )}
    </div>
  );
}