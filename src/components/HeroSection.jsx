import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Container, TextField, InputAdornment, MenuItem, Paper, Grid } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';

const sliderImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
];

const vehicleTypes = [
  { value: 'all', label: 'all' },
  { value: 'campervan', label: 'campervan' },
  { value: 'caravan', label: 'caravan' },
  { value: 'motorhome', label: 'motorhome' },
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '80vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      p: 0,
      m: 0,
    }}>
      {/* Background Image Slider */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          transition: 'background-image 1s',
          backgroundImage: `url(${sliderImages[current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.5)',
          zIndex: 2,
        }}
      />
      {/* Hero Content */}
      <Box sx={{ position: 'relative', zIndex: 3, pt: 10, pb: 6, height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '65vh',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Search/Filter Bar */}
          <Paper
            elevation={6}
            sx={{
              width: 'min(1200px, 90vw)',
              mx: 'auto',
              bgcolor: 'rgba(0,0,0,0.7)',
              border: '3px solid #fff',
              borderRadius: 5,
              p: 3,
              mb: 3,
            }}
          >
            <Grid container spacing={3} alignItems="flex-end" justifyContent="flex-start">
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
                  {t('hero.pickupLocation')}
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={t('hero.locationPlaceholder')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <RoomIcon sx={{ color: '#FF9B00' }} />
                      </InputAdornment>
                    ),
                    sx: { bgcolor: '#fff', borderRadius: 2, height: 40, fontSize: 15 },
                  }}
                  inputProps={{ style: { color: '#888' } }}
                  sx={{ '& .MuiInputBase-root': { height: 40, fontSize: 15 }, minWidth: 300 }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
                  {t('hero.vehicleType')}
                </Typography>
                <TextField
                  fullWidth
                  select
                  defaultValue="all"
                  InputProps={{ sx: { bgcolor: '#fff', borderRadius: 2, height: 40, fontSize: 15 } }}
                  sx={{ '& .MuiInputBase-root': { height: 40, fontSize: 15 },minWidth: 180  }}
                >
                  {vehicleTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {t(`hero.vehicleTypes.${option.label}`)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
                  {t('hero.startDate')}
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  placeholder="DD-MM-YY"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ sx: { bgcolor: '#fff', borderRadius: 2, height: 40, fontSize: 15 } }}
                  inputProps={{ style: { color: '#888' }, placeholder: 'DD-MM-YY' }}
                  sx={{ '& .MuiInputBase-root': { height: 40, fontSize: 15 },minWidth: 160  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
                  {t('hero.endDate')}
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  placeholder="DD-MM-YY"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ sx: { bgcolor: '#fff', borderRadius: 2, height: 40, fontSize: 15 } }}
                  inputProps={{ style: { color: '#888' }, placeholder: 'DD-MM-YY' }}
                  sx={{ '& .MuiInputBase-root': { height: 40, fontSize: 15 },minWidth: 160 }}
                />
              </Grid>
              <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#FF9B00',
                    color: 'white',
                    height: 40,
                    fontWeight: 700,
                    fontSize: 16,
                    borderRadius: 2,
                    '&:hover': { bgcolor: '#e68a00' },
                  }}
                  startIcon={<SearchIcon />}
                >
                  {t('hero.search')}
                </Button>
              </Grid>
            </Grid>
          </Paper>
          {/* Headline chip at the bottom */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: -65,
              transform: 'translateX(-50%)',
              bgcolor: 'rgba(0, 0, 0, 0.40)',
              px: 8,
              pt: 1,
              pb: 3,
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              minHeight: 70,
              boxShadow: 3,
              
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: '#fff', fontWeight: 600, m: 0, textShadow: '0 2px 8px rgba(0,0,0,0.7)', letterSpacing: 1, }}
            >
              {t('hero.adventureBegins')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection; 