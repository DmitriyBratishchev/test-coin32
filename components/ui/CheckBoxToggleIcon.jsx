import styled from "styled-components";


const CheckBoxToggleIconBlock = styled.span`
  display: inline-block;
  color: ${({ isChecked }) => isChecked ? '#08bb1a' : '#c60316'};
  text-shadow: ${({ isChecked }) => isChecked ? '0 0 5px #5fca6a' : '0 0 2px #ca5460'};
  width: 2rem;
`

const CheckBoxToggleIcon = ({ isChecked }) => {
  return (
    <CheckBoxToggleIconBlock
      isChecked={ isChecked }
    >
      { isChecked ? <>&#10003;</> : <>&#10008;</> }
    </CheckBoxToggleIconBlock>);
}

export default CheckBoxToggleIcon;