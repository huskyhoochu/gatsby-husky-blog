import styled from 'styled-components';

const CategoryTitle = styled.h6`
  margin-top: 0 !important;
  color: rebeccapurple;
  text-align: center;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
`;

const PostBody = styled.article`
  width: 22rem;
  margin: 0 1rem;
`;

const PostDate = styled.p`
  color: rebeccapurple;
`;

const PostExcerpt = styled.p`
  color: dimgrey;
`;

export default {
  CategoryTitle,
  PostWrapper,
  PostBody,
  PostDate,
  PostExcerpt,
};
