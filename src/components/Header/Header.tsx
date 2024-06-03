import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ScreenerIcon from '@mui/icons-material/FilterList';
import { HeaderContainer, IconsContainer } from './Header.styles.ts';

const Header: React.FC = () => {
  const userName = localStorage.getItem("userName") || "Jane";

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const currentDate = formatDate(new Date());

  return (
    <HeaderContainer>
      <Box>
        <Typography variant="h5" >Hello, {userName}</Typography>
        <Typography variant="subtitle2">{currentDate}</Typography>
      </Box>
      <IconsContainer>
        <IconButton color="inherit">
          <Typography variant="button">For you</Typography>
        </IconButton>
        <IconButton color="inherit">
          <ScreenerIcon />
        </IconButton>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <BookmarkIcon />
        </IconButton>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
