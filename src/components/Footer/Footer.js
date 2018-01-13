import React from 'react'

import StyledFooter from './StyledFooter'
import SocialStrip from '../SocialStrip/SocialStrip'

const Footer = () => (
  <StyledFooter>
    <span className='copyright'>made by Bill Hefty &copy; 2018</span>
    <SocialStrip />
  </StyledFooter>
)

export default Footer
