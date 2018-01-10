import styled from 'styled-components'

import splashImage from './images/splash-macbook.jpg'

const StyledSplash = styled.div`
  background: #3d3f47 url(${splashImage}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;

  display: grid;
  height: 100vh;
  width: 100%;

  overflow: hidden;
  text-align: center;
  color: #f4f4f4;

  header {
    margin: auto 0;
  }
`

export default StyledSplash
