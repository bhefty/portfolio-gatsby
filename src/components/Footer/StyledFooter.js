import styled from 'styled-components'
import { colors } from '../../layouts/colors'

const StyledFooter = styled.footer`
  text-align: center;
  background-color: ${colors.darkShade};
  color: ${colors.whiteLight};
  padding: 4em 0 2em 0;

  .copyright {
    font-size: 0.75em;
  }
`

export default StyledFooter
