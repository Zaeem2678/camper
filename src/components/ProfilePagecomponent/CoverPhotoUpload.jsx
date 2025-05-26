import React, { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InfoIcon from '@mui/icons-material/Info'; // Info icon added
import InfoBox from './InfoBox'; // Adjust path as needed
import { useTranslation } from 'react-i18next';

const CoverPhotoUpload = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(url);
    }
  };

  const handleDeleteCoverPhoto = () => {
    setSelectedImage(null);
    alert('Cover photo deleted!');
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mt: 2,
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: 22 }}>
        {t('profile.edit.coverPhoto.title')}
      </Typography>

      {/* Info Box with Icon and Border */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          border: '1px solid #ddd',
          borderRadius: 2,
          padding: 1,
          backgroundColor: '#fff',
        }}
      >
        <InfoIcon sx={{ fontSize: 30, color: '#385DFF' }} />
        <Typography variant="body2" color="text.secondary" sx={{ margin: 0 ,backgroundColor:"#fff"}}>
          {t('profile.edit.coverPhoto.info')}
        </Typography>
      </Box>

      {/* Cover Photo Upload Section */}
      {!selectedImage && (
        <>
          <Paper
            variant="outlined"
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              width: '100%',
              minHeight: 150,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              p: 2,
            }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t('profile.edit.coverPhoto.dropZone.text')}
            </Typography>

            <Button variant="contained" component="label">
              {t('profile.edit.coverPhoto.dropZone.button')}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>
          </Paper>

          <Box
            sx={{
              width: '100%',
              backgroundColor: '#FDF4E7',
              borderRadius: 1,
              p: 2,
              mt: 2,
            }}
          >
            <Typography sx={{ fontSize: 14, color: '#8B4513' }}>
              {t('profile.edit.coverPhoto.recommendation')}
            </Typography>
          </Box>
        </>
      )}

      {/* Display Selected Cover Image */}
      {selectedImage && (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              mb: 2,
            }}
          >
            <img
              src={selectedImage}
              alt="Cover Photo"
              style={{
                width: '100%', 
                height: 'auto', 
                objectFit: 'cover', 
                maxHeight: 300
              }}
            />
          </Box>

          <InfoBox
            text={t('profile.edit.coverPhoto.recommendation')}
            bgColor="#FDF4E7"
            textColor="#8B4513"
          />
        </>
      )}

      {/* Always Show Delete Option */}
      <Typography variant="body2" sx={{ fontSize: 14, mt: 2 }}>
        {t('profile.edit.coverPhoto.delete.text')}
      </Typography>

      {/* Delete Button */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteCoverPhoto}
        >
          {t('profile.edit.coverPhoto.delete.button')}
        </Button>
      </Box>
    </Box>
  );
};

export default CoverPhotoUpload;
