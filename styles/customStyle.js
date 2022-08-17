import styled from 'styled-components'

export const Title = styled.h1`
  color: pink;
  @media (min-width: 768px) {
    color: aqua;
    font-size: ${({size}) => size ? size + 'rem': '2rem'};
  }
`
