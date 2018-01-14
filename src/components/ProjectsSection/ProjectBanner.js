import React from 'react'

import StyledProjectSection from './StyledProjectSection'

const ProjectBanner = ({ title, description, image, stackLogos, codeLink, demoLink }) => (
  <StyledProjectSection>
    <div className='container'>
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <img src={image} alt={title} />
    </div>
    <div className='stackLogos'>
      {stackLogos.map((logo, idx) => logo(idx))}
    </div>
    <div className='links'>
      <a className='link-code' href={codeLink} target='_blank'>Code</a>
      <a className='link-demo' href={demoLink} target='_blank'>Demo</a>
    </div>
  </StyledProjectSection>
)

export default ProjectBanner
