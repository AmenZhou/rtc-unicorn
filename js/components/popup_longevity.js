import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PopupLongevity = ({ buttonTextOpen, buttonTextClose, children }) => {
  const [open, setOpen] = useState(false);
  const handleClick = _ => {
    setOpen(!open);
  }

  return <div>
    <Button aria-describedby="simple-popover" variant="contained" color="primary" onClick={handleClick}>
      {open ? buttonTextClose : buttonTextOpen}
    </Button>
    <Typography className={open ? "popup-open" : "popup-close"} component={'div'}>
      {children}
    </Typography>
  </div>
}

export default PopupLongevity;