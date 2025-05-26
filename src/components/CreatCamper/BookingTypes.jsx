import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import { useTheme } from '@emotion/react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ActionButtons from './ActionsButtons';

const BookingType = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const theme = useTheme();

  const handleSelect = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };
  const isActive = (type) => selectedTypes.includes(type);

return (
  <Box
    sx={{
      width: '100%',
      px: 2,
      py: 3,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '500px', // or 100% if it's inside a flex container with height
    }}
  >
    {/* Content Area */}
    <Box sx={{ flexGrow: 1 }}>
      <Typography fontWeight={600} sx={{ mb: 2, fontSize: 30 }}>
        What would you like to do?
      </Typography>

      <Typography fontSize={24} fontWeight={500} sx={{ mb: 1 }}>
        Booking type:
      </Typography>
      <Typography fontSize={13} color="text.secondary" sx={{ mb: 3 }}>
        Choose booking type which you would like to add to book your vehicle by the user.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
  <Paper
    onClick={() => handleSelect('regular')}
    elevation={3}
    sx={{
      p: 2,
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
      cursor: 'pointer',
      borderRadius: 2,
      fontSize: 13,
      border: isActive('regular') ? '2px solid orange' : '1px solid #ccc',
      bgcolor: isActive('regular') ? theme.palette.primary.orange : '#fff',
      color: isActive('regular') ? '#000' : 'inherit',
      transition: 'all 0.2s ease',
      '&:hover': {
        bgcolor: theme.palette.primary.orange,
        color: '#000',
      },
    }}
  >
    <DirectionsCarIcon />
    <Typography fontWeight={600}>Regular Booking</Typography>
  </Paper>

  <Paper
    onClick={() => handleSelect('direct')}
    elevation={3}
    sx={{
      p: 2,
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
      cursor: 'pointer',
      borderRadius: 2,
      fontSize: 13,
      border: isActive('direct') ? '2px solid orange' : '1px solid #ccc',
      bgcolor: isActive('direct') ? theme.palette.primary.orange : '#fff',
      color: isActive('direct') ? '#000' : 'inherit',
      transition: 'all 0.2s ease',
      '&:hover': {
        bgcolor: theme.palette.primary.orange,
        color: '#000',
      },
    }}
  >
    <FlashOnIcon />
    <Typography fontWeight={600}>Direct Booking</Typography>
  </Paper>
</Box>

    </Box>

    {/* Sticky Bottom Buttons */}
   <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

  </Box>
);

};

export default BookingType;
