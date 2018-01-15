import styled from 'styled-components'
import { colors } from '../../layouts/colors'

const StyledProjectSection = styled.section`
  .container {
    margin: 0 auto;
    padding: 1em;
    max-width: 1200px;
    
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 34% 64%;
      grid-gap: 2%;
    }

    img {
      width: 100%;
    }
  }

  .stackLogos {
    text-align: center;
    margin-top: 1em;

    img {
      height: 100%;
      margin: .5em;
    }
  }

  .links {
    text-align: center;
    margin: 1.5em 0;

    a {
      display: inline-block;
      padding: 6px 12px;
      margin: 0.5em 1em;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      border: 1px solid transparent;
      border-radius: 4px;
  
      width: 100%;
      max-width: 200px;
  
      color: ${colors.whiteAlt};
      background: ${colors.darkAccent};
  
      text-decoration: none;
    }

    .link-all {
      background: ${colors.whiteAlt};
      border: 1px solid ${colors.darkAccent};
      color: ${colors.darkAccent};
    }
  }
`

export default StyledProjectSection
