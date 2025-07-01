
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity, Eye } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
  confidence: number;
  onClick: () => void;
}

const StockCard: React.FC<StockCardProps> = ({
  symbol,
  name,
  price,
  change,
  volume,
  marketCap,
  confidence,
  onClick
}) => {
  const isPositive = change >= 0;

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-primary/50"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-bold">{symbol}</CardTitle>
            <p className="text-sm text-muted-foreground truncate">{name}</p>
          </div>
          <Badge 
            variant={confidence >= 80 ? "default" : confidence >= 60 ? "secondary" : "outline"}
            className="ml-2"
          >
            {confidence}% confidence
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{change.toFixed(2)}%
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center space-x-1">
            <Activity className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Volume:</span>
            <span className="font-medium">{volume}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground">Cap:</span>
            <span className="font-medium">{marketCap}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center pt-2 border-t">
          <Eye className="h-4 w-4 mr-2 text-primary" />
          <span className="text-sm text-primary font-medium">View Analysis</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;
