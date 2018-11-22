import styled from 'styled-components';
import StyledBasic from '../../layouts/StyledBasic';

const IconButton = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img.attrs({
  alt: 'share-button',
})`
  width: 1.5rem;
  height: 1.5rem;
`;

const PostMetaData = styled(StyledBasic.BasicP)`
  margin: 1rem 0;
`;

export default {
  IconButton,
  Icon,
  PostMetaData,
};
