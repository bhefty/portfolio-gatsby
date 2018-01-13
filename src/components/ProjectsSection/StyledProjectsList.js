import styled from 'styled-components'

const StyledProjectsList = styled.div`
  section {
    padding: 2em 0;
    clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
  }
  section:nth-child(odd) {
    background-color: #Ff9f9f9;
  }

  section:nth-child(even) {
    background-color: #f4f4f4;
  }

  section:nth-last-child(1) {
    clip-path: polygon(0 0%, 100% 4%, 100% 100%, 0% 100%);
  }
`

export default StyledProjectsList
