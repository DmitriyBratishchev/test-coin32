import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const GameList: FC = () => {
  return (
    <Container>
      <h1>GameList</h1>
    </Container>
  );
};

export default GameList;