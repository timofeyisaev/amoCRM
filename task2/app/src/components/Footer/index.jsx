import React from 'react';
import s from './style.module.css'


export default function Footer() {
  return (
    <div className={s.footerContainer}>
        <div className={s.footerItem}>
            <h3>О компании</h3>
            <p>Партнерская программа</p>
            <p>Вакансии</p>
        </div>
        <div className={s.menu}>
        <div className={s.footerItem} >
            <h3>Меню</h3>
            <p>Расчёт стоимости</p>
            <p>Услуги</p>
            <p>Виджеты</p>
            <p>Интеграции</p>
            <p>Наши клиенты</p>
        </div>
        <div className={s.footerItem} id={s.faq}>
            <h3 className={s.plug}>Заглушка? Да, это заглушка</h3>
            <p>Кейсы</p>
            <p>Благодарственные письма</p>
            <p>Сертификаты</p>
            <p>Блог на YouTube</p>
            <p>Вопрос / Ответ</p>
        </div>
        </div>
        <div className={s.contacts}>
            <h3>Контакты</h3>
            <p>+7 555 555 55 55</p>
            <div className={s.icons}>
                <div className={s.telegram}></div>
                <div className={s.phoneIcon}></div>
                <div className={s.whatsapp}></div>
            </div>
            <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
        
        

    </div>
  )
}
