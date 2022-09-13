import { FC } from 'react';
import styled from 'styled-components';
import { ChangeParamsType, GamesParamsType, PlatformType } from '../../types';
import ChekboxField from '../checkboxField';

type FilterPlatformsProps = {
  parentPlatfopms: PlatformType[],
  filteredIds: GamesParamsType['parent_platforms'],
  queryParam: keyof GamesParamsType,
  handleChangeParams: ChangeParamsType
}

const FilterPatformBlock = styled.ul`
  padding-left: 15px;
  font-size: 1.5rem;
  color: #cccccc;
  text-shadow: 0 0 2p #ffffff;
`;

const FilterPlatforms: FC<FilterPlatformsProps> = ({ parentPlatfopms, filteredIds, queryParam, handleChangeParams }) => {
  const handleChange = (id: number ) => {
    const valueParam = filteredIds.indexOf(id) === -1
      ? [ ...filteredIds, id ]
      : filteredIds.filter(el => el !== id);
    handleChangeParams( queryParam, valueParam);
  };

  return (
    <FilterPatformBlock>
      <h3>Платформы</h3>
      { parentPlatfopms && parentPlatfopms.map(platform => {
        return (
          <li key={ `platform${platform.id}` }>
            <ChekboxField
              name={ platform.id }
              value={ filteredIds.includes(platform.id) }
              onChange={ handleChange }
              text={ platform.name }
            />
          </li>
        );
      }) }
    </FilterPatformBlock>
  );
};

export default FilterPlatforms;