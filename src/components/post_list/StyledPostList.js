import styled from 'styled-components';
import StyledBasic from '../../layouts/StyledBasic';

const CategoryTitle = styled.h6`
  margin-top: 0 !important;
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

const PostTitle = styled.h4`
  margin-bottom: 0 !important;
`;

const PostSubtitle = styled.h6`
  margin-top: 0 !important;
  color: dimgrey;
  font-weight: 100 !important;
`;

const PostMetaData = styled.p`
  color: rebeccapurple;
  font-weight: 400;
`;

const PostExcerpt = styled.p`
  color: dimgrey;
`;

export default {
  CategoryTitle,
  PostWrapper,
  PostBody,
  PostThumb,
  PostTitle,
  PostSubtitle,
  PostMetaData,
  PostExcerpt,
};
