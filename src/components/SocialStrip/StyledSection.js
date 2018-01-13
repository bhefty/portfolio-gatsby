import styled from 'styled-components'

const StyledSection = styled.section`
  height: 100%;
  width: 100%;

  div {
    margin: 23px auto;
    max-width: 360px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

    svg {
      width: 30px;
      height: 30px;
      fill: #f4f4f4;
    }
  }
`

export default StyledSection
