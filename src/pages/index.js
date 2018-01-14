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
    <ProjectsSection topProjects={data.topProjects.edges} />
    <BlogSection latestPost={data.latestPost.edges[0].node} />
    <ContactSection />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
  latestPost: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1, filter: { fileAbsolutePath: { regex: "/src\/pages\/blog/" } }) {
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
  topProjects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src\/pages\/projects/" }, frontmatter: { top: { eq: true } } }, limit: 3) {
    edges {
      node {
        id
        frontmatter {
          title
          mockup {
            childImageSharp {
              sizes {
                src
              }
            }
          }
          code
          demo
          techStack
        }
        html
      }
    }
  }
  }
`
