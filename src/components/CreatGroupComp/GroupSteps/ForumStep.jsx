import React from 'react';
import { Box, Typography } from '@mui/material';

function ForumStep() {
  return (
    <Box>
      <Typography variant="h6" component="h3" gutterBottom mb={2}>
        Group Forum
      </Typography>

      <Typography variant="body1" gutterBottom>
        Create a discussion forum to allow members of this group to communicate in a structured, bulletin-board style fashion.
      </Typography>

      <Box sx={{ marginTop: '20px' }}>
        <label>
          <input type="checkbox" />
          <Typography variant="body1" component="span" sx={{ marginLeft: '5px' }}>
            Yes, I want this group to have a discussion forum.
          </Typography>
        </label>
      </Box>
    </Box>
  );
}

export default ForumStep; 