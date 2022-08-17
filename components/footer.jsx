import styled from "styled-components";

const FooterBlock = styled.footer`

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 50px;
  &:hover{
    height: fit-content;
    min-height: 100px;
  }
`

const Footer = () => {
  return (
    <FooterBlock>
      <div>Информация</div>
      <div>
        <div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div><div>Информация</div>
        Контакты
      </div>
    </FooterBlock>
  );
}

export default Footer;