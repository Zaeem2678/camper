import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Menu,
  MenuItem,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

const Step1 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    option: '',
    vehicleType: '',
    sellerType: ''
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const options = [
    { value: 'sell', label: t('sellMyCar.step1.options.sell') },
    { value: 'rent', label: t('sellMyCar.step1.options.rent') },
    { value: 'trade', label: t('sellMyCar.step1.options.trade') },
    { value: 'lease', label: t('sellMyCar.step1.options.lease') }
  ];

  const vehicleTypes = [
    { value: 'car', label: t('sellMyCar.step1.vehicleTypes.car') },
    { value: 'suv', label: t('sellMyCar.step1.vehicleTypes.suv') },
    { value: 'truck', label: t('sellMyCar.step1.vehicleTypes.truck') },
    { value: 'van', label: t('sellMyCar.step1.vehicleTypes.van') },
    { value: 'motorcycle', label: t('sellMyCar.step1.vehicleTypes.motorcycle') },
    { value: 'bus', label: t('sellMyCar.step1.vehicleTypes.bus') },
    { value: 'rv', label: t('sellMyCar.step1.vehicleTypes.rv') }
  ];

  const sellerTypes = [
    { value: 'private', label: t('sellMyCar.step1.sellerTypes.private') },
    { value: 'dealer', label: t('sellMyCar.step1.sellerTypes.dealer') },
    { value: 'broker', label: t('sellMyCar.step1.sellerTypes.broker') },
    { value: 'auction', label: t('sellMyCar.step1.sellerTypes.auction') },
    { value: 'wholesale', label: t('sellMyCar.step1.sellerTypes.wholesale') }
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
      {/* Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600} sx={{ mb: 1.5, fontSize: 24 }}>
          {t('sellMyCar.step1.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step1.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step1.description')}
        </Typography>

        {renderDropdown(t('sellMyCar.step1.fields.option'), options, 'option')}
        {renderDropdown(t('sellMyCar.step1.fields.vehicleType'), vehicleTypes, 'vehicleType')}
        {renderDropdown(t('sellMyCar.step1.fields.sellerType'), sellerTypes, 'sellerType')}

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
            (activeField === 'option' ? options :
             activeField === 'vehicleType' ? vehicleTypes :
             sellerTypes).map((option) => (
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

export default Step1; 