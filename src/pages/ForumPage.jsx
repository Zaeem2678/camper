import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// import InfoIcon from '@mui/icons-material/Info';
import Infocomp from '../components/AccountSettings/Infocomp';

const ForumPage = () => {
  // const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('discussions');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'discussions':
        return (
          <Box>
            <Typography  gutterBottom sx={{ my: 2 ,fontSize:18}}>
              Forum Discussions Started
            </Typography>
            <Infocomp text="You have not created any discussions." />
          </Box>
        );
      case 'replies':
        return (
          <Box>
            {/* Content for My Replies */}
            <Typography gutterBottom sx={{ my: 2 ,fontSize:18}}>
              My Replies
            </Typography>
            <Typography>My Replies Content</Typography>
          </Box>
        );
      case 'favorites':
        return (
          <Box>
            {/* Content for My Favorites */}
            <Typography gutterBottom sx={{ my: 2 ,fontSize:18}}>
              My Favorites
            </Typography>
            <Typography>My Favorites Content</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: { xs: '100%', sm: '95%', md: '90%' }, mt: 4, px: 3 }}>
      <Typography variant="h4" gutterBottom>
        Forum
      </Typography>

      <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
        <Button
          variant="text"
          onClick={() => setActiveSection('discussions')}
          sx={{
            minWidth: 90,
            fontSize: 11,
            py: 0.5,
            borderRadius: 2,
            textTransform: 'none',
            color: activeSection === 'discussions' ? '#000' : '#ccc',
            backgroundColor: activeSection === 'discussions' ? '#f0f2f5' : 'transparent',
            '&:hover': {
              backgroundColor: "#385DFF",
              color: '#fff',
            },
          }}
        >
          My Discussions
        </Button>
        <Button
          variant="text"
          onClick={() => setActiveSection('replies')}
          sx={{
            minWidth: 90,
            fontSize: 11,
            py: 0.5,
            borderRadius: 2,
            textTransform: 'none',
            color: activeSection === 'replies' ? '#000' : '#ccc',
            backgroundColor: activeSection === 'replies' ? '#f0f2f5' : 'transparent',
            '&:hover': {
              backgroundColor: "#385DFF",
              color: '#fff',
            },
          }}
        >
          My Replies
        </Button>
        <Button
          variant="text"
          onClick={() => setActiveSection('favorites')}
          sx={{
            minWidth: 90,
            fontSize: 11,
            py: 0.5,
            borderRadius: 2,
            textTransform: 'none',
            color: activeSection === 'favorites' ? '#000' : '#ccc',
            backgroundColor: activeSection === 'favorites' ? '#f0f2f5' : 'transparent',
            '&:hover': {
              backgroundColor: "#385DFF",
              color: '#fff',
            },
          }}
        >
          My Favorites
        </Button>
      </Box>

      {renderSectionContent()}
    </Box>
  );
};

export default ForumPage; 