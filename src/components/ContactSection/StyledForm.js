import styled from 'styled-components'

const StyledForm = styled.form`
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 1em auto;
  padding: 0 1em;
  display: block;

  input, textarea {
    margin: 0.25em 0;
    background: #fff;
    border: 0;
    padding: 0.5em 1em;
    width: 100%;
  }

  .submit {
    padding: 0.75em;
    border: 1px solid #549657;
    color: #549657;
    box-shadow: 0px 2px 5px 1px darkgrey;
    cursor: pointer;

    &:hover {
      background: #4A8B4D;
      color: #fff;
    }
  }
`

export default StyledForm
