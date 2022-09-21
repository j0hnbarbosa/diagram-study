import React, { memo } from 'react'
import style from './Message.module.css';

function Message({ label, currentCoordenates }) {
  console.log("currentCoordenates", currentCoordenates)
  const {
    sourceX,
    sourceY
  } = currentCoordenates;

  return (
    <div className={style["container-message"]} style={{ transform: `translate(${sourceX}px, ${sourceY}px)` }}>
      {label}
    </div>
  )
}

export default memo(Message)