/* global graphql */
import React from 'react'
import styled from 'styled-components'
import { colors } from '../layouts/colors'

import {
  NodeLogo,
  ReactLogo,
  ReduxLogo,
  MongoDBLogo,
  WebsocketsLogo,
  HerokuLogo
} from '../components/TechLogos/TechLogos'

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

  .stackLogos {
    text-align: center;
    margin-top: 1em;

    img {
      height: 100%;
      margin: .5em;
    }
  }

  .title {
    color: ${colors.darkShade};
    max-width: 1000px;
    text-align: center;
    font-size: 2.25em;
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
  
      color: ${colors.whiteAlt};
      background: ${colors.darkAccent};
  
      text-decoration: none;
    }

    .link-demo {
      background: ${colors.whiteAlt};
      border: 1px solid ${colors.darkAccent};
      color: ${colors.darkAccent};
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

const ProjectsPage = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map((project, idx) => (
      <StyledDiv key={project.node.id}>
        <div className='img-wrapper'>
          <img src={project.node.frontmatter.hero.childImageSharp.sizes.src} alt={project.node.frontmatter.title} />
        </div>
        <h2 className='title'>{project.node.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
        <div className='stackLogos'>
          {project.node.frontmatter.techStack.map(tech => {
            switch (tech) {
              case 'node': return NodeLogo()
              case 'react': return ReactLogo()
              case 'redux': return ReduxLogo()
              case 'websockets': return WebsocketsLogo()
              case 'mongodb': return MongoDBLogo()
              case 'heroku': return HerokuLogo()
              default: break
            }
          })}
        </div>
        <div className='link-wrapper'>
          <a href={project.node.frontmatter.code} target='_blank'>Code</a>
          <a className='link-demo' href={project.node.frontmatter.demo} target='_blank'>Demo</a>
        </div>
        {idx + 1 !== data.allMarkdownRemark.edges.length &&
          <hr />
        }
      </StyledDiv>
    ))}
  </div>
)

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src\/pages\/projects/" } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            code
            demo
            techStack
            hero {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
