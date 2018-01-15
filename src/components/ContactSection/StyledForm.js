import styled from 'styled-components'
import { colors } from '../../layouts/colors'

const StyledForm = styled.form`
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 1em auto;
  padding: 0 1em;
  display: block;

  input, textarea {
    margin: 0.25em 0;
    background: ${colors.whiteAlt};
    border: 0;
    padding: 0.5em 1em;
    width: 100%;
  }

  .submit {
    padding: 0.75em;
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${colors.whiteAlt};
    cursor: pointer;
    background: ${colors.darkAccent};
  }
`

export default StyledForm
