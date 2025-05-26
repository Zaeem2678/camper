import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogContent, Button } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import CongratulationsDialog from './CongratulationsDialog';

const Step8 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 8
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
          Handover Completion
        </Typography>

        <Typography sx={{ mb: 4, color: 'text.secondary', fontSize: '14px', lineHeight: 1.6 }}>
          By signing this report, the parties declare that they have carefully inspected the vehicle upon handover and return and that the findings contained in this report were made by mutual agreement.
        </Typography>

        {/* Date and Time */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 500 }}>
            Date, time of handover
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 35px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <CalendarTodayIcon 
                  style={{ 
                    position: 'absolute', 
                    left: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: '#666',
                    fontSize: '18px'
                  }} 
                />
              </div>
            </Box>
            <Box sx={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="HH:MM"
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 35px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <AccessTimeIcon 
                  style={{ 
                    position: 'absolute', 
                    left: '10px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: '#666',
                    fontSize: '18px'
                  }} 
                />
              </div>
            </Box>
          </Box>
        </Box>

        {/* Landlord's Signature */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 500 }}>
            Landlord's signature upon handover
          </Typography>
          <Box sx={{ 
            border: '2px dashed #ccc',
            borderRadius: '4px',
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100px',
            cursor: 'pointer',
            '&:hover': {
              borderColor: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.04)'
            }
          }}>
            <input
              type="file"
              id="landlord-signature"
              hidden
              accept="image/*"
            />
            <label htmlFor="landlord-signature" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Typography sx={{ fontSize: '14px', color: '#666' }}>
                Signature here
              </Typography>
            </label>
          </Box>
        </Box>

        {/* Tenant's Signature */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 500 }}>
            Tenant's signature upon handover
          </Typography>
          <Box sx={{ 
            border: '2px dashed #ccc',
            borderRadius: '4px',
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100px',
            cursor: 'pointer',
            '&:hover': {
              borderColor: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.04)'
            }
          }}>
            <input
              type="file"
              id="tenant-signature"
              hidden
              accept="image/*"
            />
            <label htmlFor="tenant-signature" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Typography sx={{ fontSize: '14px', color: '#666' }}>
                Signature here
              </Typography>
            </label>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
        <ActionButtons
          onSaveDraft={onPrevious}
          onNext={handleOpenDialog}
        />
      </Box>

      {/* Congratulations Dialog */}
      <CongratulationsDialog open={openDialog} onClose={handleCloseDialog} />
    </Box>
  );
};

export default Step8; 