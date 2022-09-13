import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { sortParamLabels } from '../../constants/sortParamLabels';
import { ChangeParamsType, sortParamLabelType } from '../../types';

type sortPanelBlockProps = {
  flexStart: boolean
}

const SortPanelBlock = styled.form<sortPanelBlockProps>`
  background-color: #666666;
  display: flex;
  align-items: center;
  justify-content: ${({ flexStart }) => (flexStart ? 'start' : 'space-between')};
  margin: 0 10px;
  gap: 10px;

  input {
    display: none;
  }
`;

type LabelButtonProps = {
  checked?: boolean
}

const LabelButton = styled.div<LabelButtonProps>`
  display: flex;
  align-items: center;
  height: 2rem;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0 1rem;
  border-radius: 1rem;
  background-color: ${({ checked }) => (checked ? '#cccccc' : '#333333')};
  border: 1px solid #ffffff;
  color: ${({ checked }) => (checked ? '#000000' : '#ffffff')};
  box-shadow: ${({ checked }) => (checked ? '0 0 6px #ffffff' : 'none')};
  cursor: pointer;
`;
const ButtonOrder = styled(LabelButton)`
  margin-left: auto;
`;

type SortPanelProps = {
  sortParams: sortParamLabelType[],
  sortValue: sortParamLabelType | '',
  sortOrder: '' | '-',
  handleChangeParams: ChangeParamsType
};

const SortPanel: FC<SortPanelProps> = ({ sortParams, sortValue, sortOrder, handleChangeParams }) => {

  const handleChangeOrder = () => {
    handleChangeParams('order', sortOrder === '-' ? '' : '-');
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = sortValue === target.value ? '' : target.value as sortParamLabelType;
    handleChangeParams('ordering', value);
  };

  return (
    <SortPanelBlock
      flexStart={ sortValue === '' || sortOrder === '-' }
    >
      <div>Сортировать по: </div>
      { sortParams && sortParams.map((ordering) => (
        <React.Fragment key={ `sort_${ordering}` }>
          <input
          // onClickCapture={}
            type="checkbox"
            id={ `sort_${ordering}` }
            // name="ordering"
            checked={ sortValue.includes(`${ordering}`) }
            value={ ordering }
            onChange={ handleChange }
            // onClick={ handleChange }
          />
          <label
            htmlFor={ `sort_${ordering}` }
          >
            <LabelButton
              checked={ sortValue.includes(ordering) }
            >
              { ordering && sortParamLabels[ordering] }
            </LabelButton>
          </label>
        </React.Fragment>
      )) }
      { sortValue !== '' && (
        <ButtonOrder
          // type="button"
          onClick={ handleChangeOrder }
        >
          { sortOrder === '-' ? 'по убыванию' : 'по возрастанию' }
        </ButtonOrder>
      ) }
    </SortPanelBlock>
  );
};

export default SortPanel;
