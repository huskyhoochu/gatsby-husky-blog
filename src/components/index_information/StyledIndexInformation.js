import styled from 'styled-components';

const InfoWrapper = styled.div`
  position: relative;
  z-index: 3;
  color: floralwhite;
  margin: 0 7rem;
  text-align: center;
  display: flex;
  height: 30rem;
  transition: transform 0.5s ease;

  @media (max-width: 414px) {
    margin: 0 1rem;

    h6 {
      font-size: 1rem;
    }
  }
`;

const InfoInner = styled.div`
  align-self: center;
`;

const Quote = styled.h6`
  font-weight: 100 !important;
  font-style: italic;
`;

export default {
  InfoWrapper,
  InfoInner,
  Quote,
};
