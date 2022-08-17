import styled from "styled-components";

const CheckboxBlock = styled.div`

`

const ChekboxField = ({ children, name, value, onChange }) => {
  return (
    <CheckboxBlock>
      <input
        type={ 'checkbox' }
        id={ name }
        checked={ value }
        value=''
        onChange={ () => onChange(name) }
      />
      <label htmlFor={ name }>{ children }</label>
    </CheckboxBlock>
  );
}

export default ChekboxField;