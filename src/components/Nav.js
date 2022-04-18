import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--mint);
  padding: 1rem;
  .logo {
    position: fixed;
    top: 0.5rem;
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1rem;
    list-style: none;
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    align-items: center;
  }
`;

export default function Nav() {
  return (
    <NavStyled>
      <div className="logo">
        <Link to="/">
          <StaticImage
            src="../images/sm-io-logo.svg"
            alt="logo"
            placeholder="blured"
            width={75}
          />
        </Link>
      </div>
      <ul>
        <li>Other link</li>
        <li>Other link</li>
        <li>Other link</li>
      </ul>
    </NavStyled>
  );
}
