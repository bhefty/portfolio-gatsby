import React from 'react'

import StyledSplash from './StyledSplash'
import BlogBanner from './BlogBanner'

const sampleData = {
  title: `Part 1: The Case for React Redux Boilerplate`,
  date: `7/19/2017`,
  description: `I’ve long been a fan of ReactJS. I try to use it in all of my projects in fact. I’ve touched it before, but this portfolio site at the time of this post is written in ReactJS using NextJS. One thing that I’ve always wanted to really utilize though has been Redux.   There are …`,
  image: `https://d4gkswqlm0tsn.cloudfront.net/wp-content/uploads/2017/07/19032610/artem-sapegin-199614.jpg`,
  link: `https://billhefty.com/post?id=85`
}

const BlogSection = () => (
  <section>
    <StyledSplash>
      <h1>BLOG</h1>
    </StyledSplash>
    <BlogBanner
      title={sampleData.title}
      date={sampleData.date}
      description={sampleData.description}
      image={sampleData.image}
      link={sampleData.link}
    />
  </section>
)

export default BlogSection
