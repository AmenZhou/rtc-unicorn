import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'

const ButtonWithStyles = withStyles(_ => ({
  root: {
    display: 'flex',
    width:   '7em',
    height:  '3.5em'
  },
}))(Button)

const SettingButton = ({ setOpenSettings }) => {
  const handleClick = e => {
    setOpenSettings(true);
  }

  return <ButtonWithStyles
    size="medium"
    aria-describedby="simple-popover"
    variant="contained"
    color="primary"
    onClick={handleClick}
  >
    <SettingsIcon />
    設置
  </ButtonWithStyles>
}

export default SettingButton;
