import React from 'react'
import './information.css'
import myPicture from '../../assets/aboutmepicture.jpg'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { AiOutlineProject } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import moment from 'moment'

const Information = () => {
  var now = moment();
  var then = moment("04/09/2025 14:20:30");
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about_container" >
        <div className="about_photo">
          <div className="blue_square">

          </div>
          <div className="my_picture">
            <img src={myPicture} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about_header">
            <div className='card'>
              <div className="icon">
                <HiOutlineBadgeCheck />
              </div>
              <div className="content">
                <h5><b>Experiences</b></h5>
                <h6>{"+" + moment("20220601").fromNow().split(' ')[0] + " " + moment("20220601").fromNow().split(' ')[1]}</h6>
              </div>
            </div>
            <div className='card'>
              <div className="icon">
                <AiOutlineProject />
              </div>
              <div className="content">
                <h5><b>Projects</b></h5>
                <h6>+5</h6>
              </div>
            </div>
            <div className='card'>
              <div className="icon">
                <FaAward />
              </div>
              <div className="content">
                <h5><b>Certifications</b></h5>
                <h6>+4</h6>
              </div>
            </div>
          </div>
          <div className="describe_me">
            <p>
            Flutter/Laravel developer, I also have development experience on Flutter frameworks. high level in mathematics which allows me to acquire advanced reasoning methods and work rigour.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
