import React, { useState } from 'react';
import { Box, Button, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditForm from '../components/ProfilePagecomponent/EditPofileForm';
import ProfilePhotoUpload from '../components/ProfilePagecomponent/ProfilephotoUpload';
import CoverPhotoUpload from '../components/ProfilePagecomponent/CoverPhotoUpload';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EditProfilePage = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('Edit');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (selectedOption) {
      case 'Edit':
        return <EditForm />;
      case 'Profile Photo':
        return <ProfilePhotoUpload />;
      case 'Cover Photo':
        return <CoverPhotoUpload />;
      default:
        return null;
    }
  };

  const sidebarItems = [
    { key: 'edit', icon: <EditIcon /> },
    { key: 'profilePhoto', icon: <AccountCircleIcon /> },
    { key: 'coverPhoto', icon: <PhotoCameraIcon /> },
  ];

  return (
    <Box sx={{ 
      p: { xs: 1, sm: 2, md: 3 }, 
      width: { xs: '100%', sm: '90%', md: '84%' }, 
      mx: 'auto' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        gap: { xs: 2, sm: 0 },
        mb: 2 
      }}>
        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          {t('profile.edit.title')}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.verylight,
            color: '#000',
            '&:hover': {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            },
          }}
          onClick={() => navigate("/profile/edit")}
        >
          {t('profile.edit.viewProfile')}
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Main Content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2 
      }}>
        {/* Sidebar */}
        <Box sx={{ 
          width: { xs: '100%', md: '250px' },
          mb: { xs: 2, md: 0 }
        }}>
          <List>
            {sidebarItems.map((item) => (
              <ListItem
                key={item.key}
                button
                selected={selectedOption === t(`profile.edit.sidebar.${item.key}`)}
                onClick={() => setSelectedOption(t(`profile.edit.sidebar.${item.key}`))}
                sx={{
                  bgcolor: selectedOption === t(`profile.edit.sidebar.${item.key}`) ? (theme) => theme.palette.primary.main : 'transparent',
                  color: selectedOption === t(`profile.edit.sidebar.${item.key}`) ? '#fff' : 'inherit',
                  '& .MuiListItemIcon-root': {
                    color: selectedOption === t(`profile.edit.sidebar.${item.key}`) ? '#fff' : 'inherit',
                    minWidth: '32px',
                  },
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={t(`profile.edit.sidebar.${item.key}`)} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Content Area */}
        <Box sx={{ 
          flexGrow: 1, 
          p: { xs: 1, sm: 2 }, 
          border: "1px solid #ccc", 
          borderRadius: 3, 
          m: { xs: 0, sm: 1 } 
        }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfilePage;
