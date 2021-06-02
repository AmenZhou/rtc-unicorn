import React from 'react'
import AudioControl from './audio_control';
import GroupSelection from './group_selection';

const SideBar = (props) => (
  <div className='side-bar'>
    {/* <GroupSelection {...props} /> */}
    <AudioControl currentAudio={props.currentAudio} />
  </div>
)

export default SideBar;