
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StockChart from '@/components/StockChart';
import PredictionForm from '@/components/PredictionForm';
import StockCard from '@/components/StockCard';
import { Brain, TrendingUp, Shield, Zap, BarChart3, Target } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  // Mock data for demonstration
  const stockData = [
    { date: '2024-01', price: 150, predicted: 155 },
    { date: '2024-02', price: 160, predicted: 165 },
    { date: '2024-03', price: 155, predicted: 160 },
    { date: '2024-04', price: 170, predicted: 175 },
    { date: '2024-05', price: 165, predicted: 170 },
    { date: '2024-06', price: 180, predicted: 185 },
  ];

  const popularStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.50, change: 2.5, volume: '50.2M', marketCap: '2.8T', confidence: 85 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.30, change: -1.2, volume: '25.8M', marketCap: '1.8T', confidence: 78 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.75, change: 5.7, volume: '75.4M', marketCap: '790B', confidence: 72 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 420.15, change: 1.8, volume: '32.1M', marketCap: '3.1T', confidence: 88 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 155.80, change: -0.5, volume: '40.3M', marketCap: '1.6T', confidence: 81 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 875.90, change: 8.2, volume: '65.7M', marketCap: '2.2T', confidence: 90 },
  ];

  const handlePredict = (symbol: string, timeframe: string, model: string) => {
    setIsLoading(true);
    console.log(`Generating prediction for ${symbol} using ${model} model for ${timeframe}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSelectedStock(symbol);
      toast({
        title: "Prediction Complete",
        description: `AI analysis for ${symbol} is ready to view.`,
      });
    }, 3000);
  };

  const handleStockClick = (symbol: string) => {
    setSelectedStock(symbol);
    toast({
      title: "Stock Selected",
      description: `Viewing detailed analysis for ${symbol}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                AI-Powered Predictions
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smart Stock
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Predictions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Harness the power of advanced AI algorithms to predict stock movements with unprecedented accuracy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('prediction-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Predicting
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('popular-stocks')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Explore Stocks
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our AI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced machine learning models trained on massive datasets to deliver accurate predictions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced AI Models</h3>
              <p className="text-muted-foreground">
                Utilizing state-of-the-art neural networks including LSTM and Transformer architectures
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">High Accuracy</h3>
              <p className="text-muted-foreground">
                Our models achieve over 80% accuracy in short-term predictions with continuous learning
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Analysis</h3>
              <p className="text-muted-foreground">
                Get instant predictions with real-time market data processing and sentiment analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Prediction Form */}
        <div id="prediction-form" className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Generate AI Prediction</h2>
              <p className="text-muted-foreground text-lg">
                Enter a stock symbol and select your preferred AI model to get detailed price predictions with confidence intervals.
              </p>
            </div>
            <PredictionForm onPredict={handlePredict} isLoading={isLoading} />
          </div>
          <div className="space-y-6">
            {selectedStock ? (
              <StockChart 
                data={stockData}
                symbol={selectedStock}
                currentPrice={175.50}
                change={2.5}
              />
            ) : (
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
                <div className="text-center p-8">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Chart Preview</h3>
                  <p className="text-gray-500">Select a stock or generate a prediction to view the interactive chart</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Popular Stocks */}
        <div id="popular-stocks" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Popular Stocks</h2>
            <p className="text-muted-foreground text-lg">
              Explore trending stocks with our AI confidence ratings and real-time data
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularStocks.map((stock) => (
              <StockCard
                key={stock.symbol}
                {...stock}
                onClick={() => handleStockClick(stock.symbol)}
              />
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-300" />
          <h2 className="text-3xl font-bold mb-4">Trusted by Investors Worldwide</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our predictions are used by thousands of traders and investors to make informed decisions in the stock market
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">10K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">85%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-blue-100">Stocks Tracked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
