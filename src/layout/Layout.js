import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
`;


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700&subset=latin-ext');
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.7;
    font-family: 'Lora';
    background-color: #f8f8f8;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <StyledWrapper>
      {children}
    </StyledWrapper>
  </Fragment>
);

export default Layout;
