
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PredictionFormProps {
  onPredict: (symbol: string, timeframe: string, model: string) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onPredict, isLoading }) => {
  const [symbol, setSymbol] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symbol || !timeframe || !model) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate a prediction.",
        variant: "destructive"
      });
      return;
    }

    onPredict(symbol.toUpperCase(), timeframe, model);
    toast({
      title: "Prediction Generated",
      description: `AI model is analyzing ${symbol.toUpperCase()} for ${timeframe} prediction.`,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-blue-500" />
          <span>AI Stock Prediction</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="symbol" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Stock Symbol</span>
            </Label>
            <Input
              id="symbol"
              placeholder="e.g., AAPL, GOOGL, TSLA"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="uppercase"
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Prediction Timeframe</span>
            </Label>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1day">1 Day</SelectItem>
                <SelectItem value="1week">1 Week</SelectItem>
                <SelectItem value="1month">1 Month</SelectItem>
                <SelectItem value="3months">3 Months</SelectItem>
                <SelectItem value="6months">6 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>AI Model</span>
            </Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select AI model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lstm">
                  <div className="flex items-center justify-between w-full">
                    <span>LSTM Neural Network</span>
                    <Badge variant="secondary" className="ml-2">Advanced</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="transformer">
                  <div className="flex items-center justify-between w-full">
                    <span>Transformer Model</span>
                    <Badge variant="secondary" className="ml-2">Premium</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="ensemble">
                  <div className="flex items-center justify-between w-full">
                    <span>Ensemble Method</span>
                    <Badge variant="secondary" className="ml-2">Accurate</Badge>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Generate Prediction</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PredictionForm;
