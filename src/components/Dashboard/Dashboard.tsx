import React from 'react';
import { Typography } from '@mui/material';
import { DashboardContainer } from './Dashboard.styles';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Market Dashboard
      </Typography>
      {/* Add your dashboard components here */}
    </DashboardContainer>
  );
};

export default Dashboard;
