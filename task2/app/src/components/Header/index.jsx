import React from 'react';
import s from './style.module.css';

export default function Header() {
  return (
    <div>
      <div className={s.purpleLight}> </div>
       <div className={s.purpleBall}>  </div>      
       <div className={s.container}>
       
            <div className={s.logoContainer}>
                <div className={s.picContainer}>
                  <div className={s.logo1}></div>
                  <div className={s.logo2}></div>
                </div>
                <p>
                Крупный интегратор CRM в Росcии и ещё 8 странах
                </p>
            </div>

            <div className={s.pages}>
                <a>Услуги</a>
                <a>Виджеты</a>
                <a>Интеграции</a>
                <a>Кейсы</a>
                <a className={s.certificates}>Сертификаты</a>
            </div>
            <div className={s.phone}>
                +7 555 555-55-55
            </div>
            <div className={s.icons}>
                <div className={s.telegram}></div>
                <div className={s.phoneIcon}></div>
                <div className={s.whatsapp}></div>
            </div>
       </div>
    </div>
  )
}
