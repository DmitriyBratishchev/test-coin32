import styled from "styled-components";
import FilterPlatform from "./filterPlatforms";


const FilterBlock = styled.section`
  background: #666666;

  .filters{
    font-size: 1.5rem;
    margin: 1rem ;
    color: #cccccc;
    text-align: center;
  }
`

const FilterPanel = ({ platformList, filteredIds, handleCangeParams }) => {
  return (
    <FilterBlock className="customScroll">
      <div className="filters">Фильтры</div>
      <FilterPlatform
        queryParam='parent_platforms'
        parentPlatfopms={ platformList.results }
        filteredIds={ filteredIds }
        handleCangeParams={ handleCangeParams }
      />
    </FilterBlock>
  );
}

export default FilterPanel;