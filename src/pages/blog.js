/* global graphql */
import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const StyledDiv = styled.div`
  margin: 1em auto 3em auto;
  max-width: 1200px;
  padding: 0 20px;
  
  .img-wrapper {
    height: 360px;
    margin: 0 auto;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .title {
    color: #555;
    max-width: 1000px;
    text-align: center;
    font-size: 2.5em;
  }

  .date {
    color: #a0a6ab;
    letter-spacing: 2px;
    text-align: center;
  }

  .link-wrapper {
    text-align: center;
    margin: 1.5em 0;

    a {
      display: inline-block;
      padding: 6px 12px;
      margin: 0.5em 1em;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      border: 1px solid transparent;
      border-radius: 4px;
  
      width: 100%;
      max-width: 200px;
      box-shadow: 0px 2px 5px 1px darkgrey;
  
      color: white;
      background: #549657;
  
      text-decoration: none;
  
      &:hover {
        background: #3d7140;
      }
  
      &:active {
        box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
      }
    }
  }

  hr {
    margin: 1em 0;
    height: 1px;
    border: 0;
    background: black;
    background: -webkit-gradient(linear, 0 0, 100% 0, from(rgb(245, 245, 245)), color-stop(0.5, rgb(46, 52, 64)), to(rgb(245, 245, 245)));
  }
`

const BlogPage = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map((post, idx) => (
      <StyledDiv key={post.node.id}>
        <div className='img-wrapper'>
          <img src={post.node.frontmatter.image.childImageSharp.sizes.src} alt={post.node.frontmatter.title} />
        </div>
        <h2 className='title'>{post.node.frontmatter.title}</h2>
        <p className='date'>{post.node.frontmatter.date}</p>
        <p className='excerpt'>{post.node.excerpt}</p>
        <div className='link-wrapper'>
          <Link to={post.node.fields.slug}>Continue reading...</Link>
        </div>
        {idx + 1 !== data.allMarkdownRemark.edges.length &&
          <hr />
        }
      </StyledDiv>
    ))}
  </div>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { fileAbsolutePath: { regex: "/src\/pages\/blog/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            image {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
