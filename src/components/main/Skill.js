import '../../style/main/Skill.css';
import React from 'react'

const Skill = (TextSkill) => {
    
  return (
    <div className='skill'>{TextSkill.text}</div>
  )
}

export default Skill;