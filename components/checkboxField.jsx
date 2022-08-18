import styled from "styled-components";

const CheckboxBlock = styled.div`
  input{
    display: none;
  }
  label{
    display: inline-block;
    width: 100%;
    &:hover{
      background-color: #333333;
    }
    .selected{
      display: inline-block;
      color: #08bb1a;
      text-shadow: 0 0 5px #5fca6a;
      width: 2rem;
    }
    .unselected{
      display: inline-block;
      color: #c60316;
      text-shadow: 0 0 2px #ca5460;
      width: 2rem;
    }
  }
`

const ChekboxField = ({ children, name, value, onChange }) => {
  const handleChange = () => {
    onChange(name)
  }
  return (
    <CheckboxBlock>
      <input
        type={ 'checkbox' }
        id={ name }
        checked={ value }
        value=''
        onChange={ handleChange }
      />
      <label htmlFor={ name }>
        { value ? <span className="selected">&#10003;</span> : <span className="unselected">&#10008;</span> }
        { children }
      </label>
    </CheckboxBlock>
  );
}

export default ChekboxField;