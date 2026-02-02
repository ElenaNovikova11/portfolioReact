import React from 'react'
import '../../style/main/User.css';
import MyPhoto from "../../img/img/myPhoto/my_photo994.png";

const User = () => {
    return (
        <section class="user center930">
            <div class="user-info">
                <h1 class="user-info-head ">Привет!
                    Меня зовут Елена Новикова, <br />я <span class="span-color-violet">графический дизайнер</span> и
                    <br /> <span class="span-color-violet">frontend-разработчик (JUNIOR)</span>

                </h1>
                <p class="user-info-text">
                    Здесь вы сможете узнать больше о моих проектах и навыках в области веб-разработки. <br /> <br />Если вы
                    ищете талантливого специалиста для работы над своими проектами, я буду рада присоединиться к вашей
                    команде.</p>
            </div>
            <div>
                <img class="user-img" src={MyPhoto} alt="center_photo" />

            </div>
           
            
        </section>
    )
}

export default User;