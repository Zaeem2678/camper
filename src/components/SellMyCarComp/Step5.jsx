import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

const Step5 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    exteriorColor: '',
    metallic: '',
    abs: '',
    esp: '',
    secondaryAC: '',
    cruiseControl: '',
    climatisation: '',
    auxiliaryHeating: '',
    selfSteering: '',
    acousticParking: '',
    visualParking: '',
    seats: '',
    beds: '',
    sanitation: '',
    comfortEquipment: '',
    infotainment: '',
    extras: '',
    trailerCoupling: ''
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const exteriorColors = [
    { value: 'black', label: t('sellMyCar.step5.colors.black') },
    { value: 'white', label: t('sellMyCar.step5.colors.white') },
    { value: 'silver', label: t('sellMyCar.step5.colors.silver') },
    { value: 'gray', label: t('sellMyCar.step5.colors.gray') },
    { value: 'red', label: t('sellMyCar.step5.colors.red') },
    { value: 'blue', label: t('sellMyCar.step5.colors.blue') },
    { value: 'green', label: t('sellMyCar.step5.colors.green') },
    { value: 'brown', label: t('sellMyCar.step5.colors.brown') },
    { value: 'yellow', label: t('sellMyCar.step5.colors.yellow') },
    { value: 'other', label: t('sellMyCar.step5.colors.other') }
  ];

  const yesNoOptions = [
    { value: 'yes', label: t('sellMyCar.step5.options.yes') },
    { value: 'no', label: t('sellMyCar.step5.options.no') }
  ];

  const seatsOptions = [
    { value: '2', label: '2 Seats' },
    { value: '3', label: '3 Seats' },
    { value: '4', label: '4 Seats' },
    { value: '5', label: '5 Seats' },
    { value: '6+', label: '6 or more Seats' }
  ];

  const bedsOptions = [
    { value: '0', label: 'No Beds' },
    { value: '1', label: '1 Bed' },
    { value: '2', label: '2 Beds' },
    { value: '3', label: '3 Beds' },
    { value: '4+', label: '4 or more Beds' }
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
          {t('sellMyCar.step5.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step5.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step5.description')}
        </Typography>

        {renderDropdown(t('sellMyCar.step5.fields.exteriorColor'), exteriorColors, 'exteriorColor')}
        {renderDropdown(t('sellMyCar.step5.fields.metallic'), yesNoOptions, 'metallic')}
        {renderDropdown(t('sellMyCar.step5.fields.abs'), yesNoOptions, 'abs')}
        {renderDropdown(t('sellMyCar.step5.fields.esp'), yesNoOptions, 'esp')}
        {renderDropdown(t('sellMyCar.step5.fields.secondaryAC'), yesNoOptions, 'secondaryAC')}
        {renderDropdown(t('sellMyCar.step5.fields.cruiseControl'), yesNoOptions, 'cruiseControl')}
        {renderDropdown(t('sellMyCar.step5.fields.climatisation'), yesNoOptions, 'climatisation')}
        {renderDropdown(t('sellMyCar.step5.fields.auxiliaryHeating'), yesNoOptions, 'auxiliaryHeating')}
        {renderDropdown(t('sellMyCar.step5.fields.selfSteering'), yesNoOptions, 'selfSteering')}
        {renderDropdown(t('sellMyCar.step5.fields.acousticParking'), yesNoOptions, 'acousticParking')}
        {renderDropdown(t('sellMyCar.step5.fields.visualParking'), yesNoOptions, 'visualParking')}
        {renderDropdown(t('sellMyCar.step5.fields.seats'), seatsOptions, 'seats')}
        {renderDropdown(t('sellMyCar.step5.fields.beds'), bedsOptions, 'beds')}
        {renderDropdown(t('sellMyCar.step5.fields.sanitation'), yesNoOptions, 'sanitation')}
        {renderDropdown(t('sellMyCar.step5.fields.comfortEquipment'), yesNoOptions, 'comfortEquipment')}
        {renderDropdown(t('sellMyCar.step5.fields.infotainment'), yesNoOptions, 'infotainment')}
        {renderDropdown(t('sellMyCar.step5.fields.extras'), yesNoOptions, 'extras')}
        {renderDropdown(t('sellMyCar.step5.fields.trailerCoupling'), yesNoOptions, 'trailerCoupling')}

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
            (activeField === 'exteriorColor' ? exteriorColors :
             activeField === 'seats' ? seatsOptions :
             activeField === 'beds' ? bedsOptions :
             yesNoOptions).map((option) => (
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

export default Step5; 