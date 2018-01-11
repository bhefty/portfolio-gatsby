import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'sanitize.css/sanitize.css'
import './global-styles'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Bill Hefty'
      meta={[
        { name: 'description', content: 'Portfolio site for JavaScript Web Developer Bill Hefty' },
        { name: 'keywords', content: 'web, development, developer, javascript, react, bill hefty, portfolio' }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
