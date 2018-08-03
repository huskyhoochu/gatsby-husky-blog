import styled from 'styled-components';

const RightSection = styled.section`
  background-color: white;
  position: relative;
  z-index: 4;
  flex: 1;
  width: 50vw;

  @media (max-width: 1024px) {
    width: 100vw;
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

const ContentsWrapper = styled.div`
  padding: 4rem 1rem;

  @media (max-width: 414px) {
    padding: 2rem 0;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
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

const InfoInner = styled.article`
  align-self: center;
  text-align: center;
`;

const Content = styled.article`
  margin: 1rem;
  line-height: 1.75;
  text-indent: 1rem;
  font-size: 1.2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-indent: 0;
  }

  pre {
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }

  pre,
  code {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
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
  RightSection,
  FlexWrapper,
  ContentsWrapper,
  InfoWrapper,
  InfoInner,
  Content,
};
