import styled from 'styled-components'
import { colors } from '../../layouts/colors'

const StyledSection = styled.div`
  background-color: ${colors.whiteLight};
  
  .container {
    margin: 0 auto;
    padding: 1em;
    max-width 1200px;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 34% 64%;
      grid-gap: 2%;
    }

    h1 {
      font-size: 2.5em;
      font-weight: 400;
    }

    p {
      font-size: 1.5em;
      font-weight: 300;
      text-align: justify;
    }

    img {
      margin: auto;
      width: 100%;

      @media (max-width: 768px) {
        display: none;
      }
    }
  } 
`

export default StyledSection
