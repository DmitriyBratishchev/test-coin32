import styled from "styled-components";


const HeaderBlock = styled.header`
  background: linear-gradient(270deg, #666666 0%, #669966 50%, #999999 100%);
  border-bottom: 2px solid transparent;
  border-image-source: linear-gradient(270deg, gold 0%, #8D929F 50%, gold 100%);
  border-image-slice: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeaderNav = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
  color: #cccccc;
  text-shadow: 0 0 2px #ffdc98;
`

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderNav>Тестовое Frontend разработчика: Дмитрия Братищева.</HeaderNav>
    </HeaderBlock>

  );
}

export default Header;