import React, { useState } from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';

// Import components
import LoginInformation from '../components/AccountSettings/LoginInformation';
import NotificationSettings from '../components/AccountSettings/NotificationSettings';
import PrivacySettings from '../components/AccountSettings/PrivacySettings';
import GroupInvites from '../components/AccountSettings/GroupInvites';
import ExportData from '../components/AccountSettings/ExportData';

const AccountSettingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('loginInformation');

  const renderContent = () => {
    switch (selectedOption) {
      case 'loginInformation':
        return <LoginInformation />;
      case 'notifications':
        return <NotificationSettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'groupInvites':
        return <GroupInvites />;
      case 'exportData':
        return <ExportData />;
      default:
        return <LoginInformation />;
    }
  };

  const sidebarItems = [
    { key: 'loginInformation', icon: <AccountCircleIcon sx={{ fontSize: '1.2rem' }} />, label: t('account.sidebar.loginInformation') },
    { key: 'notifications', icon: <NotificationsIcon sx={{ fontSize: '1.2rem' }} />, label: t('account.sidebar.notifications') },
    { key: 'privacy', icon: <SecurityIcon sx={{ fontSize: '1.2rem' }} />, label: t('account.sidebar.privacy') },
    { key: 'groupInvites', icon: <GroupIcon sx={{ fontSize: '1.2rem' }} />, label: t('account.sidebar.groupInvites') },
    { key: 'exportData', icon: <DownloadIcon sx={{ fontSize: '1.2rem' }} />, label: t('account.sidebar.exportData') },
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
        <Typography  sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          {t('account.title')}
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
          onClick={() => navigate("/profile")}
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
          width: { xs: '100%', md: '220px' },
         
          mb: { xs: 2, md: 0 }
        }}>
          <List>
            {sidebarItems.map((item) => (
              <ListItem
                key={item.key}
                button
                selected={selectedOption === item.key}
                onClick={() => setSelectedOption(item.key)}
                sx={{
                  bgcolor: selectedOption === item.key ? (theme) => theme.palette.primary.main : 'transparent',
                  color: selectedOption === item.key ? '#fff' : 'inherit',
                  '& .MuiListItemIcon-root': {
                    color: selectedOption === item.key ? '#fff' : 'inherit',
                    minWidth: '28px',
                  },
                  '& .MuiListItemText-primary': {
                    fontSize: '0.9rem',
                  },
                  borderRadius: 1,
                  mb: 1,
                  py: 1,
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ 
          flexGrow: 1, 
          p: { xs: 1, sm: 2 }, 
          border: "1px solid #ccc", 
          borderRadius: 3, 
          m: { xs: 0, sm: 1 }, 
          minHeight: 500,
          maxWidth:{xs:"100%",sm:"80%"}
         
        }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default AccountSettingPage; 