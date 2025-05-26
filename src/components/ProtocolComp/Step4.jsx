import React from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';

const Step4 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Step 4
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
          Vehicle Documentation and Equipment Check
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          Please verify the presence of all required documents and equipment. Check the box if present.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Vehicle registration document (registration)"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="International insurance card"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Operating instructions"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Vehicle key"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Onboard tools, warning triangle"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="First aid kit, safety vests"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Spare wheel and jack"
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
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

export default Step4; 