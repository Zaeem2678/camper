import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProfileBox = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ 
      position: 'relative',
      width: { xs: '100%', sm: '88%',md:"90%" },
      overflow: 'hidden',
      backgroundColor: 'white',
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
      border: "1px solid #ccc",
      
    }}>
      {/* Banner */}
      <Box sx={{ 
        height: '230px', 
        backgroundColor: '#64748b',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)' 
      }} />

      <Box 
        sx={{ 
          p: 3, 
          pt: 0, 
          mt: '-60px', 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'flex-end' },
          gap: 3,
          mb: 2
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Avatar 
            sx={{ 
              width: { xs: 140, sm: 170 }, 
              height: { xs: 140, sm: 170 }, 
              border: '4px solid white',
              backgroundColor: '#e2e8f0' 
            }} 
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 15, 
              right: 25, 
              width: 14, 
              height: 14, 
              backgroundColor: '#22c55e', 
              borderRadius: '50%', 
              border: '2px solid white' 
            }} 
          />
        </Box>

        <Box sx={{ 
          flex: 1,
          textAlign: { xs: 'center', sm: 'left' },
          width: { xs: '100%', sm: 'auto' }
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            mb: 1,
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}>
            <Typography variant="h5" fontWeight="600" sx={{ mb: 0.5 }}>
              sudotahirsaeed
            </Typography>
            <Chip 
              label={t('profile.box.member')}
              size="small" 
              sx={{ 
                backgroundColor: '#e0eaff', 
                color: '#3b82f6', 
                height: 24, 
                borderRadius: 1,
                fontWeight: 500 
              }} 
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            @sudotahirsaeed • {t('profile.box.joined')} May 2025 • {t('profile.box.activeNow')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('profile.box.followers', { count: 0 })} • {t('profile.box.following', { count: 0 })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileBox;
