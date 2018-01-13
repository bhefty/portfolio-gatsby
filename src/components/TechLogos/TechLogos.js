import React from 'react'

import nodeImg from './images/node.png'
import reactImg from './images/react.png'
import reduxImg from './images/redux.png'
import mongodbImg from './images/mongodb.png'
import websocketsImg from './images/websockets.png'
import herokuImg from './images/heroku.png'

const NodeLogo = (idx) => (<img key={idx} src={nodeImg} alt='Node.js logo' />)
const ReactLogo = (idx) => (<img key={idx} src={reactImg} alt='React.js logo' />)
const ReduxLogo = (idx) => (<img key={idx} src={reduxImg} alt='Redux logo' />)
const MongoDBLogo = (idx) => (<img key={idx} src={mongodbImg} alt='MongoDB logo' />)
const WebsocketsLogo = (idx) => (<img key={idx} src={websocketsImg} alt='Websockets logo' />)
const HerokuLogo = (idx) => (<img key={idx} src={herokuImg} alt='Heroku logo' />)

export default {
  NodeLogo,
  ReactLogo,
  ReduxLogo,
  MongoDBLogo,
  WebsocketsLogo,
  HerokuLogo
}
