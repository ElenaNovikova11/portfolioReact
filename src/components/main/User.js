import React from 'react'
import '../../style/main/User.css';
import MyPhoto from "../../img/img/myPhoto/my_photo994.png";

const User = () => {
    return (
        <section className="user center930">
            <div className="user-info">
                <h1 className="user-info-head ">Привет!
                    Меня зовут Елена Новикова, <br />я <span className="span-color-violet">графический дизайнер</span> и
                    <br /> <span className="span-color-violet">frontend-разработчик (JUNIOR)</span>

                </h1>
                <p className="user-info-text">
                    Здесь вы сможете узнать больше о моих проектах и навыках в области веб-разработки. <br /> <br />Если вы
                    ищете талантливого специалиста для работы над своими проектами, я буду рада присоединиться к вашей
                    команде.</p>
            </div>
            <div>
                <img className="user-img" src={MyPhoto} alt="center_photo" />

            </div>
           
            
        </section>
    )
}

export default User;