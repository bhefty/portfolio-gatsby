import styled from 'styled-components'
import { colors } from '../../layouts/colors'

const StyledNavContainer = styled.div`
  background-color: ${colors.primary};
  height: 48px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.18), 0 2px 3px rgba(0,0,0,0.26);
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  
  position: sticky;
  top: 0;
  z-index: 11101;
  
  display: grid;
  grid-template-columns: 48px 80px auto 80px 80px;
  grid-template-areas: "brand home . projects blog";
  
  #brand {
    grid-area: brand;
    align-self: center;
    justify-self: center;
  }
  
  #home {
    grid-area: home;
  }
  
  #projects {
    grid-area: projects;
  }
  
  #blog {
    grid-area: blog;
  }
  
  img {
    width: 48px;
  }
  
  a, a:visited {
    color: ${colors.whiteLight};
    text-decoration: none;
  }
  
  a:hover {
    background-color: ${colors.lightAccent};
  }
  
  .button {
    display: grid;
    span {
      margin: auto;
    }
  }
`

export default StyledNavContainer
