
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockChartProps {
  data: Array<{ date: string; price: number; predicted?: number }>;
  symbol: string;
  currentPrice: number;
  change: number;
}

const StockChart: React.FC<StockChartProps> = ({ data, symbol, currentPrice, change }) => {
  const isPositive = change >= 0;

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{symbol}</CardTitle>
          <div className="flex items-center space-x-2">
            {isPositive ? (
              <TrendingUp className="h-5 w-5 text-green-500" />
            ) : (
              <TrendingDown className="h-5 w-5 text-red-500" />
            )}
            <span className="text-2xl font-bold">${currentPrice.toFixed(2)}</span>
            <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{change.toFixed(2)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fontSize: 12 }}
                domain={['dataMin - 10', 'dataMax + 10']}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                name="Actual Price"
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#10b981" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                name="Predicted Price"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;
