import styled from 'styled-components';
import StyledBasic from '../../layouts/StyledBasic';

const RightSection = styled(StyledBasic.BasicRelativeWrapper).attrs({
  id: 'right',
})`
  background-color: white;
  z-index: 0;
  flex: 1;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
    z-index: 4;
  }
`;

const FlexWrapper = styled(StyledBasic.BasicFlexWrapper)`
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentsWrapper = styled(StyledBasic.BasicRelativeWrapper)`
  padding: 4rem 1rem;

  @media (max-width: 414px) {
    padding: 2rem 0;
  }
`;

const InfoWrapper = styled(StyledBasic.BasicRelativeWrapper)`
  z-index: 3;
  color: floralwhite;
  margin: 0 7rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;

  @media (max-width: 414px) {
    margin: 0 1rem;

    h2 {
      font-size: 2rem;
    }

    h6 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const InfoInner = styled(StyledBasic.BasicRelativeWrapper)`
  align-self: center;
  text-align: center;
`;

export default {
  RightSection,
  FlexWrapper,
  ContentsWrapper,
  InfoWrapper,
  InfoInner,
};
