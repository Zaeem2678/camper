import React, { useState } from 'react';
import { Box, Typography, Paper, Checkbox, FormControlLabel, Button, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Infocomp from './Infocomp';

const GroupInvites = () => {
  const { t } = useTranslation();
  const [restrictInvites, setRestrictInvites] = useState(false);

  const handleCheckboxChange = (event) => {
    setRestrictInvites(event.target.checked);
  };

  const handleSave = () => {
    // Save logic here
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        {t('account.groupInvites.title')}
      </Typography>
      <Box sx={{  }}>
    <Infocomp text="Currently every member of the community can invite you to join their groups. Optionally, you may restrict group invites to your connections only." />
       
      </Box>
      <FormControlLabel
          control={<Checkbox checked={restrictInvites} onChange={handleCheckboxChange} />}
          label="Restrict Group invites to members who are connected."
          sx={{ mb: 2 }}
        />
        <br></br>
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ px: 6, py: 1,color:"#fff" }}>
          Save
        </Button>
    </Box>
  );
};

export default GroupInvites; 