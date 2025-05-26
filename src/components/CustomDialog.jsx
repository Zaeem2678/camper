import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CustomDialog = ({ open, onClose, title, message, type = 'success' }) => {
  const isSuccess = type === 'success';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          px: 2,
          py: 1.5,
          minWidth: { xs: 280, sm: 400 },
          textAlign: 'center',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {isSuccess ? (
          <CheckCircleIcon sx={{ fontSize: 50, color: 'green' }} />
        ) : (
          <ErrorOutlineIcon sx={{ fontSize: 50, color: 'red' }} />
        )}
      </Box>

      <DialogTitle sx={{ fontWeight: 600, fontSize: 22, mt: 1 }}>
        {title}
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ fontSize: 16, color: 'text.secondary' }}>
          {message}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          color={isSuccess ? 'primary' : 'error'}
          sx={{ textTransform: 'none', px: 4, py: 1 }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
