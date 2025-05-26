import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

const MembersHeader = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ fontWeight: 600, fontSize: 15, color: '#222' }}>{t('members.header.allMembers')}</Box>
        <Box sx={{ fontSize: 15, background: '#f5f5f5', color: '#222', borderRadius: 2, px: 1.5, py: 0.2, fontWeight: 500 }}>7</Box>
      </Box>
      <Box sx={{ height: 3, background: '#ffa726', borderRadius: 2, width: 120, mt: 0.5 }} />
    </Box>
  );
};

export default MembersHeader; 