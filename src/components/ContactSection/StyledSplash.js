import styled from 'styled-components'
import { colors } from '../../layouts/colors'

import splashImage from './images/contact-spacer.jpg'

const StyledSplash = styled.header`
  background: url(${splashImage}) no-repeat center center;
  background-size: cover;

  display: grid;
  height: 35vh;
  width: 100%;

  overflow: hidden;
  text-align: center;
  color: ${colors.whiteAlt};

  h1 {
    margin: auto 0;
    font-size: 4em;
    letter-spacing: 5px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.95);
  }
`

export default StyledSplash
