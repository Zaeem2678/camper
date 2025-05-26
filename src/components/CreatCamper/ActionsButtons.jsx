import React from 'react';
import { Box, Button, useTheme } from '@mui/material';

const ActionButtons = ({ onSaveDraft, onNext }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 'auto' }}>
      <Button
        variant="outlined"
        onClick={onSaveDraft}
        sx={{
          fontSize: 13,
          borderRadius: 2,
          px: 3,
          py: 1,
          minWidth:120,
          bgcolor: theme.palette.primary.orange,
          color: '#000',
          borderColor: '#ccc',
        }}
      >
        Save Draft
      </Button>
      <Button
        variant="contained"
        onClick={onNext}
        sx={{
          fontSize: 13,
          borderRadius: 2,
          px: 3,
          py: 1,
                    minWidth:120,

          bgcolor: theme.palette.primary.orange,
          color: '#000',
          '&:hover': {
            bgcolor: theme.palette.primary.orange,
            opacity: 0.9,
          },
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default ActionButtons;
