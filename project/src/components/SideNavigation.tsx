import React from 'react';
import { Wallet, Coins, Users, Repeat } from 'lucide-react';
import { ActiveView } from '../App';
import { cn } from '../utils/cn';

interface SideNavigationProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

interface NavItem {
  id: ActiveView;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'swap', icon: Repeat, label: 'Swap' },
  { id: 'portfolio', icon: Wallet, label: 'Portfolio' },
  { id: 'tokens', icon: Coins, label: 'Tokens' },
  { id: 'community', icon: Users, label: 'Community' },
];

export function SideNavigation({ activeView, setActiveView }: SideNavigationProps) {
  return (
    <div className="fixed h-screen bg-gray-900/50 backdrop-blur-md border-r border-gray-800 pt-20 z-40 w-20">
      <div className="flex flex-col items-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={cn(
              'w-14 h-14 rounded-xl flex flex-col justify-center items-center gap-1',
              'group relative transition-all duration-300',
              activeView === item.id
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}