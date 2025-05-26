// pages/ProfileTabsPage.jsx
import SocialLinksBox from '../components/ProfilePagecomponent/ScrollLinks';
import PostBox from '../components/ProfilePagecomponent/PostBox';
import Box from '@mui/material/Box';

const ProfileDetailPage = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      gap: { xs: 2, sm: 3, md: 4 }, 
      width: { xs: '100%', sm: '95%', md: '85%', lg: '82%' },
      mx: 'auto',
      px: { xs: 0, sm: 2, md: 3 },
      py: { xs: 2, sm: 3 }
    }}>
      <Box sx={{
        width: { xs: '100%', md: '30%' },
        order: { xs: 2, md: 1 },
        minWidth: { xs: '100%', md: '230px' },
        px: { xs: 1, sm: 0 }
      }}>
        <SocialLinksBox />
      </Box>
      
      <Box sx={{ 
        flexGrow: 1,
        order: { xs: 1, md: 2 },
        width: { xs: '100%', md: '70%', },
        maxWidth: { xs: '100%', md: '800px' },
        px: { xs: 1, sm: 0 }
      }}>
        <PostBox />
      </Box>
    </Box>
  );
};

export default ProfileDetailPage;
