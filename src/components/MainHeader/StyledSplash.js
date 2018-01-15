import styled from 'styled-components'
import { colors } from '../../layouts/colors'

import splashImage from './images/splash-macbook.jpg'

const StyledSplash = styled.div`
  background: url(${splashImage}) no-repeat center center;
  background-size: cover;
  // background-attachment: fixed;

  display: grid;
  height: 100vh;
  width: 100%;

  overflow: hidden;
  text-align: center;
  color: ${colors.whiteAlt};

  header {
    margin: auto 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.95);

    h1 {
      font-size: 4em;
      letter-spacing: 5px;
      margin-bottom: .1em;
    }
  }

  section {
    background-color: rgba(0, 0, 0, 0.65);
    height: 96px;
    position: absolute;
    bottom: 0;
    width: 100%;

    div {
      margin: 23px auto;
      max-width: 360px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

      svg {
        width: 50px;
        height: 50px;
        fill: ${colors.whiteLight};
      }
    }
  }
`

export default StyledSplash
