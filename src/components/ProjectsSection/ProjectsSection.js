import React from 'react'

import StyledSplash from './StyledSplash'
import StyledProjectsList from './StyledProjectsList'
import ProjectBanner from './ProjectBanner'

const NodeLogo = (idx) => (<img key={idx} src='https://chippd.github.io/img/techlogos/node.png' alt='Node.js logo' />)
const ReactLogo = (idx) => (<img key={idx} src='https://spin.atomicobject.com/wp-content/uploads/20171016145535/ReactJS.png' alt='React.js logo' />)
const ReduxLogo = (idx) => (<img key={idx} src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png' alt='Redux logo' />)
const MongoDBLogo = (idx) => (<img key={idx} src='https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg' alt='MongoDB logo' />)
const WebsocketsLogo = (idx) => (<img key={idx} src='https://dret.net/lectures/iot-spring15/img/websockets-logo.png' alt='Websockets logo' />)
const HerokuLogo = (idx) => (<img key={idx} src='https://i.imgur.com/lwa0UZ8.png' alt='Heroku logo' />)

const sampleData = [{
  title: `Bit-Stocks`,
  description: `View and track stock prices for a given company. This view is shared worldwide with other users currently using the app.`,
  technology: `Websocket connection from a Node back-end keeps all concurrent clients in sync as they add, remove, and track stock data. Users interact with the chart from a React front-end. This app is deployed via Heroku.`,
  image: `https://d4gkswqlm0tsn.cloudfront.net/wp-content/uploads/2017/06/24144538/project-bit-stocks.png`,
  stackLogos: [NodeLogo, ReactLogo, WebsocketsLogo, HerokuLogo],
  codeLink: `https://github.com/bhefty/bit-stocks`,
  demoLink: `http://bit-stocks.herokuapp.com/`
}, {
  title: `Nightlife Activity`,
  description: `Search by location to find nearby popular entertainment spots such as bars, clubs and coffee shops. View how many people are planning to visit a location and create an account to add yourself to the attendance list.`,
  technology: `A Node back-end with Express serves up routing for both the React front-end as well as an API to interface with the MongoDB database. Redux is used alongside React for managinging state, including persisting some information across sessions. This app is deployed via Heroku.`,
  image: `https://d4gkswqlm0tsn.cloudfront.net/wp-content/uploads/2017/05/26200254/project-nightlife-activity.png`,
  stackLogos: [NodeLogo, ReactLogo, ReduxLogo, MongoDBLogo, HerokuLogo],
  codeLink: `https://github.com/bhefty/nightlife-app`,
  demoLink: `http://billhefty-nightlife-app.herokuapp.com/`
}]

const ProjectsSection = () => (
  <section>
    <StyledSplash>
      <h1>PROJECTS</h1>
    </StyledSplash>
    <StyledProjectsList>
      <ProjectBanner
        title={sampleData[0].title}
        description={sampleData[0].description}
        technology={sampleData[0].technology}
        image={sampleData[0].image}
        stackLogos={sampleData[0].stackLogos}
        codeLink={sampleData[0].codeLink}
        demoLink={sampleData[0].demoLink}
      />
      <ProjectBanner
        title={sampleData[1].title}
        description={sampleData[1].description}
        technology={sampleData[1].technology}
        image={sampleData[1].image}
        stackLogos={sampleData[1].stackLogos}
        codeLink={sampleData[1].codeLink}
        demoLink={sampleData[1].demoLink}
      />
      <ProjectBanner
        title={sampleData[0].title}
        description={sampleData[0].description}
        technology={sampleData[0].technology}
        image={sampleData[0].image}
        stackLogos={sampleData[0].stackLogos}
        codeLink={sampleData[0].codeLink}
        demoLink={sampleData[0].demoLink}
      />
      <ProjectBanner
        title={sampleData[1].title}
        description={sampleData[1].description}
        technology={sampleData[1].technology}
        image={sampleData[1].image}
        stackLogos={sampleData[1].stackLogos}
        codeLink={sampleData[1].codeLink}
        demoLink={sampleData[1].demoLink}
      />
      <ProjectBanner
        title={sampleData[0].title}
        description={sampleData[0].description}
        technology={sampleData[0].technology}
        image={sampleData[0].image}
        stackLogos={sampleData[0].stackLogos}
        codeLink={sampleData[0].codeLink}
        demoLink={sampleData[0].demoLink}
      />
      <ProjectBanner
        title={sampleData[1].title}
        description={sampleData[1].description}
        technology={sampleData[1].technology}
        image={sampleData[1].image}
        stackLogos={sampleData[1].stackLogos}
        codeLink={sampleData[1].codeLink}
        demoLink={sampleData[1].demoLink}
      />
    </StyledProjectsList>
  </section>
)

export default ProjectsSection
