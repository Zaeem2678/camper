// EditProfilePage.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditForm from '../components/ProfilePagecomponent/EditPofileForm';
import ProfilePhotoUpload from '../components/ProfilePagecomponent/ProfilephotoUpload';
import CoverPhotoUpload from '../components/ProfilePagecomponent/CoverPhotoUpload';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomDialog from '../components/CustomDialog';

const EditProfilePage = () => {
  const [dialogType, setDialogType] = useState('success');
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Edit');

  const { t } = useTranslation();
  const navigate = useNavigate();

  const showDialog = (type, title, message) => {
    setDialogType(type);
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => setDialogOpen(false);

  const renderContent = () => {
    switch (selectedOption) {
      case t('profile.edit.sidebar.edit'):
        return <EditForm onShowDialog={showDialog} />;
      case t('profile.edit.sidebar.profilePhoto'):
        return <ProfilePhotoUpload />;
      case t('profile.edit.sidebar.coverPhoto'):
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
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, width: { xs: '100%', sm: '90%', md: '84%' }, mx: 'auto' }}>
      <Box sx={{
        display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: { xs: 2, sm: 0 }, mb: 2
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

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <Box sx={{ width: { xs: '100%', md: '250px' }, mb: { xs: 2, md: 0 } }}>
          <List>
            {sidebarItems.map((item) => {
              const itemLabel = t(`profile.edit.sidebar.${item.key}`);
              return (
                <ListItem
                  key={item.key}
                  button
                  selected={selectedOption === itemLabel}
                  onClick={() => setSelectedOption(itemLabel)}
                  sx={{
                    bgcolor: selectedOption === itemLabel ? (theme) => theme.palette.primary.main : 'transparent',
                    color: selectedOption === itemLabel ? '#fff' : 'inherit',
                    '& .MuiListItemIcon-root': {
                      color: selectedOption === itemLabel ? '#fff' : 'inherit',
                      minWidth: '32px',
                    },
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={itemLabel} />
                </ListItem>
              );
            })}
          </List>
        </Box>

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

      <CustomDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title={dialogTitle}
        message={dialogMessage}
        type={dialogType}
      />
    </Box>
  );
};

export default EditProfilePage;
