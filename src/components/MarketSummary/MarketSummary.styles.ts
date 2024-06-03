import { styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography } from '@mui/material';

export const MarketSummaryContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%', 

}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: '1', 
  backgroundColor: theme.palette.customColors.cardBackground, 
}));

export const TrendContainer = styled(Box)(({ theme, trend }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  paddingRight:theme.spacing(2),
  paddingLeft:theme.spacing(3),
  marginRight:theme.spacing(2),
  backgroundColor: theme.palette.background.default, 
  borderRadius: theme.spacing(8), // Adjust the value as needed
  width: 'auto',

  
}));

export const TrendIcon = styled(Box)(({ theme, trend }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(7),
  height: theme.spacing(7),
  borderRadius: '50%',
  backgroundColor: theme.palette.background.default,
  color: trend === 'bullish' ? theme.palette.success.main : trend === 'bearish' ? theme.palette.error.main : theme.palette.text.primary,
}));

export const TrendText = styled('span')(({ theme, trend }) => ({
     marginRight: theme.spacing(2),
     color: trend === 'bullish' ? theme.palette.success.main : trend === 'bearish' ? theme.palette.error.main : theme.palette.text.primary,
   }));

export const NewsContainer = styled(Box)(({ theme }) => ({
  marginTop: 'auto', // Push the container to the bottom
  marginBottom: theme.spacing(2), 
  padding: theme.spacing(2),
  rowGap: theme.spacing(4),
  paddingBottom: theme.spacing(0),
}));
