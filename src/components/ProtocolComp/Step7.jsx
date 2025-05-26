import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import protocol1 from '../../assets/protocol1.png';
import protocol2 from '../../assets/protocol2.png';
import { useTranslation } from 'react-i18next';

const Step7 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step7.title')}
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
          {t('protocol.step7.depositInfo.title')}
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '14px' }}>
          {t('protocol.step7.depositInfo.description')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step7.depositInfo.amountReceived')}
              </label>
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step7.depositInfo.currency')}</span>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step7.depositInfo.amountRepaid')}
              </label>
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step7.depositInfo.currency')}</span>
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

export default Step7; 