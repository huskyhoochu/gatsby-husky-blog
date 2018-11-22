import styled from 'styled-components';
import StyledBasic from '../../layouts/StyledBasic';

const MenuWrapper = styled(StyledBasic.BasicAbsoluteWrapper).attrs({
  id: 'side',
})`
  width: 19rem;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translate3d(-100%, 0, 0);
`;

const Menu = styled(StyledBasic.BasicRelativeWrapper)`
  margin-top: 1.75rem;
  padding: 1.5rem;
  line-height: 2.5;
`;

const MenuList = styled.ul`
  font-weight: 400;
  padding-left: 1rem;

  li {
    transform: translateX(0);
    transition: 0.25s ease;

    &:hover {
      transform: translateX(0.25rem);
      transition: 0.25s ease;

      > a {
        color: rebeccapurple;
      }
    }
  }
`;

const Copyright = styled(StyledBasic.BasicAbsoluteWrapper)`
  bottom: 0;
  left: 0;
  margin-bottom: 1.75rem;
  padding: 1.5rem;

  > a {
    color: rebeccapurple !important;
  }
`;

export default {
  MenuWrapper,
  Menu,
  MenuList,
  Copyright,
};
