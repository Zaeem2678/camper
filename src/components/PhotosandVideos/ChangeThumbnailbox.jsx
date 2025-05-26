import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

export default function ChangeThumbnailDialog({ open, onClose, video }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Change Thumbnail</DialogTitle>
      <DialogContent>
        <Typography variant="body2">
          You can implement thumbnail upload logic here for <b>{video.title}</b>.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
