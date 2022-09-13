import { useState, useEffect, FC } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import FilterPanel from '../components/filterPanel/filterPanel';
import ListGames from '../components/listGames/listGames';
import platformService from '../services/platform.service';
import gamesService from '../services/games.service';
import { ChangeParamsType, GamesParamsType, GameType, PlatformType, sortParamLabelType } from '../types';
import { sortParamLabels } from '../constants/sortParamLabels';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await Promise.all(
      [
        gamesService.getGames({ page: 1, page_size: 10 }),
        platformService.getPlatformParent()
      ]
    ).then((res) => res);
    console.log('response', response);
    const [ games, platform ] = response;
    return {
      props: {
        gamesListData: games.data.results,
        platformsListData: platform.data.results,
        nextPageData: games.data.next
        // gggg: response[0].config.params
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

type HomeProps = {
  gamesListData: GameType[],
  platformsListData: PlatformType[],
  nextPageData: string | null
}

const Home: FC<HomeProps> = ({ gamesListData,  platformsListData, nextPageData }) => {
  // const sortParams: rrr[] = [ 'released', 'rating' ];
  const sortParams = Object.keys( sortParamLabels ) as unknown as sortParamLabelType[];
  const platformIds = platformsListData.map((p: PlatformType) => p.id);
  const [ listGames, setListGames ] = useState(gamesListData);
  const [ isNeedUpdateList, setNeedUpdateList ] = useState(false);
  const [ nextPage, setNextPage ] = useState<string | null>(nextPageData || null);
  const [ isListLoading, setIsListLoading ] = useState(false);
  const [ params, setParams ] = useState<GamesParamsType>(
    {
      page: 1,
      page_size: 10,
      parent_platforms: platformIds,
      search: '',
      order: '-',
      ordering: ''
    }
  );
  // useEffect(() => console.log('response', gggg), []);
  // console.log('sortParams', sortParams);
  // console.log('gamesListData', gamesListData);
  // console.log('platformData', platformsListData);
  // console.log('' );

  const handleChangeParams: ChangeParamsType = (queryParam, value) => {
    setParams((prev) => ({ ...prev, [queryParam]: value, page: 1 }));
    setNeedUpdateList(true);
  };

  const loadGamesList = async (isNewList = false) => {
    setIsListLoading(true);
    try {
      const getNumberOfPage = isNewList ? 1 : params.page + 1;
      const response = await gamesService.getGames(
        {
          ...params,
          page: getNumberOfPage,
          ordering: params.order + params.ordering,
          parent_platforms: params.parent_platforms.join()
        }
        );
        console.log('resp next', response);
        const { results, next } = response.data;
      setListGames((prev) => isNewList ? results : [ ...prev, ...results ]);
      setParams(prev => ({ ...prev, page: getNumberOfPage }));
      setNextPage(next);
      setIsListLoading(false);
    } catch (error) {
      setListGames([ ...listGames ]);
      setIsListLoading(false);
    }
  };

  useEffect(() => {
      if (isNeedUpdateList && isListLoading === false) {
        console.log('вызов обновления');

        loadGamesList(true);
        setNeedUpdateList(false);
      } else {
        console.log('абажите!');
      }
  }, [ isNeedUpdateList, isListLoading ]);

  return (
    <Main>
      <FilterPanel
        platformList={ platformsListData }
        filteredIds={ params.parent_platforms }
        handleChangeParams={ handleChangeParams }
      />
      <ListGames
        listGames={ listGames }
        listLoading={ isListLoading }
        nextPage={ nextPage }
        loadGamesList={ loadGamesList }
        isNeedUpdateList={ isNeedUpdateList }
        searchValue={ params.search }
        sortParams={ sortParams }
        sortOrder={params.order}
        sortValue={ params.ordering }
        handleChangeParams={ handleChangeParams }
      />
    </Main>
  );
};

const Main = styled.main`
    height: 100%;
    background: repeating-linear-gradient(45deg, #bfbfbf 1rem, rgba(0,0,0,.3) 2rem, rgba(0,0,0,.2) 3rem,  #fcfcfc 4rem, #bfbfbf 5rem);
    background-size: 200% 200%;
    background-attachment: local;
    display: grid;
    grid-template: 1fr / minmax(200px, 20%) 1fr;
    overflow: hidden;
  `;
export default Home;
