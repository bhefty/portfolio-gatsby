import React from 'react'

import StyledSection from './StyledSection'
import StyledSplash from './StyledSplash'
import StyledForm from './StyledForm'

const ContactSection = () => (
  <StyledSection>
    <StyledSplash>
      <h1>CONTACT ME</h1>
    </StyledSplash>
    <StyledForm
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      method='POST'
    >
      <input type='text' name='name' placeholder='Name' />
      <input type='email' name='_replyto' placeholder='Your email' />
      <textarea name='message' rows='10' placeholder='Message' />
      <input type='hidden' name='_next' value='/' />
      <input className='submit' type='submit' value='SUBMIT' />
    </StyledForm>
  </StyledSection>
)

export default ContactSection
