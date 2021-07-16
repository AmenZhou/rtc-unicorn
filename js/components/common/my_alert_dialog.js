import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const MyAlertDialog = ({ title, body, open: defaultOpen, buttonText, children, buttonHandler }) => {
  const [open, setOpen] = React.useState(defaultOpen);

  const handleClose = () => {
    setOpen(false);
    if (buttonHandler)
      buttonHandler();
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" component={'div'}>
            {body}
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            buttonText && <Button onClick={handleClose} color="primary">
              {buttonText}
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyAlertDialog;
