import styled, { css } from 'styled-components';
import minireset from 'minireset.css/minireset.min.css';

// Styled
import StyledGreyOut from '../components/grey_out/StyledGreyOut';
import StyledHeader from '../components/header/StyledHeader';

const resetCSS = css`
  ${minireset}
`;

const Canvas = styled.div`
  position: relative;
  transition: 0.5s ease;
`;

const App = styled.div.attrs({
  id: 'App',
})`
  ${resetCSS}
  font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 300;
  color: #263238;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 1rem 0;
  }

  strong {
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.75rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: black;
  }

  p {
    margin-bottom: 1rem;
  }

  &.slide {
    overflow: hidden;

    ${StyledGreyOut.GreyOut} {
      height: 100%;
      opacity: 1;
    }

    ${StyledHeader.Burger} {
      left: -3.25rem;
    }

    ${Canvas} {
      height: 100vh;
      transform: translate3d(19rem, 0, 0);
    }
  }
`;

export default {
  App,
  Canvas,
};
