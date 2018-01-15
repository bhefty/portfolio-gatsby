import styled from 'styled-components'
import { colors } from '../../layouts/colors'

const StyledProjectSection = styled.section`
  .heading {
    text-align: center;

  }

  margin: 0 auto;
  padding: 1em;
  max-width: 1200px;
  
  .title {
    font-size: 2.5em;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.5em;
  }

  .date {
    text-align: center;
    font-size: 0.75em;
    margin-bottom: 2em;
  }

  .img-container {
    max-height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      position: relative;
      margin-top: -10%;
    }
  }


  .stackLogos {
    text-align: center;
    margin-top: 1em;

    img {
      height: 45px;
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

    .link-read {
      background: ${colors.whiteAlt};
      border: 1px solid ${colors.darkAccent};
      color: ${colors.darkAccent};
    }
  }
`

export default StyledProjectSection
