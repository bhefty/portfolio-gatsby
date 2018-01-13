import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'sanitize.css/sanitize.css'
import './global-styles'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title='Bill Hefty'
      meta={[
        { name: 'description', content: 'Portfolio site for JavaScript Web Developer Bill Hefty' },
        { name: 'keywords', content: 'web, development, developer, javascript, react, bill hefty, portfolio' }
      ]}
    />
    {(location.pathname !== '/') &&
      <Navbar />
    }
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
