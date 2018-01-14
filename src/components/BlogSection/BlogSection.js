import React from 'react'

import StyledSplash from './StyledSplash'
import BlogBanner from './BlogBanner'

const BlogSection = ({ latestPost }) => (
  <section>
    <StyledSplash>
      <h1>BLOG</h1>
    </StyledSplash>
    <BlogBanner
      title={latestPost.frontmatter.title}
      date={latestPost.frontmatter.date}
      excerpt={latestPost.excerpt}
      image={latestPost.frontmatter.image.childImageSharp.sizes.src}
      slug={latestPost.fields.slug}
    />
  </section>
)

export default BlogSection
