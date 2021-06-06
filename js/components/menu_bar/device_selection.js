import React, { useEffect } from 'react'
import { gotDevices } from '../../utils/audio_utils';

const DeviceSelection = ({ deviceInfos, setCurrentDeviceId, currentDeviceId }) => {
  useEffect(() => {
    if (deviceInfos)
      console.log(deviceInfos);
      gotDevices(deviceInfos);
  }, [])

  const changeHandler = e => {
    setCurrentDeviceId(e.target.value);
  }

  return <div className="outputSelector">
    <label>請選擇音頻輸出設備:&nbsp;</label>
    <select onChange={changeHandler} value={currentDeviceId}></select>
  </div>
}

export default DeviceSelection;