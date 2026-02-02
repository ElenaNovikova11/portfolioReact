import React from 'react'
import User from '../components/main/User'
import Skill from '../components/main/Skill'
import MySkill from '../components/main/MySkill'
import Programms from '../components/main/Programms'
import Motivation from '../components/main/Motivation'
import Footer from '../components/main/Footer'
import BlokRightViolet from '../components/main/BlokRightViolet'
import BlokRightText from '../components/main/BlokRightText'

const Home = () => {
  return (
 <>
   <div className='GridCenter'>
          <div className='FlexCenter'>
            <User />
            <Skill text='Мои способности' />
            <MySkill />
            <Skill text='Опыт работы в программах' />
            <Programms />
            <Skill text='Данный блок именно для тебя' />
            <Motivation />
            <Footer />
          </div>
          <BlokRightViolet />
          <BlokRightText />
        </div>
 </>
  )
}

export default Home;