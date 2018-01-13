import React from 'react'

import StyledBlogSection from './StyledBlogSection'

const BlogBanner = ({ title, description, date, image, link }) => (
  <StyledBlogSection>
    <h2 className='heading'>The latest post:</h2>
    <h2 className='title'>{title}</h2>
    <div className='date'>{date}</div>
    <div className='img-container'>
      <img src={image} alt={title} />
    </div>
    <p>{description}</p>
    <div className='links'>
      <a className='link-read' href={link} target='_blank'>Continue reading...</a>
      <a className='link-all' href={'/'} target='_blank'>View all posts</a>
    </div>
  </StyledBlogSection>
)

export default BlogBanner
