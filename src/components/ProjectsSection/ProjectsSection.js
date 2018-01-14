/* eslint no-fallthrough: 0 */
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import StyledSplash from './StyledSplash'
import StyledProjectsList from './StyledProjectsList'
import ProjectBanner from './ProjectBanner'

import {
  NodeLogo,
  ReactLogo,
  ReduxLogo,
  MongoDBLogo,
  WebsocketsLogo,
  HerokuLogo
} from '../TechLogos/TechLogos'

const StyledSection = styled.section`
  .link-container {
    text-align: center;

    .all-projects {
      display: inline-block;
      padding: 6px 12px;
      margin: 0.5em 1em;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      border: 1px solid #549657;
      border-radius: 4px;
  
      width: 100%;
      max-width: 400px;
      box-shadow: 0px 2px 5px 1px darkgrey;
  
      color: #549657;
      background: #fff;
  
      text-decoration: none;
  
      &:hover {
        background: #3d7140;
        color: #fff;
      }
  
      &:active {
        box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
      }
    }
  }
`

const ProjectsSection = ({ topProjects }) => (
  <StyledSection>
    <StyledSplash>
      <h1>PROJECTS</h1>
    </StyledSplash>
    <div className='link-container'>
      <Link className='all-projects' to='/projects'>View All Projects</Link>
    </div>
    <StyledProjectsList>
      {topProjects.map(topRpoject => {
        const project = topRpoject.node
        const stackLogos = project.frontmatter.techStack.map(tech => {
          switch (tech) {
            case 'node': return NodeLogo
            case 'react': return ReactLogo
            case 'redux': return ReduxLogo
            case 'websockets': return WebsocketsLogo
            case 'mongodb': return MongoDBLogo
            case 'heroku': return HerokuLogo
            default: break
          }
        })

        return (
          <ProjectBanner
            key={project.id}
            title={project.frontmatter.title}
            description={project.html}
            image={project.frontmatter.mockup.childImageSharp.sizes.src}
            stackLogos={stackLogos}
            codeLink={project.frontmatter.code}
            demoLink={project.frontmatter.demo}
          />
        )
      })}
    </StyledProjectsList>
  </StyledSection>
)

export default ProjectsSection
