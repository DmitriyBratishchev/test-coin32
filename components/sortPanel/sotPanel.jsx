import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SortPanelBlock = styled.div`
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

const LabelButton = styled.div`
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

const sortParamsLables = {
  released: 'дате релиза',
  rating: 'рейтингу'
};
function SortPanel({ sortParams, sortValue, handleChangeParams }) {
  const prevOrder = useRef('');
  const [order, setOrder] = useState('-');

  useEffect(() => {
    if (order !== prevOrder) {
      prevOrder.current = prevOrder.current === '-' ? '' : '-';
      handleChangeParams('ordering', sortValue.includes('-') ? sortValue.substring(1) : order + sortValue);
    }
  }, [order]);

  const handleSetOrder = () => {
    setOrder((prev) => (prev === '-' ? '' : '-'));
  };
  const handleChange = ({ target }) => {
    const value = sortValue === (order + target.value) ? '' : order + target.value;
    handleChangeParams('ordering', value);
  };

  const getLabel = (param) => (param.includes('-')
    ? sortParamsLables[param.substring(1)]
    : sortParamsLables[param]);
  return (
    <SortPanelBlock
      flexStart={ !sortValue }
    >
      <div>Сортировать по: </div>
      { sortParams && sortParams.map((ordering) => (
        <React.Fragment key={ `sort_${ordering}` }>
          <input
            type="radio"
            id={ `sort_${ordering}` }
            checked={ sortValue.includes(ordering) }
            value={ ordering }
            onChange={ () => {} }
            onClick={ handleChange }
          />
          <label
            htmlFor={ `sort_${ordering}` }
          >
            <LabelButton
              checked={ sortValue.includes(ordering) }
            >
              { ordering && getLabel(ordering) }
            </LabelButton>
          </label>
        </React.Fragment>
      )) }
      { sortValue && (
        <ButtonOrder
          type="button"
          onClick={ handleSetOrder }
        >
          { order === '-' ? 'по убыванию' : 'по возрастанию' }
        </ButtonOrder>
      ) }
    </SortPanelBlock>
  );
}

export default SortPanel;
