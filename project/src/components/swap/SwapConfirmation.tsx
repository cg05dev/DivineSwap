import React from 'react';
import { AlertTriangle, ArrowDown, Info, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface SwapConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fromToken: {
    symbol: string;
    icon: string;
    amount: string;
    usdValue: string;
  };
  toToken: {
    symbol: string;
    icon: string;
    amount: string;
    usdValue: string;
  };
  priceImpact: number;
  minimumReceived: string;
  networkFee: string;
  rate: string;
}

export function SwapConfirmation({
  isOpen,
  onClose,
  onConfirm,
  fromToken,
  toToken,
  priceImpact,
  minimumReceived,
  networkFee,
  rate,
}: SwapConfirmationProps) {
  if (!isOpen) return null;

  const getPriceImpactSeverity = (impact: number) => {
    if (impact < 1) return 'low';
    if (impact < 3) return 'medium';
    return 'high';
  };

  const priceImpactSeverity = getPriceImpactSeverity(priceImpact);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 rounded-xl w-full max-w-md p-6 border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Confirm Swap</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Token amounts */}
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={fromToken.icon} alt={fromToken.symbol} className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-lg font-medium text-white">{fromToken.amount} {fromToken.symbol}</div>
                <div className="text-sm text-gray-400">≈ {fromToken.usdValue}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-full p-2">
              <ArrowDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={toToken.icon} alt={toToken.symbol} className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-lg font-medium text-white">{toToken.amount} {toToken.symbol}</div>
                <div className="text-sm text-gray-400">≈ {toToken.usdValue}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rate */}
        <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-400">Rate</span>
            <span className="text-white font-medium">{rate}</span>
          </div>
        </div>

        {/* Price impact warning */}
        {priceImpact > 0.5 && (
          <div className={cn(
            "mt-4 p-3 rounded-lg flex items-center gap-2",
            {
              'bg-yellow-500/10 border border-yellow-500/20 text-yellow-500': priceImpactSeverity === 'medium',
              'bg-red-500/10 border border-red-500/20 text-red-500': priceImpactSeverity === 'high',
              'bg-blue-500/10 border border-blue-500/20 text-blue-400': priceImpactSeverity === 'low',
            }
          )}>
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-medium">High Price Impact</div>
              <div>This trade will move the market price by {priceImpact}%</div>
            </div>
          </div>
        )}

        {/* Transaction details */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-400">
              <span>Minimum received</span>
              <Info className="w-4 h-4" />
            </div>
            <span className="text-white">{minimumReceived}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-400">
              <span>Network fee</span>
              <Info className="w-4 h-4" />
            </div>
            <span className="text-white">{networkFee}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 space-y-3">
          <Button
            variant="primary"
            className="w-full py-3 text-lg font-semibold"
            onClick={onConfirm}
          >
            Confirm Swap
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}