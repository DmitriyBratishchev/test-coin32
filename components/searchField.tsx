import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { ChangeParamsType } from '../types';

const Search = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 2rem;
  width: 98%;
  border: 1px solid #555555;
  border-radius: 1rem;
  background-color: #fff ;
  margin: 0 1%;
  margin-bottom: 10px;

  div {
    width: 20px;
    margin-left: 10px;
  }

  input {
    flex-grow: 1;
    border: none;
    &:active,
    &:focus {
      outline: 0;
      outline: none;
    }
  }
`;

type SearchFieldProps = {
  searchValue: string,
  handleChangeParams: ChangeParamsType
};

const SearchField: FC<SearchFieldProps> = ({ searchValue, handleChangeParams }) => {

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {
    handleChangeParams('search', target.value);
  };

  return (
    <Search>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <input
        type={ 'text' }
        value={ searchValue }
        onChange={ handleChange }
        placeholder={ 'Поиск' }
      />
    </Search>
  );
};

export default SearchField;