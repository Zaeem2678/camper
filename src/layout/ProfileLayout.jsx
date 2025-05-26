// layout/ProfileLayout.jsx
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import ProfileBox from '../components/ProfilePagecomponent/ProfileBox';
import ProfileTabs from '../components/ProfilePagecomponent/Profiletabs';
import CompleteProfile from '../components/ProfilePagecomponent/CompleteBox';

const ProfileLayout = () => {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'transparent',
        gap: 2,
        p: { xs: 1, sm: 2, md: 0 }
      }}
    >
      <Box
        sx={{
          flex: { xs: '1 1 auto', lg: 2.5 },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'flex-start',
          alignItems: { xs: 'stretch', lg: 'end' },
          width: '100%'
        }}
      >
        <ProfileBox />
        <ProfileTabs />
        <Outlet />
      </Box>
      <Box sx={{ 
        flex: { xs: '1 1 auto', lg: 1 }, 
        mt: { xs: 0, lg: 2 },
        width: '100%'
      }}>
        <CompleteProfile />
      </Box>
    </Box>
  );
};

export default ProfileLayout;
