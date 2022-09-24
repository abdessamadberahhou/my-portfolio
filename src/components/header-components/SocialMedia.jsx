import React from 'react'
import {ImLinkedin} from 'react-icons/im' 
import {ImGithub} from 'react-icons/im' 
import {AiOutlineInstagram} from 'react-icons/ai' 
const SocialMedia = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/abdessamad-berahhou-761b36232/"><ImLinkedin size={30}/></a>
        <a href="https://github.com/abdessamadberahhou"><ImGithub size={30}/></a>
        <a href="https://www.instagram.com/abdessamad_berahhou"><AiOutlineInstagram size={30}/></a>
    </div>
  )
}

export default SocialMedia