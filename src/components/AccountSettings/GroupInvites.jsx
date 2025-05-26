import React, { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from 'react-i18next';
import Infocomp from './Infocomp';

const GroupInvites = () => {
  const { t } = useTranslation();
  const [restrictInvites, setRestrictInvites] = useState(false);

  // Dialog control states
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    setRestrictInvites(event.target.checked);
  };

  const handleSave = () => {
    setConfirmDialogOpen(true); // Open confirm dialog
  };

  const handleConfirmClose = () => {
    setConfirmDialogOpen(false);
  };

  const handleConfirmSave = () => {
    setConfirmDialogOpen(false);
    setSuccessDialogOpen(true); // Show success dialog
    // You can place save logic here
  };

  const handleSuccessClose = () => {
    setSuccessDialogOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        {t('account.groupInvites.title')}
      </Typography>

      <Box>
        <Infocomp text="Currently every member of the community can invite you to join their groups. Optionally, you may restrict group invites to your connections only." />
      </Box>

      <FormControlLabel
        control={<Checkbox checked={restrictInvites} onChange={handleCheckboxChange} />}
        label="Restrict Group invites to members who are connected."
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleSave}
        sx={{ px: 6, py: 1, color: '#fff', bgcolor: '#ffa600', '&:hover': { bgcolor: '#ff8800' } }}
      >
        Save
      </Button>

      {/* Confirm Dialog */}
      <Dialog open={confirmDialogOpen} onClose={handleConfirmClose}>
        <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Confirm Group Invite Settings Update
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 1, fontSize: '1rem' }}>
            Are you sure you want to update your group invite settings?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Button onClick={handleConfirmClose} variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSave}
            variant="contained"
            sx={{ bgcolor: '#ffa600', '&:hover': { bgcolor: '#ff8800' } }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onClose={handleSuccessClose}>
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'green',
          }}
        >
          <CheckCircleIcon fontSize="large" />
          Success
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 1, fontSize: '1rem' }}>
            Your group invite preferences have been saved successfully.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Button
            onClick={handleSuccessClose}
            variant="contained"
            sx={{ bgcolor: '#ffa600', '&:hover': { bgcolor: '#ff8800' } }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GroupInvites;
