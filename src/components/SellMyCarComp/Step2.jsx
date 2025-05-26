import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Menu,
  MenuItem,
  TextField,
  Grid,
} from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

const Step2 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    brand: '',
    modal: '',
    constructionYear: '',
    category: '',
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const [dob, setDob] = useState({
    day: '',
    month: '',
    year: ''
  });

  const [numericInputs, setNumericInputs] = useState({
    seats: '',
    length: '',
    width: '',
    height: '',
    gvw: '',
    axles: ''
  });

  const brands = [
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'ford', label: 'Ford' },
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' }
  ];

  const modals = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'wagon', label: 'Wagon' }
  ];

  const constructionYears = Array.from(
    { length: 30 },
    (_, i) => new Date().getFullYear() - i
  ).map(year => ({ value: year.toString(), label: year.toString() }));

  const categories = [
    { value: 'economy', label: t('sellMyCar.step2.categories.economy') },
    { value: 'luxury', label: t('sellMyCar.step2.categories.luxury') },
    { value: 'sports', label: t('sellMyCar.step2.categories.sports') },
    { value: 'family', label: t('sellMyCar.step2.categories.family') },
    { value: 'commercial', label: t('sellMyCar.step2.categories.commercial') }
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

  const handleDobChange = (field) => (event) => {
    setDob({
      ...dob,
      [field]: event.target.value
    });
  };

  const handleNumericChange = (field) => (event) => {
    setNumericInputs({
      ...numericInputs,
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
          {t('sellMyCar.step2.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step2.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step2.description')}
        </Typography>

        {renderDropdown(t('sellMyCar.step2.fields.brand'), brands, 'brand')}
        {renderDropdown(t('sellMyCar.step2.fields.modal'), modals, 'modal')}

        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.constructionYear')}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                size="small"
                label="Day"
                type="number"
                value={dob.day}
                onChange={handleDobChange('day')}
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
                label="Month"
                type="number"
                value={dob.month}
                onChange={handleDobChange('month')}
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
                label="Year"
                type="number"
                value={dob.year}
                onChange={handleDobChange('year')}
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

        {renderDropdown(t('sellMyCar.step2.fields.category'), categories, 'category')}

        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.seats')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={numericInputs.seats}
            onChange={handleNumericChange('seats')}
            inputProps={{ min: 1 }}
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
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.length')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={numericInputs.length}
            onChange={handleNumericChange('length')}
            inputProps={{ step: "0.1" }}
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
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.width')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={numericInputs.width}
            onChange={handleNumericChange('width')}
            inputProps={{ step: "0.1" }}
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
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.height')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={numericInputs.height}
            onChange={handleNumericChange('height')}
            inputProps={{ step: "0.1" }}
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
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.gvw')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={numericInputs.gvw}
            onChange={handleNumericChange('gvw')}
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
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step2.fields.axles')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={numericInputs.axles}
            onChange={handleNumericChange('axles')}
            inputProps={{ min: 1 }}
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
            (activeField === 'brand' ? brands :
             activeField === 'modal' ? modals :
             activeField === 'constructionYear' ? constructionYears :
             categories).map((option) => (
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

export default Step2; 