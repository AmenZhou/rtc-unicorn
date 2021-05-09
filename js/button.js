import React from 'react'

const Button = ({ key, src, text, onClick }) => {
  return <div className="box" key={key} >
    <button className="phrase">{text}</button>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button;