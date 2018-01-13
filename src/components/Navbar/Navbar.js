import React from 'react'
import Link from 'gatsby-link'

import StyledNavContainer from './StyledNavContainer'
import logoImage from './images/bh_logo_square.jpg'

const Navbar = () => (
  <StyledNavContainer>
    <Link to='/' id='brand'><img src={logoImage} alt='Bill Hefty logo' /></Link>
    <Link to='/' id='home' className='button'><span>Home</span></Link>
    <Link to='/projects' id='blog' className='button'><span>Projects</span></Link>
    <Link to='/blog' id='projects' className='button'><span>Blog</span></Link>
  </StyledNavContainer>
)

export default Navbar
