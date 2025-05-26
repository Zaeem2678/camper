import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoBox = ({ text, bgColor = '#FDF4E7', textColor = '#8B4513' }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 40,
        backgroundColor: bgColor,
        borderRadius: 1,
        alignItems: 'left',
        p: 2,
      }}
    >
      <Typography variant="body2" sx={{ fontSize: 13, color: textColor }}>
        {text}
      </Typography>
    </Box>
  );
};

export default InfoBox;
