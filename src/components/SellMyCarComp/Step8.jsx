import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step8 = ({ onNext }) => {
  const { t } = useTranslation();
  const [addressInfo, setAddressInfo] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    nationalId: ''
  });

  const handleChange = (field) => (event) => {
    setAddressInfo({
      ...addressInfo,
      [field]: event.target.value
    });
  };

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
      {/* Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600} sx={{ mb: 2, fontSize: 30 }}>
          {t('sellMyCar.step8.title')}
        </Typography>

        <Typography fontSize={24} fontWeight={500} sx={{ mb: 1 }}>
          {t('sellMyCar.step8.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 3 }}>
          {t('sellMyCar.step8.description')}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
              {t('sellMyCar.step8.fields.address')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={addressInfo.address}
              onChange={handleChange('address')}
              placeholder={t('sellMyCar.step8.placeholders.address')}
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
              {t('sellMyCar.step8.fields.city')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={addressInfo.city}
              onChange={handleChange('city')}
              placeholder={t('sellMyCar.step8.placeholders.city')}
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
              {t('sellMyCar.step8.fields.state')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={addressInfo.state}
              onChange={handleChange('state')}
              placeholder={t('sellMyCar.step8.placeholders.state')}
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
              {t('sellMyCar.step8.fields.country')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={addressInfo.country}
              onChange={handleChange('country')}
              placeholder={t('sellMyCar.step8.placeholders.country')}
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
              {t('sellMyCar.step8.fields.nationalId')}
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={addressInfo.nationalId}
              onChange={handleChange('nationalId')}
              placeholder={t('sellMyCar.step8.placeholders.nationalId')}
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
      </Box>

      {/* Sticky Bottom Buttons */}
      <ActionButtons
        onSaveDraft={() => console.log('Draft Saved')}
        onNext={onNext}
      />
    </Box>
  );
};

export default Step8; 