import { Box, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: '64px',
          px: 0,
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'transparent',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout; 