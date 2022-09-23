import React, { memo } from 'react'
import style from './Message.module.css';

function Message({ label }) {

  return (
    <div className={style["container-message"]} >
      {label}
    </div>
  )
}

export default memo(Message)