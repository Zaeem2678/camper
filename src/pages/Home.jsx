import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Adventure from '../components/Adventure';
import WelcomeCamper from '../components/Welcomecamper';
import CityGrid from '../components/CityGrid';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Home = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const message = localStorage.getItem('loginSuccessMessage');
    if (message) {
      setSuccessMessage(message);
      localStorage.removeItem('loginSuccessMessage');

      // Hide message after 2 seconds (2000 ms)
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {successMessage && (
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: '#4caf50', // Material green 500
            color: 'white',
            px: 3,
            py: 1.5,
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(76, 175, 80, 0.7)',
            zIndex: 1500,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: '600',
            minWidth: 300,
            maxWidth: '90vw',
            animation: 'fadeInOut 2s ease forwards', // changed to 2s
          }}
        >
          <CheckCircleIcon fontSize="medium" />
          <Typography sx={{ fontSize: 16 }}>{successMessage}</Typography>
        </Box>
      )}

      <HeroSection />
      <Adventure />
      <WelcomeCamper />
      <CityGrid />

      {/* CSS animation for fade in and fade out */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </>
  );
};

export default Home;
