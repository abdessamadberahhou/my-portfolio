import React from 'react'
import resume from '../../assets/enresume.pdf'

const HeaderButton = () => {
  return (
    <div className='header__buttons'>
        <a href={resume} className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Contact me</a>
    </div>
  )
}

export default HeaderButton