import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EditProfileComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '88%', p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">{t('profile.edit.component.title')}</Typography>
        <Button 
          sx={{ 
            backgroundColor: '#E9ECEF', 
            '&:hover': { backgroundColor: '#bbb' },
            color: "#000"
          }} 
          onClick={() => navigate("/make-profile")}
        >
          {t('profile.edit.component.edit')}
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 20 }}>
        <Typography variant="body1">{t('profile.edit.component.nickname')}</Typography>
        <Typography variant="body2" color="text.secondary">
          JohnDoe
        </Typography>
      </Box>

      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
        <Typography variant="body1">Name</Typography>
        <Typography variant="body2" color="text.secondary">
          John Doe
        </Typography>
      </Box> */}
    </Box>
  );
};

export default EditProfileComponent;
