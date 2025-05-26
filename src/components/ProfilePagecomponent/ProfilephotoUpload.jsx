import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import InfoBox from './InfoBox';

const ProfilePhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tab, setTab] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(url);
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
  };

  const handleDeletePhoto = () => {
    setSelectedImage(null);
    alert('Profile photo deleted!');
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
        Change profile photo
      </Typography>

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
          Your cover photo will be displayed on your profile and throughout the site.
        </Typography>
      </Box>

      <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)} sx={{ mb: 1 }}>
        <Tab label="Upload" />
        <Tab label="Take Photo" />
        <Tab label="Delete" />
      </Tabs>

      {tab === 0 && !selectedImage && (
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
              Drop your image here
            </Typography>

            <Button variant="contained" component="label">
              Select Your File
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
              For best results, upload an image that is 300px by 300px or larger.
            </Typography>
          </Box>
        </>
      )}

      {tab === 1 && !selectedImage && (
       <InfoBox
       text="Webcam not found or permission was denied. Please upload a photo."
       bgColor="#FDF4E7"
       textColor="#8B4513"
     />
      )}

      {(tab === 0 || tab === 1) && selectedImage && (
        <>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-start',
              gap: 11,
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  color: 'gray',
                }}
              >
                Crop Controls Here
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar src={selectedImage} sx={{ width: 300, height: 300 }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 1,
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                backgroundColor: (theme) => theme.palette.primary.main,
              }}
            >
              Crop Photo
            </Button>
            <Button
              onClick={handleCancel}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Cancel
            </Button>
          </Box>

          <InfoBox
  text="For best results, upload an image that is 300px by 300px or larger."
  bgColor="#FDF4E7"
  textColor="#8B4513"
/>
        
        </>
      )}

      {tab === 2 && (
        <>
          <Typography variant="body2" sx={{ fontSize: 14 }}>
            If you'd like to delete your current profile photo, use the button below.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeletePhoto}
            >
              Delete My Profile Photo
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProfilePhotoUpload;
