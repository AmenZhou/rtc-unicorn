import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import SideBar from './side_bar'
import VoiceTypeSelection from './voice_type_selection'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const MenuBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
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
          <Typography className={classes.typography}>
            <DeviceSelection deviceInfos={props.deviceInfos} />
            <VoiceTypeSelection {...props} />
          </Typography>
        </Popover>
      </div>
    </div>
    <SideBar {...props} />
  </Fragment>
}

export default MenuBar;