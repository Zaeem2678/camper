import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@emotion/react';
import ActionButtons from './ActionsButtons';

const Registration = () => {
  const theme = useTheme();

  const [licensePlate, setLicensePlate] = useState('');
  const [country, setCountry] = useState('');
  const [licenseType, setLicenseType] = useState('');

  const countries = ['Germany', 'Poland', 'France', 'Turkey'];
  const licenseTypes = ['Privately Licensed', 'Commercially Approved'];

  const [vin, setVin] = useState('');

  const handleVerify = () => {
    // Your verify logic here
    alert(`Verifying VIN: ${vin}`);
  };

  return (
    <Box
      sx={{
        width: '100%',
        px: 2,
        py: 3,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600} sx={{ mb: 2, fontSize: 30 }}>
          Registration
        </Typography>

        <Typography fontSize={16} fontWeight={500} sx={{ mb: 1 }}>
          What is your camper license plate?
        </Typography>

        <input
          type="text"
          placeholder="Enter License Plate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          style={{
            width: '40%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '0.5rem',
            fontSize: '16px',
          }}
        />
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 5,width:"40%" }}>
          We need a valid license plate, otherwise your camper may not be covered by the insurance cover or the breakdown service.
        </Typography>

        <Typography fontSize={16} fontWeight={500} sx={{ mb: 1 }}>
          Vehicle verification ID (VIN)
        </Typography>

        {/* VIN input and Verify button */}
        <Box
          sx={{
            display: 'flex',
            width: '40%',
            mb: 2,
            borderRadius: '5px', // pill shape
            border: '1px solid #ccc',
            overflow: 'hidden',
            alignItems: 'center',
            bgcolor: '#fff',
          }}
        >
          <input
            type="text"
            placeholder="Enter VIN"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            style={{
              flexGrow: 1,
                            width:"25%",

              border: 'none',
              outline: 'none',
              padding: '10px 15px',
              fontSize: '16px',
              borderRadius: 0, // no border radius on input itself because container is pill-shaped
            }}
          />
          <Button
            onClick={handleVerify}
            variant="contained"
            sx={{
              borderRadius: 0,
              px: 2,
              py: 1,
              width:50,
            
              margin: 0,
              minWidth: 'auto',
              bgcolor: theme.palette.primary.orange,
              color: '#000',
              '&:hover': {
                bgcolor: theme.palette.primary.orange,
                opacity: 0.9,
              },
            }}
          >
            Verify
          </Button>
        </Box>

        <Typography fontSize={13} color="text.secondary" sx={{ mb: 5,width:"40%"  }}>
          We need to verify your VIN (Vehicle verification number) to identify the vehicle.
        </Typography>

        <Typography fontSize={16} fontWeight={500} sx={{ mb: 1 }}>
          In which country is your camper allowed?
        </Typography>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{
            width: '40%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '1rem',
            fontSize: '16px',
          }}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <Typography fontSize={16} fontWeight={500} sx={{ mb: 1 }}>
          How is your camper allowed?
        </Typography>
        <select
          value={licenseType}
          onChange={(e) => setLicenseType(e.target.value)}
          style={{
            width: '40%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '1rem',
            fontSize: '16px',
          }}
        >
          <option value="">Select License Type</option>
          {licenseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Box>

      {/* Save Draft and Next buttons */}
     <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Registration;
