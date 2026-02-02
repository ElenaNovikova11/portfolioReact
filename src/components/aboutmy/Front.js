import '../../style/aboutmy/Front.css';
import React from 'react'
import Diploma from '../../img/img_about_me/diplom.jpg'

const Front = () => {
  return (
    <section class="front slide-in-blurred-bottom">

      <div class="front-left">
        Я - <span class="span-color-green ">
          ГРАФИЧЕСКИЙ ДИЗАЙНЕР</span> и начинающий <span
            class="span-color-green">FRONTEND-РАЗРАБОТЧИК</span>.
        <br />
        <br />Опыт работы графическим дизайнером:
        <ul class="padding">
          <li>создаю портреты на заказ</li>
          <li>прайс-листы</li>
          <li>визитки и другие красивые картинки.</li>
        </ul>
        Опыт работы frontend-разработчиком:
        <ul class="padding">
          <li>первый полноценный проект - мой сайт, написанный на REACT</li>
        </ul>
      </div>
      <div class="front-center">
        <ul>
          <li><span class="bold">позитивный</span> человек</li><br />
          <li>люблю чтобы было все четко и <span class="bold">красиво</span></li><br />
          <li>усидчивая</li><br />
          <li>люблю работать с мелкими деталями</li><br />
          <li> <span class="bold">ответственная</span></li><br />
          <li>не рисую от руки, только графическая графика</li>
        </ul>
      </div>
      <div class="front-right">
        <div>
          В настоящее время работаю в спортивной школе олимпийского резерва по волейболу г. Челябинска, должность "Программист". <span class="span-color-green">
            Введение сайта школы и социальных сетей, отвественная за работу компьютеров в учреждение.
            <br /><br /></span>
          Являюсь пебедителем в конкурсе <span class="span-color-green">"Лучший специалист по ведению
            официальных пабликов государственных(муниципальных) учреждений спорта Челябинской
            области в
            социальных сетях в 2025 году"</span>.
        </div>
        <div class="front-imgblock">
          <img class="front-img2" src={Diploma} alt="сертификат" />
        </div>
      </div>
    </section>
  )
}

export default Front;