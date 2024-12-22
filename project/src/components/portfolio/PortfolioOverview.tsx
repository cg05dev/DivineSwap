import React from 'react';
import { Card } from '../ui/Card';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

export function PortfolioOverview() {
  const stats = [
    {
      label: 'Total Value',
      value: '$124,582.45',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: '24h Change',
      value: '$1,245.80',
      change: '+2.3%',
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: 'Total Profit/Loss',
      value: '$15,678.90',
      change: '+18.7%',
      isPositive: true,
      icon: Percent,
    },
  ];

  const assets = [
    { name: 'SOL', value: '$45,678.90', allocation: 36.5, change: '+5.2%' },
    { name: 'USDC', value: '$35,456.78', allocation: 28.4, change: '0.0%' },
    { name: 'RAY', value: '$12,345.67', allocation: 9.9, change: '-2.1%' },
    { name: 'SRM', value: '$8,765.43', allocation: 7.0, change: '+1.8%' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <span className={`flex items-center text-sm ${
                  stat.isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.isPositive ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </span>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Asset Distribution</h3>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div key={asset.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {asset.name[0]}
                  </div>
                  <span className="text-white font-medium">{asset.name}</span>
                </div>
                <span className="text-white">{asset.value}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${asset.allocation}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400">{asset.allocation}%</span>
                <span className={`text-sm ${
                  asset.change.startsWith('+')
                    ? 'text-green-500'
                    : asset.change.startsWith('-')
                    ? 'text-red-500'
                    : 'text-gray-400'
                }`}>
                  {asset.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}