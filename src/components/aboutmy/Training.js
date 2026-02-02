import '../../style/aboutmy/Training.css';
import React from 'react'
import Certificate1 from '../../img/img_about_me/certificate/certificate1.jpg';
import Certificate2 from '../../img/img_about_me/certificate/certificate2.jpg';
import Certificate3 from '../../img/img_about_me/certificate/certificate3.jpg';
import Certificate4 from '../../img/img_about_me/certificate/certificate4.jpg';
import Certificate5 from '../../img/img_about_me/certificate/certificate5.jpg';
import Certificate6 from '../../img/img_about_me/certificate/certificate6.jpg';
import Certificate7 from '../../img/img_about_me/certificate/certificate7.jpg';
import Certificate8 from '../../img/img_about_me/certificate/certificate8.jpg';
import Certificate9 from '../../img/img_about_me/certificate/certificate9.jpg';
import Certificate10 from '../../img/img_about_me/certificate/certificate10.jpg';
import Certificate11 from '../../img/img_about_me/certificate/certificate11.jpg';
import Certificate12 from '../../img/img_about_me/certificate/certificate12.jpg';

const Training = () => {
  return (
    <div>
      <div class="user__fron__skill1">
        <span class="span-color-violet">Высшее: </span>Челябинский государственный университет
        <br /><span class="span-color-green">Специальность: </span>Бизнес-информатика
      </div>
      <div class="user__fron__skill1">
        <span class="span-color-violet">Средне-специальное: </span>Южно-Уральский государственный
        колледж
        <br /><span class="span-color-green">Специальность: </span>Прикладная информатика в экономике
      </div>
      <div class="user__fron__skill1">
        <div class="span-color-green">Дополнительное образование на платформе GeekBrains:</div>
        <div class="certificate">
          <img class="certificate__img" src={Certificate1} alt="сертификат" />
          <img class="certificate__img" src={Certificate2} alt="сертификат" />
          <img class="certificate__img" src={Certificate3} alt="сертификат" />
          <img class="certificate__img" src={Certificate4} alt="сертификат" />
          <img class="certificate__img" src={Certificate5} alt="сертификат" />
          <img class="certificate__img" src={Certificate6} alt="сертификат" />
        </div>
      </div>
      <div class="user__fron__skill1">
        GeekBrains (в процессе обучения) <br />
        <span class="span-color-violet">Специальность: </span>Разработчик-программист
        <br /><span class="span-color-green">Направление: </span>frontend-разработчик
        <br /><span class="span-color-violet">Несколько сертификатов с курса: </span>
        <div class="certificate">
        <img class="certificate__img" src={Certificate7} alt="сертификат" />
        <img class="certificate__img" src={Certificate8} alt="сертификат" />
        <img class="certificate__img" src={Certificate9} alt="сертификат" />
        <img class="certificate__img" src={Certificate10} alt="сертификат" />
        <img class="certificate__img" src={Certificate11} alt="сертификат" />
        <img class="certificate__img" src={Certificate12} alt="сертификат" />
      </div>
    </div>
    </div>
  )
}

export default Training;