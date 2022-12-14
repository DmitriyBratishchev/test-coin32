import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/globalStyled';
import Footer from './footer';
import Header from './header';

const Wraper = styled.div`
  min-height: 100vh;
  max-height: 100vh ;
  display: grid;
  grid-template: 80px 1fr minmax(35px, auto) / 1fr;
  overflow: hidden;

`;

type LayoutProps = {
  children: ReactNode
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Wraper>
      <GlobalStyle />
      <Header />
      { children }
      <Footer />
    </Wraper>
  );
};

export default Layout;