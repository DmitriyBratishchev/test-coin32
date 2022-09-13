import React, { FC } from 'react';
import styled from 'styled-components';
import CheckBoxToggleIcon from './ui/CheckBoxToggleIcon';

const CheckBoxInput = styled.input`
  display: none;
`;

const CheckBoxLabel = styled.label`
  display: inline-block;
  width: 100%;
  &:hover{
    font-weight: 500;
    background-color: #333333;
  }
`;

type ChekboxFieldProps = {
  text: string,
  name: number,
  value: boolean,
  onChange: (name: ChekboxFieldProps['name']) => void
}

const ChekboxField: FC<ChekboxFieldProps> = ({ text, name, value, onChange }) => {
  const handleChange = () => {
    onChange(name);
  };

  return (
    <>
      <CheckBoxInput
        type="checkbox"
        id={ `${name}` }
        checked={ value }
        value=""
        onChange={ handleChange }
      />
      <CheckBoxLabel
        htmlFor={ `${name}` }
      >
        <CheckBoxToggleIcon
          isChecked={ value }
        />
        { text }
      </CheckBoxLabel>
    </>
  );
};

export default ChekboxField;