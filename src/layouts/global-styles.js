import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  html,
  body {
    height: 100%;
    width: 100%;
    min-width: 360px;
  }
  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    line-height: 1.5em;
  }
`
