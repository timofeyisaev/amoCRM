import React from 'react';
import s from './style.module.css';

export default function Copyright() {
  return (
    <div className={s.copyrightBlock}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
    </div>
  )
}
