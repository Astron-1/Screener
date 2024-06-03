import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Homepage/Home';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login.tsx';
import Signup from './pages/Signup/Signup.tsx';
import theme from './styles/theme';
import { useAuth } from './hooks/useAuth.tsx';

const App: React.FC = () => {
  const { user } = useAuth();

  if (user === undefined) {
    // Return loading indicator or any other content while authentication state is being resolved
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          {user && <Sidebar />}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/search" element={user ? <Search /> : <Navigate to="/login" />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
