import React, { useEffect, useState } from 'react';
import style from '../Third/Third.module.css';

const Third = () => {
  const [num, setNum] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if(num !== 0) {
        setNum((prev) => prev-1)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  },[num])

  return (
    <div className={style.third}>{num > 0 ? num : 'Время вышло'}</div>
  )
}

export default Third;