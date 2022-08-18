import { useEffect, useRef } from "react";
import { Title } from './../../styles/customStyle'
import SearchField from "../searchField";
import SortPanel from "../sortPanel/sotPanel";
import { Sticky } from "../../styles/components/sticky";
import CardGame from "./cardGame";
import { ListContainer } from "./listGamesStyle";

const ListGames = ({
  listGames,
  listLoading,
  fetchData,
  nextPage,
  searchValue,
  isNeedUpdateList,
  sortParams,
  sortValue,
  handleChangeParams
}) => {
  const listContainer = useRef(null)
  const top = useRef(null)

  if (isNeedUpdateList) {
    top.current.scrollIntoView(false)
  }
  useEffect(() => {
    const htmlListCards = listContainer.current?.children
    if (htmlListCards?.length > 0) {

      const lastEllementIndex = htmlListCards.length - 1
      const options = {
        threshold: 0
      }
      const callback = (entries, observer) => {
        const enrtry = entries[0]
        if (enrtry.isIntersecting && nextPage) {
          fetchData()
        }
        if (nextPage === null) {
          observer.disconnect()
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(htmlListCards.item(lastEllementIndex))

      return function() {
        observer.disconnect()
      }
    }
  }, [listGames])

  return (
    <div className='customScroll'>
      <div ref={ top }></div>
      <Sticky
        bgColor={ '#666666' }
        padding={ '10px 0' }
        margin={ '0 0 10px' }
      >
        <SearchField
          searchValue={ searchValue }
          handleChangeParams={ handleChangeParams }
        />
        <SortPanel
          sortParams={ sortParams }
          sortValue={ sortValue }
          handleChangeParams={ handleChangeParams }
        />
      </Sticky>
      <ListContainer
        ref={ listContainer }
      >
        { listGames.length !== 0 && listGames.map(game => (
          <CardGame
            key={ game.id }
            game={ game }
          />
        )
        ) }
        { listLoading && <Title>Loading ...</Title> }
      </ListContainer>
    </div>
  );
}

export default ListGames;