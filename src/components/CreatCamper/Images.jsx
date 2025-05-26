import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ActionButtons from './ActionsButtons';

const Images = () => {
  const theme = useTheme();

  const descriptionText = `Images that highlight all the special characteristics of your camper and help tenants choose your camper. Upload at least one picture so that tenants can see it if they are looking for a camper. You can upload up to 20 images.`;

  const uploadInstruction = `Upload or Drag & Drop (max 10 MB)\nOnly JPG, PNG, JPEG, webP only allowed`;

  const uploadBoxStyle = {
    border: `2px dashed ${theme.palette.primary.orange || '#ff9800'}`,
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center',
    display:"flex",
        flexDirection: 'column',

    justifyContent:"center",
    alignItem:"center",
    color: '#777',
    fontSize: '16px',
    minHeight:"250px",
    cursor: 'pointer',
    backgroundColor: '#fafafa',
    whiteSpace: 'pre-line',
  };

  return (
    <Box sx={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h5" fontWeight={600}>
        Images
      </Typography>

      <Typography sx={{ color: '#555', fontSize: '16px' }}>
        {descriptionText}
      </Typography>

      <Box>
        <Typography fontWeight={500} fontSize="16px" mb={1}>
          Cover Picture
        </Typography>
        <Box sx={uploadBoxStyle}>
          <Typography>{uploadInstruction}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography fontWeight={500} fontSize="16px" mb={1}>
          See More Images
        </Typography>
        <Box sx={uploadBoxStyle}>
          <Typography>{uploadInstruction}</Typography>
        </Box>
      </Box>
      <ActionButtons
  onSaveDraft={() => console.log('Draft Saved')}
  onNext={() => console.log('Go to Next')}
/>

    </Box>
  );
};

export default Images;
