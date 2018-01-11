import React from 'react'

import StyledSection from './StyledSection'
import profileImage from './images/profile_pic.jpg'

const About = () => (
  <StyledSection>
    <div className='container'>
      <img src={profileImage} alt='Bill Hefty Picture' />
      <div>
        <h1>About me</h1>
        <p>
            My name is Bill Hefty and I'm a Web Developer. Specializing in JavaScript, I strive to employ best practices in code for end users to have clean and efficient experiences. An always learning mentality is key to my passion for development, and this portfolio aims at logging some key achievements along the way. Have a look around and feel free to contact me!
        </p>
      </div>
    </div>
  </StyledSection>
)

export default About
