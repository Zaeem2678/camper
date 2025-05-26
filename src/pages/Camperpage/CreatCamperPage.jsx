import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Button,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import BookingType from '../../components/CreatCamper/BookingTypes';
import Registration from '../../components/CreatCamper/RegistrationComp';
import Specification from '../../components/CreatCamper/CamperSpecify';
import Description from '../../components/CreatCamper/Description';
import Images from '../../components/CreatCamper/Images';
import Location from '../../components/CreatCamper/Location';
import Pricing from '../../components/CreatCamper/Pricing';
import CancellationPolicy from '../../components/CreatCamper/CancellationPolicy';
import InsuranceCover from '../../components/CreatCamper/InsuranceCover';
import RentalCondition from '../../components/CreatCamper/RentalCondition';
import Equipments from '../../components/CreatCamper/Equipment';
import Security from '../../components/CreatCamper/Security';
import ExtrasForRent from '../../components/CreatCamper/AddindExtras';
import { useNavigate } from 'react-router-dom';

// Import all section components
// import Specifications from '../components/CamperSections/Specifications';
// import CamperDescription from '../components/CamperSections/CamperDescription';
// import Images from '../components/CamperSections/Images';
// import Location from '../components/CamperSections/Location';
// import Pricing from '../components/CamperSections/Pricing';
// import CancellationPolicy from '../components/CamperSections/CancellationPolicy';
// import InsuranceCover from '../components/CamperSections/InsuranceCover';
// import RentalConditions from '../components/CamperSections/RentalConditions';
// import Equipment from '../components/CamperSections/Equipment';
// import Security from '../components/CamperSections/Security';
// import ExtrasForRent from '../components/CamperSections/ExtrasForRent';


const sectionConfig = [
  { key: 'Booking Types', component: <BookingType /> },
  { key: 'Registration', component: <Registration /> },
  { key: 'Specifications', component: <Specification/> },
  { key: 'Camper Description', component: <Description/> },
  { key: 'Images', component: <Images/> },
  { key: 'Location', component: <Location /> },
  { key: 'Pricing', component: <Pricing /> },
  { key: 'Cancellation Policy', component: <CancellationPolicy /> },
  { key: 'Insurance Cover and Membership', component: < InsuranceCover/> },
  { key: 'Rental Conditions', component: <RentalCondition /> },
  { key: 'Equipment', component: <Equipments /> },
  { key: 'Security', component: <Security /> },
  { key: 'Extras for Rent', component: <ExtrasForRent/> },
];

function CreateCamper() {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState('Booking Types');
   const navigate =useNavigate()

  const renderContent = () => {
    const match = sectionConfig.find((section) => section.key === activeSection);
    return match ? match.component : <Typography>Section not found</Typography>;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 0.5,
        width: { xs: '100%', sm: '90%', md: '90%' },
        
      }}
    >
        <Box sx={{ display: 'flex', gap: 1, mb: 3}}>
              <Button
               
                size="small"
                sx={{ borderRadius: 1, fontSize: 12, px: 1.5, py: 0.5, minWidth: 0, height: 32 ,color:"#000",border:"1px solid #ccc",backgroundColor:theme.palette.primary.lightgray}}
                onClick={() => navigate('/profile/creat-camper')}
              >
                Create a New  Camper
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
       
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" align="left" sx={{ mb: 3 }}>
        Create Camper
      </Typography>

      {/* Layout */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Sidebar */}
        <Box
          elevation={3}
          sx={{
            minWidth: 200,
            minHeight: '100vh',
            overflowY: 'auto',
            maxWidth: '220px',
            p: 1,
          }}
        >
          <List dense>
            {sectionConfig.map((section) => (
              <ListItemButton
                key={section.key}
                selected={activeSection === section.key}
                onClick={() => setActiveSection(section.key)}
                sx={{
                  fontSize: '13px',
                  borderRadius: 1,
                  mb: 1,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary?.main || '#1976d2',
                    color: '#fff',
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.primary?.light || '#42a5f5',
                    color: '#000',
                  },
                }}
              >
                <ListItemText primary={section.key} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 1, sm: 1 },
            backgroundColor: '#fff',
            borderRadius: 2,
            minHeight: '500px',
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}

export default CreateCamper;
