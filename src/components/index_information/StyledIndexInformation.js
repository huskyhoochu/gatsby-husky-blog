import styled from 'styled-components';

const InfoWrapper = styled.div`
  position: relative;
  z-index: 3;
  color: floralwhite;
  margin: 0 7rem;
  text-align: center;
  display: flex;
  height: calc(100vh - 10rem);
  transition: transform 0.5s ease;
`;

const InfoInner = styled.div`
  align-self: flex-end;
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
