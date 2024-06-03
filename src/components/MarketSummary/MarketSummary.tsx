import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { MarketSummaryContainer, StyledCardContent, TrendContainer, TrendText, TrendIcon, NewsContainer } from './MarketSummary.styles';

// Dummy function to simulate API call
const fetchMarketData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        trend: 'bearish', // Possible values: 'bullish', 'bearish', 'neutral'
        news: 'Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face "Bumpy" 2% Path',
      });
    }, 1000);
  });
};

const MarketSummary: React.FC = () => {
  const [marketData, setMarketData] = useState({ trend: '', news: '' });

  useEffect(() => {
    fetchMarketData().then((data: any) => setMarketData(data));
  }, []);

  const getTrendIcon = (trend: string) => {
    if (trend === 'bullish') return <ArrowUpwardIcon />;
    if (trend === 'bearish') return <ArrowDownwardIcon />;
    return <TrendingFlatIcon />;
  };

  return (
    <MarketSummaryContainer>
      <StyledCardContent>
          <Box display={'flex'} alignItems={'center'}>
        <TrendContainer trend={marketData.trend} >
        <Typography variant="h6">
            The market is <TrendText trend={marketData.trend}>{marketData.trend}</TrendText>
          </Typography>
        </TrendContainer>
          <Box marginLeft={1}>
            <TrendIcon trend={marketData.trend}>
              {getTrendIcon(marketData.trend)}
            </TrendIcon>
          </Box>
          </Box>
        <NewsContainer  >
          <Typography variant="subtitle2" marginBottom={1} color="text.secondary">What you need to know today?</Typography>
          <Typography variant="h6" fontWeight={600}>{marketData.news}</Typography>
        </NewsContainer>
      </StyledCardContent>
    </MarketSummaryContainer>
  );
};

export default MarketSummary;
