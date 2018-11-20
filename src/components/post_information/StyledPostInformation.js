import styled from 'styled-components';

const IconButton = styled.button.attrs({
  type: 'button',
  disabled: 'loading',
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

export default {
  IconButton,
  Icon,
};
