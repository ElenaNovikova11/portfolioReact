import '../../style/main/MySkill.css';
import React from 'react'

const MySkill = () => {
  return (
      <div className="skill-site-window">
                <div className="skill-site-window-block ">
                    Данный сайт сделан <span className="span-color-green ">ПОЛНОСТЬЮ МНОЙ</span>, от макета в программе FIGMA, до создания сайта в программе VS CODE (React)
                </div>
                <div className="skill-site-window-block">
                    Знания <span className="span-color-green">React, HTML, HTML5, CSS, SCSS, JavaScript</span>
                    <br />(Прохождение курсов по данному направлению)
                </div>
                <div className="skill-site-window-block">
                    Создание <span className="span-color-green">макетов сайтов</span>, портретов, эмблем, (векторная графика), визиток, посты с соц.сетях и т.п.
                </div>
                <div className="skill-site-window-block">
                    Владею компьютером на <span className="span-color-green">ОТЛИЧНОМ УРОВНЕ</span>. <br /><br />Эффективно использую
                    для решения различных задач:
                    <br />от повседневных офисных до более сложных, требующих определённых навыков.
                </div>
                <div className="skill-site-window-btn"><a href="about_me.html">ОБО МНЕ</a></div>
            </div>
  )
}

export default MySkill;