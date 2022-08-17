import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  h1{
    font-size: 3rem;
    color: green;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 5rem;
      color: blue;
    }
  }
  a{
    color: red;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

const GameList = () => {
  return (
    <Container>
      <h1>GameList</h1>
    </Container>
  );
}

export default GameList;