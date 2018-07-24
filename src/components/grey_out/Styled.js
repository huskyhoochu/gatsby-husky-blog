import styled from 'styled-components';

const GreyOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 0;
  opacity: 0;
  background-color: transparent;
  transition: background-color 0.5s ease;
`;

export default {
  GreyOut,
};
