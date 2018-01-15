/* eslint no-fallthrough: 0 */
import React from 'react'
import Link from 'gatsby-link'

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

const ProjectsSection = ({ topProjects }) => (
  <section>
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
  </section>
)

export default ProjectsSection
