import React from 'react'
import { useMediaQuery } from 'react-responsive'
import cls from './Header.module.scss'
import logo from '../assets/logo.png'
//@ts-ignore
import BurgerMenu from './BurgerMenu'


const Header: React.FC = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    return (
        <div className={cls.header}>
            <div className={cls.headerLogo}>
                <img src={logo} alt="logo_img" />
            </div>
            {isDesktopOrLaptop
                ? <nav className={cls.headerMenu}>
                    <ul className={cls.headerList}>
                        <li>Главная</li>
                        <li>Технология</li>
                        <li>График полетов</li>
                        <li>Гарантии</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
                : <BurgerMenu />
            }
        </div>
    )
}

export default Header