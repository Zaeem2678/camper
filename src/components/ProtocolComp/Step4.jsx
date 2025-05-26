import React from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step4 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step4.title')}
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
          {t('protocol.step4.vehicleDocumentation.title')}
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          {t('protocol.step4.vehicleDocumentation.description')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.registration')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.insurance')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.instructions')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.key')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.tools')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.safety')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={t('protocol.step4.vehicleDocumentation.items.spareWheel')}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
          />
        </Box>

        {/* New Statement and Checkboxes */}
        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '14px' }}>
            {t('protocol.step4.additionalStatement.description')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={t('protocol.step4.additionalStatement.yes')}
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={t('protocol.step4.additionalStatement.no')}
              sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
            />
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

export default Step4; 