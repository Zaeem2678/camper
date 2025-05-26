import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Step1 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step1.title')}
      </Typography>
      
      <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
        {t('protocol.step1.subtitle')}
      </Typography>

      <Box sx={{ 
        p: 3, 
        mb: 3, 
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        backgroundColor: '#fff'
      }}>
        {/* Booking Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            {t('protocol.step1.bookingInfo.title')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.bookingInfo.bookingNumber')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.bookingInfo.vehicleId')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

        {/* Tenant Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            {t('protocol.step1.tenantInfo.title')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.tenantInfo.name')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.tenantInfo.email')}
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.tenantInfo.address')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.tenantInfo.telephone')}
                </label>
                <input
                  type="tel"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

        {/* Landlord Information */}
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>
            {t('protocol.step1.landlordInfo.title')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.landlordInfo.name')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.landlordInfo.email')}
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.landlordInfo.address')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                  {t('protocol.step1.landlordInfo.telephone')}
                </label>
                <input
                  type="tel"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: 'flex-end' }}>
        {!isFirstStep && (
          <Button
            variant="outlined"
            onClick={onPrevious}
            sx={{ minWidth: '100px' }}
          >
            Previous
          </Button>
        )}
        <Button
          variant="contained"
          onClick={onNext}
          sx={{ minWidth: '100px' }}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default Step1; 