import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function PhotoStep() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', mt: 4 }}>
      <Box
        component="img"
        src="/placeholder-group.png" // You can replace this with a real image path
        alt="Group Placeholder"
        sx={{ width: 100, height: 100, mb: 2 }}
      />
      <Typography variant="body1" sx={{ mb: 1 }}>
        Upload a photo that represents this group. The image will be shown on the main group page, and in search results.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        To skip the group photo upload process select "Next Step".
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 2,
          p: 3,
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          Drop your image here
        </Typography>
        <Button
          variant="contained"
          color="warning"
          startIcon={<CloudUploadIcon />}
          sx={{ fontWeight: 'bold' }}
        >
          Select your file
        </Button>
      </Paper>
    </Box>
  );
}

export default PhotoStep;
