import React from 'react'

import StyledProjectSection from './StyledProjectSection'

const ProjectBanner = ({ title, description, technology, image, stackLogos, codeLink, demoLink }) => (
  <StyledProjectSection>
    <div className='container'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Technology</h3>
        <p>{technology}</p>
      </div>
      <img src={image} alt={title} />
    </div>
    <div className='stackLogos'>
      {stackLogos.map((logo, idx) => logo(idx))}
    </div>
    <div className='links'>
      <a href={codeLink} target='_blank'>Code</a>
      <a href={demoLink} target='_blank'>Demo</a>
    </div>
  </StyledProjectSection>
)

export default ProjectBanner
