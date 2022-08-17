import { useState } from "react";
import styled from "styled-components";
import ChekboxField from "../checkboxField";


const FilterBlock = styled.section`
  background: #333333;
`

const FilterPanel = ({ platformList, click }) => {
  const { results: parentPlatfopms } = platformList
  console.log('platformList', platformList);
  const parentPlatfopmIds = parentPlatfopms.map(p => p.id)
  const [filteredIds, setFilteredIds] = useState(parentPlatfopmIds)
  // console.log('parentPlatfopms', parentPlatfopms);
  const handleChange = (id) => {
    console.log('change');
    filteredIds.indexOf(id) === -1
      ? setFilteredIds(prev => [...prev, id])
      : setFilteredIds(prev => prev.filter(el => el !== id))
    click()
  }
  console.log('filteredIds', filteredIds);
  return (
    <FilterBlock className="customScroll">
      <h2>Platforms</h2>
      <ul>
        { parentPlatfopms && parentPlatfopms.map(platform => {
          return (
            <li key={ `platform${platform.id}` }>
              <ChekboxField
                name={ platform.id }
                value={ filteredIds.includes(platform.id) }
                onChange={ handleChange }
              >

                { platform.name }
              </ChekboxField>
            </li>
          )
        }) }
      </ul>


    </FilterBlock>
  );
}

export default FilterPanel;