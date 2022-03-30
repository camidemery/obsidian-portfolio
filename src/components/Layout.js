import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
    </div>
  );
}
