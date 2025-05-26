import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';

const MembersSearch = () => {
  const { t } = useTranslation();
  
  return (
    <TextField
      size="small"
      variant="outlined"
      placeholder={t('members.search.placeholder')}
      sx={{ width: 240, background: '#fff', borderRadius: 1 }}
      InputProps={{ style: { borderRadius: 8 } }}
    />
  );
};

export default MembersSearch; 