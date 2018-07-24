import styled from 'styled-components';

const Canvas = styled.div`
  position: relative;
  transition: 0.5s ease;
`;

const App = styled.div.attrs({
  className: 'App',
})`
  &.slide {
    overflow: hidden;

    #grey-out {
      height: 100%;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }

    #burger {
      left: -3.25rem;
    }

    ${Canvas} {
      height: 100vh;
      transform: translate3d(19rem, 0, 0);
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default {
  App,
  Canvas,
  FlexWrapper,
};
