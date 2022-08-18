import styled from "styled-components";
import ChekboxField from "../checkboxField";


const FilterPatformBlock = styled.ul`
  padding-left: 15px;
  font-size: 1.5rem;
  color: #cccccc;
  text-shadow: 0 0 2p #ffffff;
`

const FilterPlatform = ({ parentPlatfopms, filteredIds, queryParam, handleCangeParams }) => {
  const handleChange = (id) => {
    const value = filteredIds.indexOf(id) === -1
      ? [...filteredIds, id]
      : filteredIds.filter(el => el !== id)
    handleCangeParams(queryParam, value)
  }
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
            >
              { platform.name }
            </ChekboxField>
          </li>
        )
      }) }
    </FilterPatformBlock>
  );
}

export default FilterPlatform;