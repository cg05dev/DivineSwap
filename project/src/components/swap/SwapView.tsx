import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowDownUp, Settings, Info, ChevronDown, Zap } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SwapConfirmation } from './SwapConfirmation';
import { useSwap } from '../../hooks/useSwap';

interface Token {
  symbol: string;
  name: string;
  icon: string;
  balance?: string;
  usdBalance?: string;
}

export default function SwapView() {
  const { connected } = useWallet();
  const { executeSwap, isLoading } = useSwap();
  const location = useLocation();
  const { selectedToken } = location.state || {};

  const [fromToken, setFromToken] = useState<Token>(selectedToken || {
    symbol: 'SOL',
    name: 'Solana',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    balance: '12.5',
    usdBalance: '$1,265.75'
  });

  const [toToken, setToToken] = useState<Token>({
    symbol: 'USDC',
    name: 'USD Coin',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    balance: '1,250.00',
    usdBalance: '$1,250.00'
  });

  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');
  const [showSettings, setShowSettings] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || Number(value) >= 0) {
      setAmount(value);
    }
  };

  const handleMaxClick = () => {
    if (fromToken.balance) {
      setAmount(fromToken.balance);
    }
  };

  const handleSwap = async () => {
    if (!connected) return;
    setShowConfirmation(true);
  };

  const handleTokenSwitch = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setAmount('');
  };

  return (
    <div className="flex gap-6">
      {/* Chart Section */}
      <div className="flex-grow">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={fromToken.icon} alt={fromToken.symbol} className="w-6 h-6 rounded-full" />
              <span className="text-lg font-bold text-white">{fromToken.symbol}/{toToken.symbol}</span>
              <span className="text-sm text-gray-400">≈ $101.25</span>
            </div>
            <div className="flex gap-2">
              {['5m', '15m', '1H', '4H', '1D', '1W'].map((tf) => (
                <Button
                  key={tf}
                  variant="secondary"
                  size="sm"
                >
                  {tf}
                </Button>
              ))}
            </div>
          </div>
          <div className="h-[400px] bg-gray-800/30 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p>Chart will appear when tokens are selected</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Swap Interface */}
      <div className="w-[400px]">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold text-white">Swap</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>

          {showSettings && (
            <div className="mb-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Slippage Tolerance</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={slippage}
                    onChange={(e) => setSlippage(e.target.value)}
                    className="w-16 px-2 py-1 bg-gray-700 rounded-lg text-sm text-white text-right"
                  />
                  <span className="text-gray-400">%</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {/* From Token */}
            <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">From</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">
                    Balance: {fromToken.balance} {fromToken.symbol}
                  </span>
                  <span className="text-xs text-gray-500">
                    (≈ {fromToken.usdBalance})
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                  <img
                    src={fromToken.icon}
                    alt={fromToken.symbol}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-white">{fromToken.symbol}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    min="0"
                    step="any"
                    placeholder="0.00"
                    className="w-full bg-transparent text-2xl text-white placeholder-gray-500 outline-none text-right pr-16"
                  />
                  <button
                    onClick={handleMaxClick}
                    className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-blue-400 hover:text-blue-300 font-medium"
                  >
                    MAX
                  </button>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center -my-2 relative z-10">
              <button 
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors"
                onClick={handleTokenSwitch}
              >
                <ArrowDownUp className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* To Token */}
            <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">To</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">
                    Balance: {toToken.balance} {toToken.symbol}
                  </span>
                  <span className="text-xs text-gray-500">
                    (≈ {toToken.usdBalance})
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                  <img
                    src={toToken.icon}
                    alt={toToken.symbol}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-white">{toToken.symbol}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={amount ? (Number(amount) * 101.25).toFixed(2) : ''}
                    disabled
                    className="w-full bg-transparent text-2xl text-white placeholder-gray-500 outline-none text-right"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Swap Details */}
            <div className="p-4 rounded-lg bg-gray-800/50 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Rate</span>
                <span className="text-white">1 {fromToken.symbol} = 101.25 {toToken.symbol}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Price Impact</span>
                <span className="text-green-500">&lt; 0.01%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Network Fee</span>
                <span className="text-white">~0.000005 SOL</span>
              </div>
            </div>

            {connected ? (
              <Button
                variant="primary"
                className="w-full py-3 text-lg font-semibold"
                onClick={handleSwap}
                disabled={!amount || isLoading}
              >
                {isLoading ? 'Swapping...' : 'Swap'}
              </Button>
            ) : (
              <WalletMultiButton className="w-full !bg-gradient-to-r !from-black !via-blue-950 !to-purple-900 !h-[52px] !text-lg !font-semibold" />
            )}
          </div>
        </Card>
      </div>

      <SwapConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={async () => {
          try {
            await executeSwap(
              fromToken.symbol,
              toToken.symbol,
              Number(amount),
              Number(slippage)
            );
            setShowConfirmation(false);
            setAmount('');
          } catch (error) {
            console.error('Swap failed:', error);
          }
        }}
        fromToken={{
          symbol: fromToken.symbol,
          icon: fromToken.icon,
          amount: amount,
          usdValue: `$${(Number(amount) * 101.25).toFixed(2)}`,
        }}
        toToken={{
          symbol: toToken.symbol,
          icon: toToken.icon,
          amount: (Number(amount) * 101.25).toFixed(2),
          usdValue: `$${(Number(amount) * 101.25).toFixed(2)}`,
        }}
        priceImpact={0.01}
        minimumReceived={`${(Number(amount) * 101.25 * 0.995).toFixed(2)} ${toToken.symbol}`}
        networkFee="~0.000005 SOL"
        rate={`1 ${fromToken.symbol} = 101.25 ${toToken.symbol}`}
      />
    </div>
  );
}