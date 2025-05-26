import React from 'react';
import { Box, Typography } from '@mui/material';

function DetailsStep() {
  return (
    <Box>
      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant="body2" component="label" htmlFor="groupName" sx={{ fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>
          Group Name (required)
        </Typography>
        <input type="text" id="groupName" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: 4, }} />
      </Box>

      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant="body2" component="label" htmlFor="groupDescription" sx={{ fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>
          Group Description
        </Typography>
        <textarea id="groupDescription" style={{ width: '100%', padding: '8px', minHeight: '100px', border: '1px solid #ccc', borderRadius: 4 }}></textarea>
      </Box>
    </Box>
  );
}

export default DetailsStep; 