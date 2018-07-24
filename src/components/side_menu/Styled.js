import styled from 'styled-components';

const MenuWrapper = styled.aside`
  position: absolute;
  width: 19rem;
  height: 100vh;
  top: 0;
  left: 0;
  border: 1px solid salmon;
  transform: translate3d(-100%, 0, 0);
`;

const Menu = styled.div`
  margin-top: 1.75rem;
  padding: 1.5rem;
`;

const MenuList = styled.ul`
  line-height: 2;
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

const MenuLabel = styled.p`
  font-weight: 300;
  margin-bottom: 0;
  line-height: 3;
`;

export default {
  MenuWrapper,
  Menu,
  MenuList,
  MenuLabel,
};