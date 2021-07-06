import React from 'react';
import style from '../Second/Second.module.css';

const Second = () => {
  const time = new Date();
  return (
    <div className={style.second}>
     время на момент загрузки {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </div>
  )
}

export default Second;