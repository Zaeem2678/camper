import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Menu,
  MenuItem,
  TextField,
  FormControlLabel,
  Switch,
  Grid,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

const Step4 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    numberOfOwners: '',
    damageStatus: '',
    serviceHistory: '',
    warrantyStatus: ''
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [mileage, setMileage] = useState('');
  const [isUserVehicle, setIsUserVehicle] = useState(false);
  const [validationDate, setValidationDate] = useState({
    month: '',
    year: ''
  });

  const numberOfOwners = [
    { value: '1', label: '1 Owner' },
    { value: '2', label: '2 Owners' },
    { value: '3', label: '3 Owners' },
    { value: '4', label: '4 Owners' },
    { value: '5+', label: '5 or more Owners' }
  ];

  const damageStatus = [
    { value: 'none', label: t('sellMyCar.step4.damageStatus.none') },
    { value: 'minor', label: t('sellMyCar.step4.damageStatus.minor') },
    { value: 'moderate', label: t('sellMyCar.step4.damageStatus.moderate') },
    { value: 'severe', label: t('sellMyCar.step4.damageStatus.severe') }
  ];

  const serviceHistory = [
    { value: 'complete', label: t('sellMyCar.step4.serviceHistory.complete') },
    { value: 'partial', label: t('sellMyCar.step4.serviceHistory.partial') },
    { value: 'none', label: t('sellMyCar.step4.serviceHistory.none') }
  ];

  const warrantyStatus = [
    { value: 'active', label: t('sellMyCar.step4.warrantyStatus.active') },
    { value: 'expired', label: t('sellMyCar.step4.warrantyStatus.expired') },
    { value: 'none', label: t('sellMyCar.step4.warrantyStatus.none') }
  ];

  const handleClick = (event, field) => {
    setAnchorEl(event.currentTarget);
    setActiveField(field);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveField(null);
  };

  const handleSelect = (value) => {
    setSelectedOptions({
      ...selectedOptions,
      [activeField]: value
    });
    handleClose();
  };

  const handleValidationDateChange = (field) => (event) => {
    setValidationDate({
      ...validationDate,
      [field]: event.target.value
    });
  };

  const renderDropdown = (label, options, field) => (
    <Box sx={{ mb: 2 }}>
      <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <Paper
        onClick={(e) => handleClick(e, field)}
        sx={{
          p: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          borderRadius: 1,
          border: '1px solid #ccc',
          bgcolor: '#fff',
          transition: 'all 0.2s ease',
          boxShadow: 'none',
          '&:hover': {
            border: '1px solid #ff9800',
          },
        }}
      >
        <Typography fontSize={14} fontWeight={500}>
          {selectedOptions[field] ? options.find(opt => opt.value === selectedOptions[field])?.label : 'Select an option'}
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
      </Paper>
    </Box>
  );

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
          {t('sellMyCar.step4.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step4.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step4.description')}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step4.fields.mileage')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            inputProps={{ min: 0 }}
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
        </Box>

        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isUserVehicle}
                onChange={(e) => setIsUserVehicle(e.target.checked)}
                color="primary"
              />
            }
            label={t('sellMyCar.step4.fields.isUserVehicle')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: 14 } }}
          />
        </Box>

        {renderDropdown(t('sellMyCar.step4.fields.numberOfOwners'), numberOfOwners, 'numberOfOwners')}
        {renderDropdown(t('sellMyCar.step4.fields.damageStatus'), damageStatus, 'damageStatus')}

        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step4.fields.validationDate')}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Month"
                type="number"
                value={validationDate.month}
                onChange={handleValidationDateChange('month')}
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Year"
                type="number"
                value={validationDate.year}
                onChange={handleValidationDateChange('year')}
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
        </Box>

        {renderDropdown(t('sellMyCar.step4.fields.serviceHistory'), serviceHistory, 'serviceHistory')}
        {renderDropdown(t('sellMyCar.step4.fields.warrantyStatus'), warrantyStatus, 'warrantyStatus')}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: anchorEl ? anchorEl.offsetWidth : 'auto',
              boxShadow: 'none',
              border: '1px solid #ccc',
              borderRadius: 1,
              mt: 0.5,
            }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {activeField && 
            (activeField === 'numberOfOwners' ? numberOfOwners :
             activeField === 'damageStatus' ? damageStatus :
             activeField === 'serviceHistory' ? serviceHistory :
             warrantyStatus).map((option) => (
              <MenuItem 
                key={option.value} 
                onClick={() => handleSelect(option.value)}
                sx={{
                  fontSize: 14,
                  py: 1,
                  '&:hover': {
                    bgcolor: 'rgba(255, 165, 0, 0.1)',
                  },
                }}
              >
                {option.label}
              </MenuItem>
            ))
          }
        </Menu>
      </Box>

      {/* Sticky Bottom Buttons */}
      <ActionButtons
        onSaveDraft={() => console.log('Draft Saved')}
        onNext={onNext}
      />
    </Box>
  );
};

export default Step4; 