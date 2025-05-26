import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import ActionButtons from '../CreatCamper/ActionsButtons';
import { useTranslation } from 'react-i18next';

const Step5 = ({ onNext, onPrevious, isFirstStep, isLastStep }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {t('protocol.step5.title')}
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
          {t('protocol.step5.vehicleOptions.title')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Stove and Refrigerator */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.features.stove')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="yes">{t('protocol.step5.options.yes')}</MenuItem>
                  <MenuItem value="no">{t('protocol.step5.options.no')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Refrigerator */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.features.refrigerator')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="yes">{t('protocol.step5.options.yes')}</MenuItem>
                  <MenuItem value="no">{t('protocol.step5.options.no')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Vehicle Option */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '14px', mb: 1 }}>
                {t('protocol.step5.vehicleOptions.vehicleOption')}
              </Typography>
              <FormControl fullWidth size="small">
                <Select
                  defaultValue=""
                  sx={{ fontSize: '14px' }}
                >
                  <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                  <MenuItem value="option1">{t('protocol.step5.vehicleOptions.option1')}</MenuItem>
                  <MenuItem value="option2">{t('protocol.step5.vehicleOptions.option2')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>

          {/* Additional Features */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>
                  {t('protocol.step5.features.waterConnection')}
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                    <MenuItem value="yes">{t('protocol.step5.options.yes')}</MenuItem>
                    <MenuItem value="no">{t('protocol.step5.options.no')}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>
                  {t('protocol.step5.features.hotWater')}
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                    <MenuItem value="yes">{t('protocol.step5.options.yes')}</MenuItem>
                    <MenuItem value="no">{t('protocol.step5.options.no')}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>
                  {t('protocol.step5.features.bikeRack')}
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                    <MenuItem value="yes">{t('protocol.step5.options.yes')}</MenuItem>
                    <MenuItem value="no">{t('protocol.step5.options.no')}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }} />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '14px', mb: 1 }}>
                  {t('protocol.step5.features.winterSuitable')}
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    defaultValue=""
                    sx={{ fontSize: '14px' }}
                  >
                    <MenuItem value="">{t('protocol.step5.vehicleOptions.selectOption')}</MenuItem>
                    <MenuItem value="yes">{t('protocol.step5.options.yes')}</MenuItem>
                    <MenuItem value="no">{t('protocol.step5.options.no')}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }} />
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

export default Step5; 