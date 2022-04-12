import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

const StyledLayoutWrapper = styled.div`
  /* width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%; */
`;

export default function Layout({ children }) {
  return (
    <StyledLayoutWrapper>
      <GlobalStyles />
      <Nav />
      {children}
    </StyledLayoutWrapper>
  );
}
