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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useTranslation } from 'react-i18next';

const Step6 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    isNegotiable: ''
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const yesNoOptions = [
    { value: 'yes', label: t('sellMyCar.step5.options.yes') },
    { value: 'no', label: t('sellMyCar.step5.options.no') }
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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
          {t('sellMyCar.step6.title')}
        </Typography>

        <Typography fontSize={18} fontWeight={500} sx={{ mb: 0.5 }}>
          {t('sellMyCar.step6.subtitle')}
        </Typography>
        <Typography fontSize={13} color="text.secondary" sx={{ mb: 2 }}>
          {t('sellMyCar.step6.description')}
        </Typography>

        {/* Simple Upload Button */}
        <Box sx={{ mb: 2 }}>
          <input
            type="file"
            id="file-upload"
            hidden
            accept="image/*,video/*"
            onChange={handleFileUpload}
            multiple
          />
          <label htmlFor="file-upload">
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                bgcolor: '#ff9800',
                color: 'white',
                borderRadius: 1,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#f57c00',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <CloudUploadIcon sx={{ fontSize: 20 }} />
              <Typography fontSize={14} fontWeight={500}>{t('sellMyCar.step6.fields.uploadFiles')}</Typography>
            </Box>
          </label>
        </Box>

        {/* Preview Image */}
        {previewImage && (
          <Box sx={{ mb: 2 }}>
            <img
              src={previewImage}
              alt="Preview"
              style={{
                width: '100%',
                maxHeight: '200px',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
            />
          </Box>
        )}

        {/* Title */}
        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step6.fields.title')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('sellMyCar.step6.placeholders.title')}
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

        {/* Description */}
        <Box sx={{ mb: 2 }}>
          <Typography fontSize={14} fontWeight={500} sx={{ mb: 0.5 }}>
            {t('sellMyCar.step6.fields.description')}
          </Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t('sellMyCar.step6.placeholders.description')}
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

        {/* Price Negotiable */}
        {renderDropdown(t('sellMyCar.step6.fields.isNegotiable'), yesNoOptions, 'isNegotiable')}

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
          {activeField && yesNoOptions.map((option) => (
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
          ))}
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

export default Step6; 