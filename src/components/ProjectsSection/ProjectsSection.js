import React from 'react'

import StyledSplash from './StyledSplash'
import ProjectBanner from './ProjectBanner'

const NodeLogo = (idx) => (<img key={idx} src='https://chippd.github.io/img/techlogos/node.png' alt='Node.js logo' />)
const ReactLogo = (idx) => (<img key={idx} src='https://spin.atomicobject.com/wp-content/uploads/20171016145535/ReactJS.png' alt='React.js logo' />)
const WebsocketsLogo = (idx) => (<img key={idx} src='https://dret.net/lectures/iot-spring15/img/websockets-logo.png' alt='Websockets logo' />)
const HerokuLogo = (idx) => (<img key={idx} src='https://i.imgur.com/lwa0UZ8.png' alt='Heroku logo' />)

const sampleData = {
  title: `Bit-Stocks`,
  description: `View and track stock prices for a given company. This view is shared worldwide with other users currently using the app.`,
  technology: `Websocket connection from a Node.JS back-end keeps all concurrent clients in sync as they add, remove, and track stock data. Users interact with the chart from a React front-end. This app is deployed via Heroku.`,
  image: `https://d4gkswqlm0tsn.cloudfront.net/wp-content/uploads/2017/06/24144538/project-bit-stocks.png`,
  stackLogos: [NodeLogo, ReactLogo, WebsocketsLogo, HerokuLogo],
  codeLink: `https://github.com/bhefty/bit-stocks`,
  demoLink: `http://bit-stocks.herokuapp.com/`
}

const ProjectsSection = () => (
  <section>
    <StyledSplash>
      <h1>PROJECTS</h1>
    </StyledSplash>
    <ProjectBanner
      title={sampleData.title}
      description={sampleData.description}
      technology={sampleData.technology}
      image={sampleData.image}
      stackLogos={sampleData.stackLogos}
      codeLink={sampleData.codeLink}
      demoLink={sampleData.demoLink}
    />
  </section>
)

export default ProjectsSection
