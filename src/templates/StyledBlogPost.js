import styled from 'styled-components';

const ContentsWrapper = styled.article`
  padding: 4rem 1rem;

  @media (max-width: 414px) {
    padding: 2rem 0;
  }
`;

const Content = styled.div`
  margin: 1rem;
  line-height: 1.75;
  text-indent: 1rem;
  font-size: 1.2rem;
  font-weight: 300;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-indent: 0;
  }

  blockquote {
    border-left: 0.4rem solid lightgray;
    margin: 1rem 1rem 1rem 0;
    padding: 0.4rem 0.8rem;
    font-size: 1.1rem;
  }

  @media (max-width: 414px) {
    font-size: 1rem;

    blockquote {
      margin-left: 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

export default {
  ContentsWrapper,
  Content,
};
