import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import { SectorPerformanceContainer } from './SectorPerformance.styles';

const sectors = [
  { name: 'Industrials', change: '+1.66%' },
  { name: 'Communication Services', change: '+1.55%' },
  { name: 'Technology', change: '+1.08%' },
  { name: 'Consumer Cyclical', change: '+1.02%' },
  { name: 'Financial', change: '+0.99%' },
  { name: 'Healthcare', change: '+0.84%' },
  { name: 'Real Estate', change: '+0.69%' },
  { name: 'Basic Materials', change: '+0.65%' },
  { name: 'Utilities', change: '+0.57%' },
  { name: 'Energy', change: '-0.05%' },
  { name: 'Consumer Defensive', change: '-0.12%' },
];

const SectorPerformance: React.FC = () => {
  return (
    <SectorPerformanceContainer>
      <CardContent>
        <Typography variant="h6">Sector Performance</Typography>
        <Box>
          {sectors.map((sector) => (
            <Typography 
              key={sector.name} 
              variant="body2" 
              color={sector.change.startsWith('+') ? 'green' : 'red'}
            >
              {sector.name}: {sector.change}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </SectorPerformanceContainer>
  );
};

export default SectorPerformance;
