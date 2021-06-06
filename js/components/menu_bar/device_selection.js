import React, { useEffect } from 'react'
import { gotDevices } from '../../utils/audio_utils';

const DeviceSelection = ({ deviceInfos }) => {
  useEffect(() => {
    if (deviceInfos)
      console.log(deviceInfos);
      gotDevices(deviceInfos);
  }, [])

  return <div className="outputSelector">
    <label>請選擇音頻輸出設備:&nbsp;</label>
    <select></select>
  </div>
}

export default DeviceSelection;