import styled, { css } from 'styled-components';
import minireset from 'minireset.css/minireset.min.css';

// Styled
import StyledBasic from './StyledBasic';
import StyledGreyOut from '../components/grey_out/StyledGreyOut';
import StyledHeader from '../components/header/StyledHeader';

const resetCSS = css`
  ${minireset}
`;

const Canvas = styled(StyledBasic.BasicRelativeWrapper)`
  transition: 0.5s ease;
`;

const App = styled(StyledBasic.BasicRelativeWrapper).attrs({
  id: 'App',
})`
  ${resetCSS}
  font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 300;
  color: ${StyledBasic.BasicColor};

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: black;
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
