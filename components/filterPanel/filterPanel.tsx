import React, { FC } from 'react';
import styled from 'styled-components';
import { ChangeParamsType, GamesParamsType, PlatformType } from '../../types';
import FilterPlatforms from './filterPlatforms';

type FilterPanelProps = {
  platformList: PlatformType[],
  filteredIds: GamesParamsType['parent_platforms'],
  handleChangeParams: ChangeParamsType
}

const FilterBlock = styled.section`
  background: #666666;

  .filters{
    font-size: 1.5rem;
    margin: 1rem ;
    color: #cccccc;
    text-align: center;
  }
`;

const FilterPanel: FC<FilterPanelProps> = ({ platformList, filteredIds, handleChangeParams }) => {
  return (
    <FilterBlock className="customScroll">
      <div className="filters">Фильтры</div>
      <FilterPlatforms
        queryParam="parent_platforms"
        parentPlatfopms={ platformList }
        filteredIds={ filteredIds }
        handleChangeParams={ handleChangeParams }
      />
    </FilterBlock>
  );
};

export default FilterPanel;