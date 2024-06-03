import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const MarketOverviewContainer = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));
