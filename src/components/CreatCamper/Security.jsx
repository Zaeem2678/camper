import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import FireExtinguisherIcon from '@mui/icons-material/LocalFireDepartment';
import SmokeDetectorIcon from '@mui/icons-material/SmokeFree';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FireBlanketIcon from '@mui/icons-material/Flare';
import CarbonMonoxideIcon from '@mui/icons-material/Cloud';
import ActionButtons from './ActionsButtons';

const equipmentOptions = [
  { label: 'Carbon monoxide detector', icon: <CarbonMonoxideIcon /> },
  { label: 'Fire blanket', icon: <FireBlanketIcon /> },
  { label: 'Fire extinguishers', icon: <FireExtinguisherIcon /> },
  { label: 'GPS tracker', icon: <GpsFixedIcon /> },
  { label: 'Smoke detectors', icon: <SmokeDetectorIcon /> },
];

const Security = () => {
  const [safetyBeltCount, setSafetyBeltCount] = useState(0);
  const [threePointBeltCount, setThreePointBeltCount] = useState(0);
  const [selectedEquipments, setSelectedEquipments] = useState([]);

  const handleBeltChange = (setter) => (delta) => {
    setter((prev) => Math.max(prev + delta, 0));
  };

  const toggleEquipment = (label) => {
    setSelectedEquipments((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Security
      </Typography>

      {/* Safety Belts */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body1" fontWeight={400}>Safety belts</Typography>
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
            onClick={() => handleBeltChange(setSafetyBeltCount)(-1)}
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
            value={safetyBeltCount}
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
            onClick={() => handleBeltChange(setSafetyBeltCount)(1)}
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

      {/* Three-point belt seats */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body1" fontWeight={400}>Three-point belt seats</Typography>
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
            onClick={() => handleBeltChange(setThreePointBeltCount)(-1)}
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
            value={threePointBeltCount}
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
            onClick={() => handleBeltChange(setThreePointBeltCount)(1)}
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

      {/* Equipment */}
      <Typography variant="h6" fontWeight={500} mt={4}>
        Equipment
      </Typography>
      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2}>
        {equipmentOptions.map(({ label, icon }) => (
          <Grid item xs={6} sm={4} md={3} key={label}>
            <Box
              onClick={() => toggleEquipment(label)}
              sx={{
                border: selectedEquipments.includes(label)
                  ? '2px solid'
                  : '1px solid #ccc',
                borderColor: selectedEquipments.includes(label)
                  ? 'primary.main'
                  : '#ccc',
                borderRadius: 2,
                p: 1.5,
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                {icon}
              </Box>
              <Typography variant="body2">{label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Additional Safety Info */}
      <Typography variant="body2" fontWeight={500} mt={4} mb={1}>
        Additional safety information
      </Typography>
      <TextField
        placeholder="Here you can add restrictions for certain regulations, for example that smoking is not allowed in the camper"
        multiline
        rows={4}
        sx={{mb:4}}
        fullWidth
        variant="outlined"
      />

      <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Security;
