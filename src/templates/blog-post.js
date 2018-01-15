/* global graphql */
import React from 'react'
import styled from 'styled-components'
import { colors } from '../layouts/colors'

const StyledContainer = styled.main`
  padding-bottom: 50px;

  .img-wrapper {
    height: 40vh;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .date {
    color: ${colors.lightAccent};
    letter-spacing: 2px;
    margin-top: 1em;
    text-align: center;
  }
  
  .title {
    color: ${colors.darkShade};
    font-size: 2.25em;
    max-width: 1000px;
    padding: 0 20px;
  }

  .content {
    padding: 0 20px;
  }

  a {
    color: ${colors.lightAccent};
    text-decoration: none;
  }

  code {
    background-color: ${colors.lightShade};
  }

  pre {
    padding: 1em;
    background-color: ${colors.lightShade};
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <StyledContainer>
      <div className='img-wrapper'>
        <img src={post.frontmatter.image.childImageSharp.sizes.src} alt={post.frontmatter.title} />
      </div>
      <p className='date'>{post.frontmatter.date}</p>
      <h1 className='title'>{post.frontmatter.title}</h1>
      <div className='content' dangerouslySetInnerHTML={{ __html: post.html }} />
    </StyledContainer>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        image {
          childImageSharp {
            sizes {
              src
            }
          }
        }
        title
      }
      html
    }
  }
`
