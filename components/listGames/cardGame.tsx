import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { GameType } from '../../types';
import { getImageLinkMinified } from '../../utils/getImageLinkMinified';

const CardGameBlock = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  border-radius: 8px;
  border: 1px solid gold;
  overflow: hidden;
  padding-top: 66%;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }

  .bg_image{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
const CardInfo = styled.div`
  background-color: rgba(0,0,0,.6);
  position: absolute;
  display: grid;
  grid-template: 1fr 30px/ 1fr 60px ;
  width: 100%;
  height: min-content;
  bottom: 0;

  .name{
    color: #dddddd;
    margin: 0 10px;
  }

  .rating{
    color: #f1f118;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    width: max-content;
    grid-column: 2;
    grid-row: 1/3;
  }
  .released{
    color: #bd90fb;
    margin-left: 10px;
  }
`;

type CardGameProps = {
  game: GameType
}

const CardGame: FC<CardGameProps> = ({ game }) => {
  return (
    <CardGameBlock>
      <Link href={ `game/${game.slug}` }>
        <a>
          <div
            className="bg_image"
            style={ { backgroundImage: `url(${getImageLinkMinified(game.background_image)})`, backgroundSize: 'cover', backgroundPosition: 'center center' } }
          >
          </div>
          <CardInfo>
            <h3 className="name">{ game.name }</h3>
            <div className="rating">{ game.rating }</div>
            <div className="released">{ game.released }</div>
          </CardInfo>
        </a>
      </Link>
    </CardGameBlock>
  );
};

export default CardGame;