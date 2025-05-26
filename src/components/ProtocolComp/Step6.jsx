import React from 'react';
import { Box, Typography } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';

const Step6 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 6
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
          Deposit Information
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '14px' }}>
          The landlord received the deposit from the tenant before handover and refunded it after return.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Amount Received</Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>€</span>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>Amount Repaid</Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <input
                  type="number"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
                <span style={{ fontSize: '14px', color: '#666' }}>€</span>
              </Box>
            </Box>
          </Box>
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

export default Step6; 