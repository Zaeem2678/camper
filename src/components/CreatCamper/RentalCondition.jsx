import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ActionButtons from './ActionsButtons';

const RentalCondition = () => {
  const [minAge, setMinAge] = useState(18);
  const [petsAllowed, setPetsAllowed] = useState(null);
  const [licenseRequired, setLicenseRequired] = useState(null);
  const [punctureHotline, setPunctureHotline] = useState('');
  const [otherConditions, setOtherConditions] = useState('');

  const handleAgeChange = (delta) => {
    setMinAge((prev) => Math.max(18, prev + delta));
  };

  const iconButtonStyle = (active) => ({
    width: 35,
    height: 35,
    borderRadius: '50%',
    border: `2px solid ${active ? '#FF9B00' : '#ccc'}`,
    color: active ? 'primary.main' : '#888',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: active ? '#fff' : '#fff',
    transition: 'all 0.2s ease',
  });

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Heading */}
      <Typography variant="h5" fontWeight="bold">
        Rental Conditions
      </Typography>

      {/* Minimum age of tenant */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography  fontWeight={600} fontSize={23} >
          Minimum age of tenant
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 0 0 1px #ccc',
          }}
        >
          <button
            onClick={() => handleAgeChange(-1)}
            style={{
              background: '#FFA500',
              color: '#fff',
              border: 'none',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            -
          </button>
          <input
            type="text"
            value={minAge}
            readOnly
            style={{
              width: '60px',
              height: '40px',
              border: 'none',
              textAlign: 'center',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <button
            onClick={() => handleAgeChange(1)}
            style={{
              background: '#FFA500',
              color: '#fff',
              border: 'none',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            +
          </button>
        </Box>
      </Box>

      {/* Description */}
      <Typography sx={{ fontSize: 14, color: '#555',width:"50%" }}>
        With us, many young people rent a camper every day.
      </Typography>

      {/* Pets row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight={500}>
          Pets
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={iconButtonStyle(petsAllowed === true)} onClick={() => setPetsAllowed(true)}>
            <CheckIcon />
          </Box>
          <Box sx={iconButtonStyle(petsAllowed === false)} onClick={() => setPetsAllowed(false)}>
            <CloseIcon />
          </Box>
        </Box>
      </Box>

      {/* Pets Description */}
      <Typography sx={{ fontSize: 14, color: '#555' ,width:"80%"}}>
        Pets are allowed with more than 44% of our listings. Think about allowing this option to increase your booking potential.
      </Typography>

      {/* License Requirement Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography fontSize={22} fontWeight={500}>
          Driving licence class required
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={iconButtonStyle(licenseRequired === true)} onClick={() => setLicenseRequired(true)}>
            <CheckIcon />
          </Box>
          <Box sx={iconButtonStyle(licenseRequired === false)} onClick={() => setLicenseRequired(false)}>
            <CloseIcon />
          </Box>
        </Box>
      </Box>

      {/* License Description */}
      <Typography sx={{ fontSize: 14, color: '#555',width:"80%" }}>
        Let tenants know if they need a special class of driving licences for your camper. In this way, you will only receive requests from tenants with a corresponding class of driving licences.
      </Typography>

      {/* Puncture protection hotline */}
      <Typography fontSize={16} fontWeight={500} >
        Puncture protection hotline
      </Typography>
      <input
        type="tel"
        placeholder=""
        value={punctureHotline}
        onChange={(e) => setPunctureHotline(e.target.value)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
          width: '50%',
        }}
      />

      {/* Other rental conditions */}
      <Typography fontSize={16}  fontWeight={500}>
        Other rental conditions
      </Typography>
      <textarea
        rows={4}
        placeholder="Here you can add restrictions for certain regulations, for example that smoking is not allowed in the camper"
        value={otherConditions}
        onChange={(e) => setOtherConditions(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px',
          fontFamily: 'inherit',
          height:"220px"
        }}
      />

      <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default RentalCondition;
