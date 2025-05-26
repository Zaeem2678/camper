import React from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useTranslation } from 'react-i18next';

const CompleteProfile = () => {
  const { t } = useTranslation();
  const progress = 33;

  const steps = [
    { key: 'details', completed: false },
    { key: 'profilePhoto', completed: true },
    { key: 'coverPhoto', completed: false },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        p: 3,
        border: '1px solid #e0e0e0',
        width: '100%',
        maxWidth: 300,
      }}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom>
        {t('profile.completeProfile.title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {t('profile.completeProfile.progress', { percent: progress })}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          mb: 3,
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#4caf50',
          },
        }}
      />

      <List disablePadding>
        {steps.map((step, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{ py: 1 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {step.completed ? (
                <CheckCircleIcon sx={{ color: '#4caf50', mr: 1.5, fontSize: '1.5rem' }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ color: '#ccc', mr: 1.5, fontSize: '1.5rem' }} />
              )}
              <ListItemText
                primary={t(`profile.completeProfile.steps.${step.key}.label`)}
                secondary={t(`profile.completeProfile.steps.${step.key}.value`)}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
                secondaryTypographyProps={{
                  variant: 'body2',
                  fontSize: '0.85rem',
                  color: step.completed ? '#4caf50' : 'text.secondary',
                }}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CompleteProfile;
