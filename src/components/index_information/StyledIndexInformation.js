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

const InfoInner = styled.article`
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
