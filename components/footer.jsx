import styled from "styled-components";

const FooterBlock = styled.footer`

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 40px;
  background-color: #333333;
  color: #aaaaaa;
  padding-top: 10px;
  &:hover{
    height: fit-content;
    min-height: 100px;
  }

  .hideText{
    font-size: 1.5rem;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`

const Footer = () => {
  return (
    <FooterBlock>
      <div>Информация</div>
      <div className="hideText">Тут стандартная информация футера.</div>
      <div>
        Контакты
      </div>
    </FooterBlock>
  );
}

export default Footer;