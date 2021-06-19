import React from 'react'
import compact from 'lodash/compact';
import { setDeviceIdToCookie } from '../../utils/cookie_utils';
import { randomKey } from '../../utils/common_utils';

const DeviceSelection = ({ deviceInfos, setCurrentDeviceId, currentDeviceId }) => {
  const changeHandler = e => {
    setCurrentDeviceId(e.target.value);
    setDeviceIdToCookie(e.target.value);
  }

  const deviceOptions = () => {
    const options = deviceInfos.map(deviceInfo => {
      if (deviceInfo.kind === 'audiooutput') {
        console.info('Found audio output device: ', deviceInfo.label);
        const text = deviceInfo.label || `speaker ${masterOutputSelector.length + 1}`;

        return <option value={deviceInfo.deviceId} key={randomKey()}>{text}</option>;
      } else {
        console.log('Found non audio output device: ', deviceInfo.label);
      }
    });

    return compact(options);
  }

  return <div className="outputSelector">
    <label>請選擇音頻輸出設備:&nbsp;</label>
    <select onChange={changeHandler} value={currentDeviceId}>
      {deviceOptions()}
    </select>
  </div>
}

export default DeviceSelection;