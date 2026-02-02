import '../../style/aboutmy/AboutMe.css';
import React from 'react'
import CenterMy from '../../img/img_about_me/centerMy.jpg';



const AboutMe = () => {
  return (
    <section class="aboutMe">
                <div class="aboutMe-text" >
                    <span class="span-color span-size">ОСНОВНЫЕ ДАННЫЕ</span>
                    <br />
                    ЕЛЕНА НОВИКОВА
                    <br />
                    <span class="span-color-violet span-color-violet-sm">ДАТА РОЖДЕНИЯ: </span>26.09.1990г.
                    <br />
                    <span class="span-color-violet span-color-violet-sm">СЕМЕЙНОЕ ПОЛОЖЕНИЕ: </span>ЗАМУЖЕМ
                    <br />
                    <span class="span-color-violet span-color-violet-sm">ДЕТИ: </span>СЫН
                    <br />
                    <span class="span-color-violet span-color-violet-sm">МЕСТО ПРОЖИВАНИЯ: </span>ЧЕЛЯБИНСК
                </div>
                <div>
                    <img class="aboutMe-my" src={CenterMy} alt="Новикова Елена центральное фото" />
                </div>
            </section>
  )
}

export default AboutMe;