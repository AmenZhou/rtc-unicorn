import React, { useRef, useState } from 'react'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const SettingButton = withStyles((theme) => ({
  root: {
    display: 'flex',
    width:   '7em',
    height:  '100%'
  },
}))(Button);

const MyPopover = ({ buttonText, children, ButtonIconComponent }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const buttonRef = useRef(null);

  const handleClick = _ => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <div>
    <SettingButton
      size="medium"
      aria-describedby="simple-popover"
      variant="contained"
      color="primary"
      onClick={handleClick}
      ref={buttonRef}
    >
      <ButtonIconComponent />
      {buttonText}
    </SettingButton>
    <Popover
      id="simple-popover"
      open={open}
      anchorEl={buttonRef.current}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Typography className={classes.typography} component={'div'}>
        {children}
      </Typography>
    </Popover>
  </div>
}

export default MyPopover;
