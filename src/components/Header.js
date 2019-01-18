import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 40px;
  color: #fdc22a;
  text-transform: uppercase;
  margin-left: 40px;
  margin-bottom: 30px;
  span {
    color: #b6b6b6;
  }
`;

const Header = () => (
  <H1>
      beer
    <span>list</span>
  </H1>
);

export default Header;
