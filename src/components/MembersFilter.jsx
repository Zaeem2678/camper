import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/ViewList';

const MembersFilter = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Select size="small" value="recent" sx={{ minWidth: 150, background: '#fff', borderRadius: 1 }}>
        <MenuItem value="recent">{t('members.filter.recentlyActive')}</MenuItem>
        <MenuItem value="new">{t('members.filter.newest')}</MenuItem>
        <MenuItem value="popular">{t('members.filter.popular')}</MenuItem>
      </Select>
      <IconButton color="primary">
        <GridViewIcon />
      </IconButton>
      <IconButton>
        <ListIcon />
      </IconButton>
    </Box>
  );
};

export default MembersFilter; 