import React from 'react'
import AboutMe from '../components/aboutmy/AboutMe';
import Front from '../components/aboutmy/Front';
import Skill from '../components/main/Skill';
import Training from '../components/aboutmy/Training';
import Footer from '../components/main/Footer';
import BlokRightViolet from '../components/main/BlokRightViolet';
import BlockRightTextMy from '../components/aboutmy/BlockRightTextMy';


const AboutMy = () => {
  return (
    <div className='GridCenter'>
      <div className='FlexCenter'>
        <AboutMe />
        <Front />
        <Skill text='Образование' /> 
        <Training />
        <Footer />
      </div>
      <BlokRightViolet />
      <BlockRightTextMy />
    </div>
  )
}

export default AboutMy;