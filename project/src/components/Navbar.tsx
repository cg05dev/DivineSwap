import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Zap, ArrowDownUp, Wallet, Coins } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/swap', icon: ArrowDownUp, label: 'Swap' },
  { path: '/portfolio', icon: Wallet, label: 'Portfolio' },
  { path: '/tokens', icon: Coins, label: 'Tokens' },
];

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-zinc-900/50 backdrop-blur-md border-b border-zinc-800 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 text-blue-500">
                <Zap className="w-8 h-8 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Divine
              </span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  'flex items-center px-4 py-2 rounded-lg transition-colors',
                  currentPath === item.path
                    ? 'bg-blue-500/10 text-blue-500'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                )}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-950 to-purple-900 opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 animate-pulse" />
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Buy
              </span>
            </button>

            <WalletMultiButton className="!bg-gradient-to-r !from-blue-600 !to-blue-700 hover:!from-blue-700 hover:!to-blue-800 !transition-all !duration-300 !rounded-lg !h-[40px] !px-4 !py-2 !font-semibold !text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}