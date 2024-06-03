import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import { MarketOverviewContainer } from './MarketOverview.styles';

const MarketOverview: React.FC = () => {
  return (
    <MarketOverviewContainer>
      <CardContent>
        <Typography variant="h6">Market Overview</Typography>
        <Box sx={{ height: '400px', backgroundColor: '#333', borderRadius: '8px' }}>
          {/* Placeholder for the chart */}
          <Typography variant="h6" align="center" sx={{ padding: 2 }}>
            Market Index Chart (Toggle between 1D, 1W, 1M, etc.)
          </Typography>
        </Box>
      </CardContent>
    </MarketOverviewContainer>
  );
};

export default MarketOverview;
