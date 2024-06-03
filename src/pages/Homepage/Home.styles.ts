import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: '100vh',
  padding: theme.spacing(8),
  paddingTop: theme.spacing(0),
}));
