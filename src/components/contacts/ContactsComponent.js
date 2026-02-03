import React from 'react'
import '../../style/contacts/ContactsComponent.css'
import Max from '../../img/img/max.png';
import Telegram from '../../img/img/telegram.png';
import Vk from '../../img/img/vk-green.png';

const ContactsComponent = () => {
    return (
        <div className='contact'>
            <h1>Рассматриваю удаленную работу</h1>

            <p className='contact-text'>Контакты:</p>
            <div className='contact-data'>
              <p>8 912 474 25 78</p>
            <p>elenanovikovawork@gmail.com</p>   
            </div>
           


            <div className="header-network-contact ">

                <a href="https://max.ru/u/f9LHodD0cOKbxiOjjLBmEYKZTB1MaFQF43sNhuBFLjdgjYVePOmoIQg1V-E"><img
                    src={Max} alt="max изображение иконки" /></a>
                <a href="https://t.me/ElenaNovikova11"><img src={Telegram} alt="telegram изображение иконки"
                /></a>
                <a href="https://vk.com/elenanovikova11"><img src={Vk} alt="vk изображение иконки"
                /></a>
            </div>
        </div>
    )
}

export default ContactsComponent;