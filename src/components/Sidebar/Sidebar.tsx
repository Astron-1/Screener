import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List, ListItemText, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DrawerStyled, SidebarLogo, SidebarContent, ListItemButtonStyled, ListItemIconStyled, ActiveIndicator } from './Sidebar.styles';

const drawerWidth = 240;
const collapsedWidth = 60;

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Search', icon: <SearchIcon />, path: '/search' },
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' }
];

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <DrawerStyled
      variant="permanent"
      open={isExpanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: isExpanded ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: isExpanded ? drawerWidth : collapsedWidth, 
          boxSizing: 'border-box',
          transition: 'width 0.3s'
        },
      }}
    >
      <Toolbar>
        <SidebarLogo>
          {isExpanded && (
            <Typography variant="h6" noWrap>
              Stock Dashboard
            </Typography>
          )}
        </SidebarLogo>
      </Toolbar>
      <SidebarContent>
        <List>
          {menuItems.map((item) => (
            <ListItemButtonStyled
              key={item.text}
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIconStyled selected={location.pathname === item.path}>
                {item.icon}
              </ListItemIconStyled>
              {isExpanded && <ListItemText primary={item.text} />}
              {location.pathname === item.path && <ActiveIndicator />}
            </ListItemButtonStyled>
          ))}
        </List>
      </SidebarContent>
    </DrawerStyled>
  );
};

export default Sidebar;
