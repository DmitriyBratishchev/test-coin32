import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import PageGame from '../../components/pageGame/pageGame';
import gamesService from '../../services/games.service';
import { GameType } from '../../types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.params?.slug;
  if(!slug) {
    return {
      notFound: true
    };
  }
  if (typeof slug !== 'string') {
    return {
      notFound: true
    };
  }
  try {
    const { data } = await gamesService.getGameBuySlug(slug);
    if ('slug' in data && data?.redirect) {
      const { data: redirectData } = await gamesService.getGameBuySlug(data.slug);
      return {
        props: { game: redirectData }
      };
    }
    return {
      props: { game: data }
    };

  } catch (error) {
    return {
      notFound: true
    };
  }
};

type MainProps = {
  bgUrl: string
}

const Main = styled.main<MainProps>`
  position: relative;
  display: grid;
  grid-template: 1fr / minmax(15px, auto) minmax(auto, 1440px) minmax(15px,auto);
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: 100vw;
  background-position: center top;
  background-repeat: no-repeat;
  &::before{
    content: '';
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 1000%);
    z-index: 0;
    grid-column: 1/4;
    grid-row: 1;
  }

  .container{
    grid-column: 2/3;
    grid-row: 1;
  }
`;

type GameProps = {
  game: GameType
}

const Game: FC<GameProps> = ({ game }) => {
  return (
    <>
      <Head>
        <title>Test | { game.name || '' }</title>
      </Head>
      <Main
        className="customScroll"
        bgUrl={game.background_image}
      >
        <PageGame
          game={ game }
        />
      </Main>
    </>
   );
};

export default Game;