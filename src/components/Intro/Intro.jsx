

import React from 'react'
import './Intro.css'
import reddy1 from './reddy1.jpg'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
    
 
    <div className="introContent">
     <span className='hello'>Hello,</span>
     <span className='introText'>I'm <span className="introName">Kanni</span><br />Website Designer</span>
     <p className='introPara'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites</p>
     <Link ><button className='btn'> Hire Me</button></Link>
    </div>
    <img src={reddy1} alt='img' className='bg'/>
   </section>
  )
}

export default Intro
