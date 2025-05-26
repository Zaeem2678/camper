import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import fullBoxVan from '../../assets/creat-camper/full-box-vans.png';
import ActionButtons from '../CreatCamper/ActionsButtons';

const RoleSelection = ({ onNext }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();

  const roles = [
    {
      title: t('sellMyCar.roleSelection.options.selling.title'),
      description: t('sellMyCar.roleSelection.options.selling.description'),
      icon: fullBoxVan
    },
    {
      title: t('sellMyCar.roleSelection.options.renting.title'),
      description: t('sellMyCar.roleSelection.options.renting.description'),
      icon: fullBoxVan
    }
  ];

  const handleSelect = (role) => {
    setSelectedRole(role.title);
  };

  const isActive = (role) => selectedRole === role.title;

  return (
    <Box
      sx={{
        width: '100%',
        px: 2,
        py: 3,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
      }}
    >
      
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600} sx={{ mb: 2, fontSize: 24 }}>
          {t('sellMyCar.roleSelection.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 1 }}>
          {t('sellMyCar.roleSelection.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 3 }}>
          {t('sellMyCar.roleSelection.description')}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 3 }}>
          {roles.map((role) => (
            <Paper
              key={role.title}
              onClick={() => handleSelect(role)}
              elevation={3}
              sx={{
                p: 2,
                width: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                borderRadius: 2,
                fontSize: 13,
                border: isActive(role) ? '2px solid orange' : '1px solid #ccc',
                bgcolor: isActive(role) ? theme.palette.primary.orange : '#fff',
                color: isActive(role) ? '#000' : 'inherit',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: theme.palette.primary.orange,
                  color: '#000',
                },
              }}
            >
              <Box
                component="img"
                src={role.icon}
                alt={role.title}
                sx={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
              <Typography fontWeight={600}>{role.title}</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {role.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      
      <ActionButtons
        onSaveDraft={() => console.log('Draft Saved')}
        onNext={onNext}
      />
    </Box>
  );
};

export default RoleSelection; 