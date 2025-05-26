import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step7 = ({ onNext }) => {
  const { t } = useTranslation();
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: {
      day: '',
      month: '',
      year: ''
    }
  });

  const handleChange = (field) => (event) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: event.target.value
    });
  };

  const handleDobChange = (field) => (event) => {
    setPersonalInfo({
      ...personalInfo,
      dob: {
        ...personalInfo.dob,
        [field]: event.target.value
      }
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        px: 2,
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
      }}
    >
      {/* Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600} sx={{ mb: 1.5, fontSize: 24 }}>
          {t('sellMyCar.step7.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step7.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step7.description')}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
              {t('sellMyCar.step7.fields.firstName')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={personalInfo.firstName}
              onChange={handleChange('firstName')}
              placeholder={t('sellMyCar.step7.placeholders.firstName')}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  borderRadius: 1,
                  boxShadow: 'none',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ff9800',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
              {t('sellMyCar.step7.fields.lastName')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={personalInfo.lastName}
              onChange={handleChange('lastName')}
              placeholder={t('sellMyCar.step7.placeholders.lastName')}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  borderRadius: 1,
                  boxShadow: 'none',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ff9800',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
              {t('sellMyCar.step7.fields.email')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              type="email"
              value={personalInfo.email}
              onChange={handleChange('email')}
              placeholder={t('sellMyCar.step7.placeholders.email')}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  borderRadius: 1,
                  boxShadow: 'none',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ff9800',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
              {t('sellMyCar.step7.fields.dob')}
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={personalInfo.dob.day}
                  onChange={handleDobChange('day')}
                  placeholder="Day"
                  inputProps={{ min: 1, max: 31 }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: 1,
                      boxShadow: 'none',
                      '& fieldset': {
                        borderColor: '#ccc',
                      },
                      '&:hover fieldset': {
                        borderColor: '#ff9800',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={personalInfo.dob.month}
                  onChange={handleDobChange('month')}
                  placeholder="Month"
                  inputProps={{ min: 1, max: 12 }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: 1,
                      boxShadow: 'none',
                      '& fieldset': {
                        borderColor: '#ccc',
                      },
                      '&:hover fieldset': {
                        borderColor: '#ff9800',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={personalInfo.dob.year}
                  onChange={handleDobChange('year')}
                  placeholder="Year"
                  inputProps={{ min: 1900, max: new Date().getFullYear() }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: 1,
                      boxShadow: 'none',
                      '& fieldset': {
                        borderColor: '#ccc',
                      },
                      '&:hover fieldset': {
                        borderColor: '#ff9800',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Sticky Bottom Buttons */}
      <ActionButtons
        onSaveDraft={() => console.log('Draft Saved')}
        onNext={onNext}
      />
    </Box>
  );
};

export default Step7; 