import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Grid, Paper } from '@mui/material';

const cities = [
  {
    name: 'Berlin',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dusseldorf',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Eat',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Frankfurt',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
  },
 
  {
    name: 'Cologne',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Munich',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Leipzig',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dresden',
    img: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=800&q=80',
  },
  
];

const CityGrid = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: '#54595f', py: 5, px: 0, width: '100%' }}>
      <Typography
        align="center"
        sx={{ color: 'white', fontWeight: 500, mb: 2, fontSize: 40 }}
      >
        {t('cities.title')}
      </Typography>
      <Typography
        align="center"
        sx={{ color: 'white', fontSize: 18, mb: 5 }}
      >
        {t('cities.description')}
      </Typography>
      <Grid container spacing={2.5} justifyContent="center" sx={{ maxWidth: 1600, mx: 'auto' }}>
        {cities.map((city) => (
          <Grid item xs={12} sm={6} md={3} lg={4} key={city.name}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                mb: 2,
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 290,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.04)' },
              }}
            >
              <Box
                component="img"
                src={city.img}
                alt={city.name}
                sx={{ width: '100%', height: 170, objectFit: 'cover' }}
              />
              <Typography
                align="center"
                sx={{ fontWeight: 600, fontSize: 20, color: '#65686c', py: 0.6 }}
              >
                {city.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CityGrid; 