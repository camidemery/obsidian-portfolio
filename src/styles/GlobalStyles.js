import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/poppins';
import bg from '../images/star-background.svg';

const GlobalStyles = createGlobalStyle`
    ${normalize}
    :root {
      --purple: #8A4FFF;
      --lavender: #C3BEF7;
      --alice: #E5ECF4;
      --mint: #EFFFFA;
      --white: #ffffff;
      --black: #000000;

    }
    * {

      box-sizing: border-box;
    }

    html {
      background-image: url(${bg});
      background-color: var(--mint);
      margin: 3rem;
    }

    body {
        font-size: 1rem;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        color: var(--purple);
        line-height: 1.5rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
        }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
    }

    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
    }

    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2.25rem;
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    hr {
        margin: 3rem auto;
        border-width: .05rem;
        opacity: 0.1;
      }

`;

export default GlobalStyles;
