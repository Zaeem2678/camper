import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step8 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step8.title')}
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
          {t('protocol.step8.signatures.title')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Tenant Signature */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('protocol.step8.signatures.tenant.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label={t('protocol.step8.signatures.tenant.name')}
                fullWidth
                size="small"
              />
              <TextField
                label={t('protocol.step8.signatures.tenant.date')}
                fullWidth
                size="small"
              />
              <Box sx={{ 
                border: '1px solid #ccc',
                borderRadius: '4px',
                p: 2,
                minHeight: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography color="textSecondary">
                  {t('protocol.step8.signatures.tenant.signature')}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Landlord Signature */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('protocol.step8.signatures.landlord.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label={t('protocol.step8.signatures.landlord.name')}
                fullWidth
                size="small"
              />
              <TextField
                label={t('protocol.step8.signatures.landlord.date')}
                fullWidth
                size="small"
              />
              <Box sx={{ 
                border: '1px solid #ccc',
                borderRadius: '4px',
                p: 2,
                minHeight: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography color="textSecondary">
                  {t('protocol.step8.signatures.landlord.signature')}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Witness Signature */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('protocol.step8.signatures.witness.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label={t('protocol.step8.signatures.witness.name')}
                fullWidth
                size="small"
              />
              <TextField
                label={t('protocol.step8.signatures.witness.date')}
                fullWidth
                size="small"
              />
              <Box sx={{ 
                border: '1px solid #ccc',
                borderRadius: '4px',
                p: 2,
                minHeight: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography color="textSecondary">
                  {t('protocol.step8.signatures.witness.signature')}
                </Typography>
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

export default Step8; 