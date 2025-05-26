import React from 'react';
import { Box, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';

export default function AlbumCard({ album, onClick }) {
  // Assuming album object has properties like: 
  // id, title, date, photoCount, videoCount, thumbnailUrl
  const { title, date, photoCount, videoCount, thumbnailUrl } = album;

  return (
    <Box
      sx={{
        position: 'relative',
        width: 200, // Adjust size as needed
        height: 200, // Adjust size as needed
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        cursor: 'pointer',
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Align content to the bottom
        p: 2, // Add padding inside the box
        color: 'white', // Text color for overlay
        '&::before': { // Overlay for better text readability
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
            zIndex: 1,
        },
      }}
      onClick={onClick} // Add onClick handler here for opening the album
    >
      <Box sx={{ zIndex: 2 }}> {/* Content should be above the overlay */}
        <Typography variant="h6" component="div" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {date}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ImageIcon fontSize="small" />
          <Typography variant="body2">{photoCount}</Typography>
          <VideocamIcon fontSize="small" sx={{ ml: 1 }} />
          <Typography variant="body2">{videoCount}</Typography>
        </Box>
      </Box>
    </Box>
  );
} 