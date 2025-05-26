import React from 'react';
import { Dialog, DialogContent, Button, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';

const CongratulationsDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ textAlign: 'center', p: 4 }}>
        <CheckCircleIcon sx={{ fontSize: 60, color: 'green', mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
          Congratulations
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Information Completed Successfully
        </Typography>

        {/* File Download Representation */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            mb: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#f44336',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                mr: 1.5,
              }}
            >
               <Typography variant="caption" sx={{ color: '#fff', fontWeight: 'bold' }}>PDF</Typography>
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body1" fontWeight="bold">
                Document Files.PDF
              </Typography>
              <Typography variant="caption" color="text.secondary">
                23 MB
              </Typography>
            </Box>
          </Box>
          <DownloadIcon sx={{ color: '#666', cursor: 'pointer' }} />
        </Box>

        {/* Optional Close Button */}
        <Button onClick={onClose} variant="contained" sx={{ bgcolor: '#ff9800', color: '#000' }}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CongratulationsDialog; 