import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Sticky } from '../../styles/components/sticky';
import { GameType } from '../../types';

const PageGameBlock = styled.section`
  z-index: 1000;
  margin-bottom: 3rem;

  .top{
    display: flex;
    /* justify-content: space-around; */
  }
  h1{
    color: white;
    text-align: center;
    font-size: 4rem;
    margin-top: 40vh;
  }

  .rating{
    margin-left: auto;
    margin-right: 0;
    font-size: 4rem;
    color: #f5e556;
    text-shadow: 0 0 2px #bca903;
  }
  .arrow{
    display: inline-block;
    font-size: 50px;
    line-height: 30px;
    margin-left: 20px;
    width: 10%;
    text-shadow: 0 0 5px white;
    transform: scaleX(1.2);
    transition: all .15s linear;
    cursor: pointer;
    &:hover{
      transform: scaleX(1.5);
      /* transform: scaleY(1.1); */
      color: #f5e556;
      cursor: pointer;
      transition: all .15s linear;
    }
  }

  .description {
    color: white;

    span{
      display: block;
    }
  }

  .website{
    color: #617af9;
    text-shadow: none;
    font-size: 1.5rem;
    line-height: 1.8rem;
    transition: all .2s ease-in-out;
    &:hover{
      color: #98a9fa;
      text-shadow: 0 0 1px #98a9fa;
      font-size: 1.51rem;
    }
  }
`;

type PageGameProps = {
  game: GameType
}

const PageGame: FC<PageGameProps> = ({ game }) => {
  const description = game.description_raw.split('\n');
  return (
    <PageGameBlock className="container">
      <Sticky>
        <div className="top">
          <Link href={ '/' } ><a className="arrow">&#8592;</a></Link>
          <div className="rating">&#10029;{ game.rating }/5</div>
        </div>
      </Sticky>
      <h1>{ game.name } </h1>
      <p className="description">
        { description.map((text, i) => <span key={ 'text' + i }> { text }</span>) }
      </p>
      <a className="website" href={ game.website } target={ '_blank' } rel="noreferrer">Перейти на официальный сайт</a>
    </PageGameBlock>
  );
};

export default PageGame;