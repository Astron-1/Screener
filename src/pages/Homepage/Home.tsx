import React from 'react';
import { Grid } from '@mui/material';
import Header from '../../components/Header/Header';
import MarketSummary from '../../components/MarketSummary/MarketSummary';
import SectorPerformance from '../../components/SectorPerformance/SectorPerformance';
import MarketOverview from '../../components/MarketOverview/MarketOverview';
import { HomeContainer } from './Home.styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MarketSummary />
        </Grid>
        <Grid item xs={12} md={6}>
          <SectorPerformance />
        </Grid>
        <Grid item xs={12}>
          <MarketOverview />
        </Grid>
      </Grid>
    </HomeContainer>
  );
};

export default Home;
