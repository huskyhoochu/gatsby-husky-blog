import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentsWrapper = styled.div`
  padding: 4rem 1rem;

  @media (max-width: 414px) {
    padding: 2rem 0;
  }
`;

export default {
  FlexWrapper,
  ContentsWrapper,
};
