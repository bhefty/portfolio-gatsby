import React from 'react'
import Link from 'gatsby-link'

import StyledBlogSection from './StyledBlogSection'

const BlogBanner = ({ title, excerpt, date, image, slug }) => (
  <StyledBlogSection>
    <h2 className='heading'>The latest post:</h2>
    <h2 className='title'>{title}</h2>
    <div className='date'>{date}</div>
    <div className='img-container'>
      <img src={image} alt={title} />
    </div>
    <p>{excerpt}</p>
    <div className='links'>
      <Link className='link-read' to={slug}>Continue reading...</Link>
      <Link className='link-all' to={'/blog'}>View all posts</Link>
    </div>
  </StyledBlogSection>
)

export default BlogBanner
