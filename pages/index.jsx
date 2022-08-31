import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterPanel from '../components/filterPanel/filterPanel';
import ListGames from '../components/listGames/listGames';
import platformService from '../services/platform.service';
import gamesService from '../services/games.service';

export const getStaticProps = async () => {
  try {
    const response = await Promise.all(
      [
        gamesService.getGames({ page: 1, page_size: 10 }),
        platformService.getPlatformParent()
      ]
    ).then((res) => res, () => null);
    console.log('response', response);
    const [games, platform] = response;
    return {
      props: { data: games.data, results: games.data.results, platformData: platform.data, gggg: response[0].config.params }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

function Home({ results, data, platformData, gggg }) {
  const platformIds = platformData.results.map((p) => p.id);
  const [listGames, setListGames] = useState(results);
  const [isNeedUpdateList, setNeedUpdateList] = useState(false);
  const [nextPage, setNextPage] = useState(data.next || null);
  const [listLoading, setListLoading] = useState(false);
  const [params, setParams] = useState(
    {
      page: 1,
      page_size: 10,
      parent_platforms: platformIds,
      search: '',
      ordering: ''
    }
  );
  useEffect(() => console.log('response', gggg), [])

  const getNewListGames = async () => {
    try {
      const { data } = await gamesService.getGames(
        {
          ...params,
          page: 1,
          parent_platforms: params.parent_platforms.join()
        }
      );
      const { next, results } = data;
      setNextPage(next);
      setListGames(results);
    } catch (error) {
      return null;
    }
  };

  const handleChangeParams = (queryParam, value) => {
    setParams((prev) => ({ ...prev, [queryParam]: value }));
    setNeedUpdateList(true);
  };

  const fetchData = async () => {
    setListLoading(true);
    try {
      const response = await gamesService.getGames(
        {
          ...params,
          page: params.page + 1,
          parent_platforms: params.parent_platforms.join()
        }
      );
      console.log('resp next', response);
      const { results, next } = response.data;
      setListGames((prev) => [...prev, ...results]);
      setParams(prev => ({ ...prev, page: prev.page + 1 }))
      setNextPage(next);
      setListLoading(false);
    } catch (error) {
      setListGames([...listGames]);
      setListLoading(false);
    }
  };

  useEffect(() => {
    if (isNeedUpdateList) {
      getNewListGames();
      setNeedUpdateList(false);
    }
  }, [params]);

  return (
    <Main>
      <FilterPanel
        platformList={ platformData }
        filteredIds={ params.parent_platforms }
        handleCangeParams={ handleChangeParams }
      />
      <ListGames
        listGames={ listGames }
        listLoading={ listLoading }
        nextPage={ nextPage }
        fetchData={ fetchData }
        isNeedUpdateList={ isNeedUpdateList }
        searchValue={ params.search }
        sortParams={ ['released', 'rating'] }
        sortValue={ params.ordering }
        handleChangeParams={ handleChangeParams }
      />
    </Main>
  );
}

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
