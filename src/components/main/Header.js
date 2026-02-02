import React, { useState } from 'react';
import '../../style/main/Header.css';
import Menu from '../../img/img/menu.png';
import Max from '../../img/img/max.png';
import Telegram from '../../img/img/telegram.png';
import Vk from '../../img/img/vk-green.png';
import { motion } from 'framer-motion';
import Close from '../../img/img/close.png';
import { NavLink } from 'react-router-dom';



function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);


    
    return (

        <header className="header">
            <div className='header-menu-img-wrapper'>
                <img src={Menu} alt='Menu иконка изображения' className='header-menu-img' onClick={() => setToggleMenu(true)} />
            </div>
            <nav className="header-nav">
                <ul className='header-ul'>
                    <li><NavLink to='/' end>ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to='/AboutMy' >ОБО МНЕ</NavLink></li>
                    <li><NavLink to='/Portfolio' >ПОРТФОЛИО</NavLink></li>
                    <li><NavLink to='/Contacts' >КОНТАКТЫ</NavLink></li>
                </ul>
            </nav>
            <div className="header-network heartbeat">

                <a href="https://max.ru/u/f9LHodD0cOKbxiOjjLBmEYKZTB1MaFQF43sNhuBFLjdgjYVePOmoIQg1V-E"><img
                    src={Max} alt="max изображение иконки" /></a>
                <a href="https://t.me/ElenaNovikova11"><img src={Telegram} alt="telegram изображение иконки"
                /></a>
                <a href="https://vk.com/elenanovikova11"><img src={Vk} alt="vk изображение иконки"
                /></a>
            </div>
            {toggleMenu && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ duration: 0.3 }}
                    className='header-mobile'
                >
                    <div>
                        <img src={Close} alt='Close иконка изображения' className='header-mobile-close-img' onClick={() => setToggleMenu(false)} />
                    </div>
                    <nav>
                        <ul className='header-mobile-ul'  onClick={() => setToggleMenu(false)}>
                            <li><NavLink to='/' >ГЛАВНАЯ</NavLink></li>
                            <li><NavLink to='/AboutMy' >ОБО МНЕ</NavLink></li>
                            <li><NavLink to='/Portfolio'>ПОРТФОЛИО</NavLink></li>
                            <li><NavLink to='/Contacts'>КОНТАКТЫ</NavLink></li>
                        </ul>
                    </nav>
                    <div className='header-mobile-icons'>
                        <img src={Max} alt="max изображение иконки" />
                        <img src={Telegram} alt="telegram изображение иконки" />
                        <img src={Vk} alt="vk изображение иконки" />
                    </div>
                </motion.div>
            )
            }
        </header>

    );
}

export default Header;

