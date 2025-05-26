import React from 'react';
import { Box, Typography } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step3 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step3.title')}
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
          {t('protocol.step3.vehicleCondition.title')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Mileage */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.mileage')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.km')}</span>
              </Box>
            </Box>

            {/* Fuel Tank */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.fuelTank')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.percent')}</span>
              </Box>
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Engine Oil Level */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.engineOil')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.percent')}</span>
              </Box>
            </Box>

            {/* Gas Level */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.gasLevel')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.percent')}</span>
              </Box>
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Fresh Water Tank */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.freshWater')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.percent')}</span>
              </Box>
            </Box>

            {/* Waste Water Tank */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.wasteWater')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.percent')}</span>
              </Box>
            </Box>
          </Box>

          {/* Fourth Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Tire Tread */}
            <Box sx={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                {t('protocol.step3.vehicleCondition.tireTread')}
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
                <span style={{ fontSize: '14px', color: '#666' }}>{t('protocol.step3.units.mm')}</span>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }} /> {/* Empty box for alignment */}
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

export default Step3; 