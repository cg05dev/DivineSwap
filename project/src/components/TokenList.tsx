import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, BarChart2, Droplet, Star, ArrowRight, ToggleLeft, ToggleRight } from 'lucide-react';
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
  created?: string;
}

export default function TokenList() {
  const navigate = useNavigate();
  const [showGainers, setShowGainers] = useState(true);
  const [selectedToken, setSelectedToken] = useState<TokenData | null>(null);

  const gainers: TokenData[] = [
    {
      id: 'g1',
      name: 'Bonk',
      symbol: 'BONK',
      price: '$0.00001234',
      change: '+12.3%',
      volume: '$1.2M',
      marketCap: '$123M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png'
    },
    {
      id: 'g2',
      name: 'Jito',
      symbol: 'JTO',
      price: '$3.45',
      change: '+8.7%',
      volume: '$890K',
      marketCap: '$345M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL/logo.png'
    },
    {
      id: 'g3',
      name: 'Solana',
      symbol: 'SOL',
      price: '$101.25',
      change: '+5.2%',
      volume: '$1.2B',
      marketCap: '$45.2B',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'g4',
      name: 'Raydium',
      symbol: 'RAY',
      price: '$2.45',
      change: '+4.8%',
      volume: '$89M',
      marketCap: '$245M',
      icon: 'https://raw.githubusercontent.com/raydium-io/media-assets/master/logo.png'
    },
    {
      id: 'g5',
      name: 'Orca',
      symbol: 'ORCA',
      price: '$1.85',
      change: '+3.9%',
      volume: '$45M',
      marketCap: '$185M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png'
    },
    {
      id: 'g6',
      name: 'Marinade',
      symbol: 'MNDE',
      price: '$0.42',
      change: '+3.5%',
      volume: '$280K',
      marketCap: '$42M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png'
    },
    {
      id: 'g7',
      name: 'Serum',
      symbol: 'SRM',
      price: '$0.95',
      change: '+2.8%',
      volume: '$45M',
      marketCap: '$95M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png'
    },
    {
      id: 'g8',
      name: 'Star Atlas',
      symbol: 'ATLAS',
      price: '$0.02',
      change: '+2.5%',
      volume: '$320K',
      marketCap: '$2M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png'
    }
  ];

  const losers: TokenData[] = [
    {
      id: 'l1',
      name: 'Token A',
      symbol: 'TOKA',
      price: '$1.20',
      change: '-8.5%',
      volume: '$450K',
      marketCap: '$120M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l2',
      name: 'Token B',
      symbol: 'TOKB',
      price: '$0.85',
      change: '-6.2%',
      volume: '$280K',
      marketCap: '$85M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l3',
      name: 'Token C',
      symbol: 'TOKC',
      price: '$2.15',
      change: '-5.8%',
      volume: '$890K',
      marketCap: '$215M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l4',
      name: 'Token D',
      symbol: 'TOKD',
      price: '$0.45',
      change: '-4.9%',
      volume: '$150K',
      marketCap: '$45M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l5',
      name: 'Token E',
      symbol: 'TOKE',
      price: '$1.75',
      change: '-4.2%',
      volume: '$320K',
      marketCap: '$175M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l6',
      name: 'Token F',
      symbol: 'TOKF',
      price: '$3.20',
      change: '-3.8%',
      volume: '$670K',
      marketCap: '$320M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l7',
      name: 'Token G',
      symbol: 'TOKG',
      price: '$0.95',
      change: '-3.5%',
      volume: '$240K',
      marketCap: '$95M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'l8',
      name: 'Token H',
      symbol: 'TOKH',
      price: '$1.45',
      change: '-3.1%',
      volume: '$430K',
      marketCap: '$145M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    }
  ];

  const topVolume: TokenData[] = [
    {
      id: 'v1',
      name: 'Solana',
      symbol: 'SOL',
      price: '$101.25',
      change: '+5.2%',
      volume: '$1.2B',
      marketCap: '$45.2B',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
    },
    {
      id: 'v2',
      name: 'Raydium',
      symbol: 'RAY',
      price: '$2.45',
      change: '-2.1%',
      volume: '$89M',
      marketCap: '$245M',
      icon: 'https://raw.githubusercontent.com/raydium-io/media-assets/master/logo.png'
    },
    {
      id: 'v3',
      name: 'Serum',
      symbol: 'SRM',
      price: '$0.95',
      change: '+1.8%',
      volume: '$45M',
      marketCap: '$95M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png'
    },
    {
      id: 'v4',
      name: 'Bonk',
      symbol: 'BONK',
      price: '$0.00001234',
      change: '+12.3%',
      volume: '$1.2M',
      marketCap: '$123M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png'
    },
    {
      id: 'v5',
      name: 'Jito',
      symbol: 'JTO',
      price: '$3.45',
      change: '+8.7%',
      volume: '$890K',
      marketCap: '$345M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL/logo.png'
    },
    {
      id: 'v6',
      name: 'Orca',
      symbol: 'ORCA',
      price: '$1.85',
      change: '+3.9%',
      volume: '$45M',
      marketCap: '$185M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png'
    },
    {
      id: 'v7',
      name: 'Marinade',
      symbol: 'MNDE',
      price: '$0.42',
      change: '+3.5%',
      volume: '$280K',
      marketCap: '$42M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png'
    },
    {
      id: 'v8',
      name: 'Star Atlas',
      symbol: 'ATLAS',
      price: '$0.02',
      change: '+2.5%',
      volume: '$320K',
      marketCap: '$2M',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png'
    }
  ];

  const newPools: TokenData[] = [
    {
      id: 'n1',
      name: 'Jupiter',
      symbol: 'JUP',
      price: '$0.85',
      change: '+3.2%',
      liquidity: '$2.5M',
      volume: '$450K',
      marketCap: '$85M',
      created: '2024-01-15',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN/logo.png',
      isNew: true
    },
    {
      id: 'n2',
      name: 'Marinade',
      symbol: 'MNDE',
      price: '$0.42',
      change: '+1.5%',
      liquidity: '$1.8M',
      volume: '$280K',
      marketCap: '$42M',
      created: '2024-01-18',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png',
      isNew: true
    },
    {
      id: 'n3',
      name: 'Drift Protocol',
      symbol: 'DRIFT',
      price: '$1.25',
      change: '+2.8%',
      liquidity: '$1.2M',
      volume: '$180K',
      marketCap: '$125M',
      created: '2024-01-20',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      isNew: true
    },
    {
      id: 'n4',
      name: 'Zeta Markets',
      symbol: 'ZETA',
      price: '$0.65',
      change: '+1.9%',
      liquidity: '$950K',
      volume: '$120K',
      marketCap: '$65M',
      created: '2024-01-22',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      isNew: true
    },
    {
      id: 'n5',
      name: 'Meteora',
      symbol: 'MORA',
      price: '$0.32',
      change: '+4.2%',
      liquidity: '$780K',
      volume: '$95K',
      marketCap: '$32M',
      created: '2024-01-25',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      isNew: true
    },
    {
      id: 'n6',
      name: 'Kamino Finance',
      symbol: 'KMNO',
      price: '$0.95',
      change: '+3.5%',
      liquidity: '$650K',
      volume: '$85K',
      marketCap: '$95M',
      created: '2024-01-28',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      isNew: true
    },
    {
      id: 'n7',
      name: 'Dual Finance',
      symbol: 'DUAL',
      price: '$0.48',
      change: '+2.7%',
      liquidity: '$520K',
      volume: '$75K',
      marketCap: '$48M',
      created: '2024-01-30',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      isNew: true
    },
    {
      id: 'n8',
      name: 'Lifinity',
      symbol: 'LFNTY',
      price: '$0.28',
      change: '+1.8%',
      liquidity: '$420K',
      volume: '$65K',
      marketCap: '$28M',
      created: '2024-02-01',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      isNew: true
    }
  ];

  const handleTokenClick = (token: TokenData) => {
    setSelectedToken(token);
  };

  const handleSwapToken = (token: TokenData) => {
    setSelectedToken(null);
    navigate('/swap', { state: { selectedToken: token } });
  };

  const TokenRow = ({ token }: { token: TokenData }) => (
    <div 
      className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all cursor-pointer group"
      onClick={() => handleTokenClick(token)}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={token.icon}
            alt={token.name}
            className="w-8 h-8 rounded-full"
          />
          {token.isNew && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-white">{token.name}</span>
            <span className="text-sm text-gray-400">{token.symbol}</span>
          </div>
          <div className="text-sm text-gray-400">
            {token.liquidity && `Liquidity: ${token.liquidity}`}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <div className="font-medium text-white">{token.price}</div>
          <div className={`text-sm flex items-center justify-end gap-1 ${
            token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
          }`}>
            {token.change.startsWith('+') ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {token.change}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Volume</div>
          <div className="font-medium text-white">{token.volume}</div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            handleSwapToken(token);
          }}
        >
          Swap
        </Button>
      </div>
    </div>
  );

  const CategorySection = ({ 
    title, 
    icon: Icon, 
    tokens,
    category,
    showViewAll = true,
    showSwitch = false,
    onToggle = () => {},
    isToggled = false
  }: { 
    title: string;
    icon: any;
    tokens: TokenData[];
    category: string;
    showViewAll?: boolean;
    showSwitch?: boolean;
    onToggle?: () => void;
    isToggled?: boolean;
  }) => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        {showSwitch && (
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            {isToggled ? 'Show Gainers' : 'Show Losers'}
            {isToggled ? (
              <ToggleRight className="w-5 h-5 text-blue-500" />
            ) : (
              <ToggleLeft className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      <div className="space-y-2">
        {tokens.slice(0, 8).map((token) => (
          <TokenRow key={token.id} token={token} />
        ))}
      </div>
      {showViewAll && (
        <Button
          variant="ghost"
          className="w-full mt-4 text-blue-400 hover:text-blue-300"
          onClick={() => navigate(`/tokens/${category}`)}
        >
          View All <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      )}
    </Card>
  );

  return (
    <div className="grid grid-cols-3 gap-6">
      <CategorySection
        title="Top Performers"
        icon={TrendingUp}
        tokens={showGainers ? gainers : losers}
        category="gainers"
        showSwitch={true}
        onToggle={() => setShowGainers(!showGainers)}
        isToggled={!showGainers}
      />
      
      <CategorySection
        title="Highest Volume"
        icon={BarChart2}
        tokens={topVolume}
        category="volume"
      />
      
      <CategorySection
        title="New Liquidity Pools"
        icon={Droplet}
        tokens={newPools}
        category="new"
      />

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