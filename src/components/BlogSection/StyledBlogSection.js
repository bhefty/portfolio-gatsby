import styled from 'styled-components'

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
      box-shadow: 0px 2px 5px 1px darkgrey;
  
      color: white;
      background: #549657;
  
      text-decoration: none;
  
      &:hover {
        background: #3d7140;
      }
  
      &:active {
        box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
      }
    }

    .link-read {
      background: #fff;
      border: 1px solid #549657;
      color: #549657;

      &:hover {
        color: #fff;
      }
    }
  }
`

export default StyledProjectSection
