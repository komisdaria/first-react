import React from 'react';
import style from '../First/First.module.css';

const First = () => {
  const random = Math.floor(Math.random() * 11)

  return (
    <div className={style.first}>
     Рандомное число: {random}
    </div>
  )
}

export default First;