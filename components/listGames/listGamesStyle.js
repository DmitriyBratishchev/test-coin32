import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  justify-items: stretch;
  align-items: center;
  height: inherit;
  padding: 0 5%;
  @media (min-width: 768px) {
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat( 2, 1fr);
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .card {
    position: relative;
    border-radius: 8px;
    border: 1px solid gold;
    overflow: hidden;
    padding-top: 66%;
    .bg_image{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }



  .card::before {
    content: '';
    display: block;
    width: 100%;
  };
`;
