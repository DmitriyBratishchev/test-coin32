import { useEffect, useRef, FC } from 'react';
import { Title } from '../../styles/customStyle';
import SearchField from '../searchField';
import SortPanel from '../sortPanel/sotPanel';
import { Sticky } from '../../styles/components/sticky';
import CardGame from './cardGame';
import { ListContainer } from './listGamesStyle';
import { ChangeParamsType, GamesParamsType, GameType, sortParamLabelType } from '../../types';

type ListGameProps = {
  listGames: GameType[],
  listLoading: boolean,
  loadGamesList: () => void,
  nextPage: string | null,
  searchValue: GamesParamsType['search'],
  isNeedUpdateList: boolean,
  sortParams: sortParamLabelType[],
  sortValue:  GamesParamsType['ordering'],
  sortOrder: GamesParamsType['order']
  handleChangeParams: ChangeParamsType
}

const ListGames: FC<ListGameProps> = ({
  listGames,
  listLoading,
  loadGamesList,
  nextPage,
  searchValue,
  isNeedUpdateList,
  sortParams,
  sortValue,
  sortOrder,
  handleChangeParams
}) => {
  const listContainer = useRef<HTMLUListElement>(null);
  const top = useRef<HTMLDivElement | null>(null);

  if (isNeedUpdateList && top.current !== null) {
    top.current.scrollIntoView(false);
  }
  useEffect(() => {
    if(listContainer.current !== null) {
      const htmlListCards = listContainer.current?.children;
      if (htmlListCards.length > 0) {
        const lastEllementIndex = htmlListCards.length - 1;
        const options = {
          threshold: 0
        };
        const callback: IntersectionObserverCallback = (entries, observer) => {
          const enrtry = entries[0];
          if (enrtry.isIntersecting && nextPage) {
            loadGamesList();
          }
          if (nextPage === null) {
            observer.disconnect();
          }
        };

        const observer = new IntersectionObserver(callback, options);
        // не знаю как решить проблему с ошибкой:
        //  (Аргумент типа "Element | null" нельзя назначить параметру типа "Element".)
        // @ts-ignore: Unreachable code error
        observer.observe(htmlListCards.item(lastEllementIndex));


        return () => observer.disconnect();
      }
    }
  }, [ listGames ]);

  return (
    <div className="customScroll">
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
          sortOrder={sortOrder}
          handleChangeParams={ handleChangeParams }
        />
      </Sticky>
      <ListContainer
        ref={ listContainer }
      >
        { listGames.length !== 0
          ? listGames.map(game => (
            <CardGame
              key={ game.id }
              game={ game }
            />
            ))
          : <Title>Список пуст</Title>
        }
        { listLoading && <Title>Loading ...</Title> }
      </ListContainer>
    </div>
  );
};

export default ListGames;