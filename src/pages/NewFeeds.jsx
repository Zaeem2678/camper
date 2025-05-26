import Box from '@mui/material/Box';
import MembersList from '../components/MembersList';
import GroupsList from '../components/GroupsList';
import ForumsList from '../components/ForumsList';
import FeedUpdates from '../components/FeedUpdates';
import OnlineUsers from '../components/OnlineUsers';
import ActiveMembers from '../components/ActiveMembers';

const NewFeeds = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pt: 0,
        px: 0,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'transparent',
      }}
    >
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center" 
        sx={{ 
          pt: 0, 
          background: '#fafbfc', 
          minHeight: '100vh',
          gap: { xs: 2, md: 3 }
        }}
      >
        {/* Left Sidebar */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: 290 },
            mr: { md: 3 },
            pt: { xs: 4, md: 8 },
            order: { xs: 2, md: 1 }
          }}
        >
          <MembersList />
          <GroupsList />
          <ForumsList />
        </Box>

        {/* Main Feed */}
        <Box 
          sx={{ 
            flex: 1,
            maxWidth: { xs: '100%', md: 750 },
            mr: { md: 3 },
            pt: { xs: 2, md: 4 },
            order: { xs: 1, md: 2 }
          }}
        >
          <FeedUpdates />
        </Box>
      
        {/* Right Sidebar */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: 275 },
            pt: { xs: 2, md: 6 },
            order: { xs: 3, md: 3 }
          }}
        >
          <OnlineUsers />
          <ActiveMembers />
        </Box>
      </Box>
    </Box>
  );
};

export default NewFeeds; 