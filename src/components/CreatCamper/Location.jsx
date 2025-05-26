import React, { useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import ActionButtons from './ActionsButtons';

const Location = () => {
  const theme = useTheme();
  const [focusedInput, setFocusedInput] = useState(null);

  const getInputStyle = (name) => ({
    width: '100%',
    padding: '12px',
    border: `1px solid ${focusedInput === name ? theme.palette.primary.orange : '#ccc'}`,
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    marginTop: '6px',
    transition: 'border-color 0.3s ease',
  });

  return (
    <Box sx={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h5" fontWeight={600}>
        Location
      </Typography>

      <Typography sx={{ color: '#555', fontSize: '14px' }}>
        This is the pick-up place of the Campers. Do not worry, this will only be passed on to the tenant after the booking has been paid.
      </Typography>

      <Box>
        <Typography fontWeight={500} fontSize="16px" mb={0.5}>
          Where can tenants pick up your camper?
        </Typography>
        <input
          type="text"
          placeholder="Start typing to find the address"
          style={getInputStyle('address')}
          onFocus={() => setFocusedInput('address')}
          onBlur={() => setFocusedInput(null)}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={500} fontSize="16px" mb={0.5}>
            City
          </Typography>
          <input
            type="text"
            placeholder="City"
            style={getInputStyle('city')}
            onFocus={() => setFocusedInput('city')}
            onBlur={() => setFocusedInput(null)}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={500} fontSize="16px" mb={0.5}>
            State
          </Typography>
          <input
            type="text"
            placeholder="State"
            style={getInputStyle('state')}
            onFocus={() => setFocusedInput('state')}
            onBlur={() => setFocusedInput(null)}
          />
        </Box>
      </Box>

      <Box>
        <Typography fontWeight={500} fontSize="16px" mb={0.5}>
          Postal Code
        </Typography>
        <input
          type="text"
          placeholder="Postal Code"
          style={getInputStyle('postal')}
          onFocus={() => setFocusedInput('postal')}
          onBlur={() => setFocusedInput(null)}
        />
      </Box>

   <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Location;
