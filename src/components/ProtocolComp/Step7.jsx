import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import protocol1 from '../../assets/protocol1.png';
import protocol2 from '../../assets/protocol2.png';

const Step7 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 7
      </Typography>

      <Box sx={{ 
        p: 3, 
        mb: 3, 
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        backgroundColor: '#fff',
        flex: 1
      }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Final Inspection
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '14px' }}>
          Schematic vehicle representation for marking damage (This representation is not intended to represent the rented camper van)
        </Typography>

        {/* Protocol Images */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Box sx={{ flex: 1 }}>
            <img 
              src={protocol1} 
              alt="Protocol 1" 
              style={{ 
                width: '100%', 
                height: 'auto',
                borderRadius: '4px'
              }} 
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <img 
              src={protocol2} 
              alt="Protocol 2" 
              style={{ 
                width: '100%', 
                height: 'auto',
                borderRadius: '4px'
              }} 
            />
          </Box>
        </Box>

        {/* Upload Box */}
        <Box sx={{ 
          mb: 3,
          border: '2px dashed #ccc',
          borderRadius: '4px',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': {
            borderColor: '#ff9800',
            backgroundColor: 'rgba(255, 152, 0, 0.04)'
          }
        }}>
          <input
            type="file"
            id="file-upload"
            hidden
            accept="image/*"
          />
          <label htmlFor="file-upload" style={{ cursor: 'pointer', textAlign: 'center' }}>
            <CloudUploadIcon sx={{ fontSize: 40, color: '#666', mb: 1 }} />
            <Typography sx={{ fontSize: '14px', color: '#666' }}>
              Upload image
            </Typography>
          </label>
        </Box>

        {/* Notes Section */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 500 }}>
            Further notes on the vehicle condition
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Enter any additional notes about the vehicle condition..."
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 1,
                '& fieldset': {
                  borderColor: '#ccc',
                },
                '&:hover fieldset': {
                  borderColor: '#ff9800',
                },
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
        <ActionButtons 
          onSaveDraft={onPrevious} 
          onNext={onNext}
        />
      </Box>
    </Box>
  );
};

export default Step7; 