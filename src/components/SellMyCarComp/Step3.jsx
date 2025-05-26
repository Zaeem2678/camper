import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

const Step3 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    transmission: '',
    driverType: '',
    emissionClass: '',
    emissionSticker: ''
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [motorPower, setMotorPower] = useState('');

  const transmissions = [
    { value: 'automatic', label: t('sellMyCar.step3.transmissions.automatic') },
    { value: 'manual', label: t('sellMyCar.step3.transmissions.manual') },
    { value: 'cvt', label: t('sellMyCar.step3.transmissions.cvt') },
    { value: 'semi_automatic', label: t('sellMyCar.step3.transmissions.semi_automatic') }
  ];

  const driverTypes = [
    { value: 'fwd', label: t('sellMyCar.step3.driverTypes.fwd') },
    { value: 'rwd', label: t('sellMyCar.step3.driverTypes.rwd') },
    { value: 'awd', label: t('sellMyCar.step3.driverTypes.awd') },
    { value: '4wd', label: t('sellMyCar.step3.driverTypes.4wd') }
  ];

  const emissionClasses = [
    { value: 'euro1', label: t('sellMyCar.step3.emissionClasses.euro1') },
    { value: 'euro2', label: t('sellMyCar.step3.emissionClasses.euro2') },
    { value: 'euro3', label: t('sellMyCar.step3.emissionClasses.euro3') },
    { value: 'euro4', label: t('sellMyCar.step3.emissionClasses.euro4') },
    { value: 'euro5', label: t('sellMyCar.step3.emissionClasses.euro5') },
    { value: 'euro6', label: t('sellMyCar.step3.emissionClasses.euro6') }
  ];

  const emissionStickers = [
    { value: 'green', label: t('sellMyCar.step3.emissionStickers.green') },
    { value: 'yellow', label: t('sellMyCar.step3.emissionStickers.yellow') },
    { value: 'red', label: t('sellMyCar.step3.emissionStickers.red') },
    { value: 'none', label: t('sellMyCar.step3.emissionStickers.none') }
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
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600} sx={{ mb: 1.5, fontSize: 24 }}>
          {t('sellMyCar.step3.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step3.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step3.description')}
        </Typography>

        {renderDropdown(t('sellMyCar.step3.fields.transmission'), transmissions, 'transmission')}

        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step3.fields.motorPower')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={motorPower}
            onChange={(e) => setMotorPower(e.target.value)}
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

        {renderDropdown(t('sellMyCar.step3.fields.driverType'), driverTypes, 'driverType')}
        {renderDropdown(t('sellMyCar.step3.fields.emissionClass'), emissionClasses, 'emissionClass')}
        {renderDropdown(t('sellMyCar.step3.fields.emissionSticker'), emissionStickers, 'emissionSticker')}

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
            (activeField === 'transmission' ? transmissions :
             activeField === 'driverType' ? driverTypes :
             activeField === 'emissionClass' ? emissionClasses :
             emissionStickers).map((option) => (
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

      <ActionButtons
        onSaveDraft={() => console.log('Draft Saved')}
        onNext={onNext}
      />
    </Box>
  );
};

export default Step3; 