import styled from 'styled-components';

const InfoWrapper = styled.div`
  color: floralwhite;
  margin: 0 7rem;
  text-align: center;
  display: flex;
  height: calc(100vh - 10rem);
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
