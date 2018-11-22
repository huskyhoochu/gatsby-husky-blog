import styled from 'styled-components';
import StyledBasic from '../../layouts/StyledBasic';

const CategoryTitle = styled(StyledBasic.BasicH2)`
  color: rebeccapurple;
  text-align: center;
`;

const PostWrapper = styled(StyledBasic.BasicFlexWrapper)`
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
`;

const PostBody = styled.article`
  max-width: 45%;
  margin: 1rem;

  @media (max-width: 1360px) {
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media (max-width: 688px) {
    max-width: 100%;
  }
`;

const PostThumb = styled.img.attrs({
  className: 'thumbItem',
})`
  width: 100%;
  height: auto;
  background-color: rebeccapurple;
  transition: 0.5s ease;

  &.move {
    opacity: 0.7;
    transform: translateY(-0.5rem);
  }
`;

const PostMetaData = styled(StyledBasic.BasicP)`
  margin: 1rem 0;
  font-weight: 400;
  color: rebeccapurple;
`;

const PostExcerpt = styled(StyledBasic.BasicP)`
  color: ${StyledBasic.BasicColor};
`;

export default {
  CategoryTitle,
  PostWrapper,
  PostBody,
  PostThumb,
  PostMetaData,
  PostExcerpt,
};
