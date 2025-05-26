import React from 'react';
import { Box, Typography, TextField, Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step6 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step6.title')}
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
          {t('protocol.step6.damageAssessment.title')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <RadioGroup defaultValue="noDamage">
            <FormControlLabel 
              value="noDamage" 
              control={<Radio />} 
              label={t('protocol.step6.damageAssessment.noDamage')} 
            />
            <FormControlLabel 
              value="damage" 
              control={<Radio />} 
              label={t('protocol.step6.damageAssessment.damagePresent')} 
            />
          </RadioGroup>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label={t('protocol.step6.damageAssessment.location')}
              fullWidth
              size="small"
            />
            <TextField
              label={t('protocol.step6.damageAssessment.description')}
              fullWidth
              multiline
              rows={4}
              size="small"
            />
            <Button 
              variant="outlined" 
              component="label"
              sx={{ alignSelf: 'flex-start' }}
            >
              {t('protocol.step6.damageAssessment.photo')}
              <input type="file" hidden />
            </Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('protocol.step6.additionalNotes.title')}
            </Typography>
            <TextField
              placeholder={t('protocol.step6.additionalNotes.placeholder')}
              fullWidth
              multiline
              rows={4}
              size="small"
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

export default Step6; 