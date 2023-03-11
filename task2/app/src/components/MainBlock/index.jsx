import React from 'react';
import s from './style.module.css';

export default function MainBlock() {
  return (
    <div className={s.mainBlockContainer}>
        <div className={s.redBall}></div>
        <div className={s.redBallSmall}></div>
        <div className={s.redLight}></div>
        <div className={s.leftBlock}>
            <p className={s.leftInscrOne}>Зарабатывайте больше</p>
            <p className={s.leftInscrTwo}>с WELBEX</p>
            <p className={s.leftInscrThree}>Развиваем и контролируем продажи за вас</p>
        </div>

        <div className={s.rightBlock} >
            <div className={s.rightInscrOne}>Вместе с  <span>бесплатной консультацией</span> мы дарим:</div>
            <div className={s.rightGrid}>
                <div className={s.gridItem}>
                    <h3>Виджеты</h3>
                    <p>30 готовых решений</p>
                </div>
                <div className={s.gridItem}>
                    <h3>DASHBOARD</h3>
                    <p>с показателями вашего бизнеса</p>
                </div>
                <div className={s.gridItem}>
                    <h3>Skype Аудит</h3>
                    <p>отдела продажи CRM системы</p>
                </div>
                <div className={s.gridItem}>
                    <h3 className={s.month}>35 дней</h3>
                    <p>использования CRM</p>
                </div>
            </div>
            <button>Получить консультацию</button>
        </div>
        
    </div>

  )
}
