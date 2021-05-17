import React from 'react'
import GroupSelection from './group_selection';

const SideBar = (props) => (
  <div className='side-bar'>
    <GroupSelection {...props} />
  </div>
)

export default SideBar;