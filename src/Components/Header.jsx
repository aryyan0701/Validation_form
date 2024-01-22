import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>User Validation</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 25px;
  text-align: center;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-size: 30px;
`;

export default Header;
