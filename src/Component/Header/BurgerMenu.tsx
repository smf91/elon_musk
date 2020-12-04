import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import cls from './Header.module.scss'

const BurgerMenu:React.FC= () => {
    return (
        <Menu right >
            <a id="home" className={cls.menuItem} href="/">Главная</a>
            <a id="about" className={cls.menuItem} href="/about">О компании</a>
            <a id="contact" className={cls.menuItem} href="/contact">Контакты</a>
            <a id="home" className={cls.menuItem} href="/tehnology">Технологии</a>
            <a id="about" className={cls.menuItem} href="/flight_schedule">График полетов</a>
            <a id="contact" className={cls.menuItem} href="/warranty">Гарантии</a>
        </Menu>
    );
}

export default BurgerMenu