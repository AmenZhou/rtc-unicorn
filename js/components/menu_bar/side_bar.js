import React from 'react'
import AudioControl from './audio_control';

const SideBar = (props) => (
  <div className='side-bar'>
    <AudioControl {...props} />
  </div>
)

export default SideBar;
