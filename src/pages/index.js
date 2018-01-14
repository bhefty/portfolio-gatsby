/* global graphql */
import React from 'react'

import MainHeader from '../components/MainHeader/MainHeader'
import About from '../components/About/About'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import BlogSection from '../components/BlogSection/BlogSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Navbar from '../components/Navbar/Navbar'

const IndexPage = ({ data }) => (
  <div>
    <MainHeader />
    <Navbar />
    <About />
    <ProjectsSection />
    <BlogSection latestPost={data.allMarkdownRemark.edges[0].node} />
    <ContactSection />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1, filter: { fileAbsolutePath: { regex: "/src\/pages\/blog/" } }) {
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
