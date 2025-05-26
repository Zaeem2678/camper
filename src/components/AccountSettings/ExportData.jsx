import React from 'react';
import { Box, Typography, Paper, Checkbox, FormControlLabel, Button, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Infocomp from './Infocomp';

const ExportData = () => {
  const { t } = useTranslation();
 

  const handleSave = () => {
    // Save logic here
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        {t('account.exportData.title')}
      </Typography>
     
      <Infocomp text={t('account.exportData.description')} />
       
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ px: 3, py: 1, color: "#fff" }}>
        {t('account.exportData.requestExport')}
      </Button>
    </Box>
  );
};

export default ExportData; 