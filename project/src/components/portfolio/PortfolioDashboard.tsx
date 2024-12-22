import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Wallet, 
  LineChart, 
  PieChart, 
  History, 
  TrendingUp, 
  TrendingDown,
  ArrowRight
} from 'lucide-react';

export default function PortfolioDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const portfolioValue = {
    total: '$124,582.45',
    change24h: '+$1,245.80',
    percentChange: '+2.3%',
  };

  const assets = [
    { 
      name: 'Solana',
      symbol: 'SOL',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      balance: '145.5',
      value: '$14,731.88',
      change24h: '+5.2%',
      isPositive: true
    },
    { 
      name: 'USD Coin',
      symbol: 'USDC',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
      balance: '10,000',
      value: '$10,000.00',
      change24h: '0.0%',
      isPositive: true
    },
  ];

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Portfolio Value Card */}
      <Card className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-800/50">
        <div className="mb-6">
          <h2 className="text-gray-400 mb-2">Total Portfolio Value</h2>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">{portfolioValue.total}</span>
            <span className={`flex items-center text-lg ${
              portfolioValue.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}>
              {portfolioValue.change24h} ({portfolioValue.percentChange})
            </span>
          </div>
        </div>

        <div className="h-[200px] bg-gray-800/30 rounded-lg mb-4">
          <div className="h-full flex items-center justify-center text-gray-400">
            Portfolio Chart Coming Soon
          </div>
        </div>

        <div className="flex gap-2">
          {['1H', '24H', '7D', '30D', '90D', 'ALL'].map((timeframe) => (
            <Button
              key={timeframe}
              variant="secondary"
              size="sm"
              className="flex-1"
            >
              {timeframe}
            </Button>
          ))}
        </div>
      </Card>

      {/* Assets List */}
      <Card className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-800/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Your Assets</h2>
          <Button variant="ghost" size="sm">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left pb-4">Asset</th>
                <th className="text-right pb-4">Balance</th>
                <th className="text-right pb-4">Value</th>
                <th className="text-right pb-4">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr 
                  key={asset.symbol}
                  className="border-t border-gray-800/50 hover:bg-gray-800/20 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={asset.icon} 
                        alt={asset.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-white">{asset.name}</div>
                        <div className="text-sm text-gray-400">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right text-white">{asset.balance}</td>
                  <td className="text-right text-white">{asset.value}</td>
                  <td className="text-right">
                    <span className={`flex items-center justify-end gap-1 ${
                      asset.isPositive ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {asset.isPositive ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {asset.change24h}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-800/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          <Button variant="ghost" size="sm">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="space-y-4">
          {[
            { type: 'Swap', description: 'Swapped 10 SOL for 1,012.50 USDC', time: '2h ago' },
            { type: 'Deposit', description: 'Deposited 1,000 USDC', time: '5h ago' },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-800/20 hover:bg-gray-800/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <History className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-medium text-white">{activity.type}</div>
                  <div className="text-sm text-gray-400">{activity.description}</div>
                </div>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}