import React from 'react'
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

const ConfirmDialog = ({
  open,
  onClose,
  message,
  onConfirm,
  onCancel,
  loading
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
    >
      <DialogTitle onClose={onClose}>
        Confirm action
      </DialogTitle>
      <DialogContent
        dividers
        className="text-1xl"
      >
        {message}
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => onConfirm()}
        >
          {loading ? <CircularProgress size={10} /> : 'Confirm'}
        </Button>
        <Button
          onClick={() => onCancel()}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
