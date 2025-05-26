import React, { useState } from 'react';
import { Box, Button, Typography, MenuItem, Select, Grid } from '@mui/material';
import CamperCard from '../../components/CamperCard';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import CamperLongCard from '../../components/CreatCamper/CamperLongCard';

const statusOptions = [
  'Active',
  'Inactive',
  'Draft',
  'Pending for review',
  'Trashed',
  'Outstanding',
];

const CamperPage = () => {
  const [status, setStatus] = useState('Pending for review');
  const navigate = useNavigate();
  const theme = useTheme();

  // Dummy campers for illustration
//   const campers = [
//     {
//       images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb'],
//       price: 120,
//       location: 'Berlin',
//       rating: 4.5,
//       title: 'Luxury Camper',
//       beds: 3,
//       petsAllowed: true,
//       transmission: 'Manual',
//       ownerImg: '',
//       ownerName: 'John Doe',
//     },
//     // ... more campers
//   ];

  return (
    <Box sx={{ width: { xs: '100%', sm: '95%', md: '88%' }, py: 1 }}>
      
      <Box sx={{ display: 'flex', gap: 1, mb: 3}}>
        <Button
         
          size="small"
          sx={{ borderRadius: 1, fontSize: 12, px: 1.5, py: 0.5, minWidth: 0, height: 32 ,color:"#000",border:"1px solid #ccc",backgroundColor:theme.palette.primary.lightgray}}
          onClick={() => navigate('/profile/creat-camper')}
        >
          Create My Camper
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ borderRadius: 1, fontSize: 12, px: 1.5, py: 0.5, minWidth: 0, height: 32,color:"#000",border:"1px solid #ccc" }}
          onClick={() => navigate('/profile/my-camper')}
        >
          All My Campers
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Typography fontWeight={600} sx={{ fontSize: 30 }}>
          All My Campers
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 1, px: 2, py: 2, fontWeight: 500, fontSize: 16, height: 36, minWidth: 0, boxShadow: 1, '&:hover': { bgcolor: 'primary.dark' } }}
        >
          Create new camper
        </Button>
      </Box>

    
      <Box sx={{ mb: 2, maxWidth: 200 }}>
        <Select
          value={status}
          onChange={e => setStatus(e.target.value)}
          fullWidth
          size="small"
          sx={{
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid #FF9B00',
            color: 'black',
            fontWeight: 500,
            fontSize: 13,
            height: 38,
            '& .MuiOutlinedInput-notchedOutline': { border: 0 },
          }}
        >
          {statusOptions.map(option => (
            <MenuItem key={option} value={option} sx={{ fontSize: 13, py: 1 }}>{option}</MenuItem>
          ))}
        </Select>
      </Box>

      
     <CamperLongCard
  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  title="New travellers mountain night out party with BBQ system"
  location="Paris"
  type="Box vans"
  status="pending"
  calander="Calander"
  manager="Manager"
  isCompleted={true}
/>

    </Box>
  );
};

export default CamperPage;
