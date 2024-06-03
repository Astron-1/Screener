import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

interface ListItemIconStyledProps {
  selected: boolean;
}

export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#1d1d1d',
    color: '#ffffff',
    overflowX: 'hidden',
  },
}));

export const SidebarLogo = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '64px', // Ensuring the toolbar height matches the default
}));

export const SidebarContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100% - 64px)', // Adjusting for the height of the toolbar
}));

export const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(1, 2),
  position: 'relative', // To position the ActiveIndicator
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const ListItemIconStyled = styled(ListItemIcon)<ListItemIconStyledProps>(({ theme, selected }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: selected ? '#90caf9' : 'inherit',
}));

export const ActiveIndicator = styled('div')(({ theme }) => ({
  width: '4px',
  height: '100%',
  backgroundColor: '#90caf9',
  position: 'absolute',
  right: 0,
  top: 0,
}));
