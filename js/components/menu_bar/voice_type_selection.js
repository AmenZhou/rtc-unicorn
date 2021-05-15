import React from 'react';

const VoiceTypeSelection = ({ voiceType, setVoiceType }) => {
  const changeHandler = e => {
    setVoiceType(e.target.value);
  }

  return <div className="voice-type">
    <label for="voice_type">語音類型:&nbsp;</label>
    <select id="voice_type" value={voiceType} onChange={changeHandler}>
      <option value="MALE">男聲</option>
      <option value="FEMALE">女聲</option>
    </select>
  </div>
}

export default VoiceTypeSelection;