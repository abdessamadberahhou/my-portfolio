import React from 'react'
import './navbar.css'
import {TiHomeOutline} from 'react-icons/ti'
import {IoPersonCircleOutline, IoBookOutline, } from 'react-icons/io5'
import {MdOutlineWorkOutline, MdOutlinePermContactCalendar} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const[active, setActive] = useState('#')
  return (
    <nav className='navbar'>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''} title='home'><TiHomeOutline /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><IoPersonCircleOutline title='about me' /></a>
      <a href="#experiences" onClick={() => setActive('#experiences')} className={active === '#experiences' ? 'active' : ''}><MdOutlineWorkOutline title='experiences'/></a>
      <a href="#studies" onClick={() => setActive('#studies')} className={active === '#studies' ? 'active' : ''}><IoBookOutline title='studies'/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar title='contact me' /></a>
    </nav>
  )
}

export default Navbar