import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  width: 50vw;
  z-index: 3;
  top: 0;
  background-color: transparent;

  @media (max-width: 1024px) {
    width: 100vw;
    background-color: white;
    opacity: 0.9;
    box-shadow: 0 4px 8px -6px black;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

const MenuSection = styled.div`
  width: 3.25rem;
  text-align: center;
`;

const HomeTitle = styled.h6`
  margin: 0 !important;
`;

const SearchIcon = styled.object.attrs({
  type: 'image/svg+xml',
})`
  width: 1rem;
  height: 1rem;
`;

const Burger = styled.button.attrs({
  id: 'burger',
  type: 'button',
})`
  width: 1rem;
  height: 1rem;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1.125rem;
  padding: 0;
  transform: rotate(0deg);
  transition: 0.5s ease;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    position: absolute;
    height: 0.0625rem;
    width: 100%;
    background: gray;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;

    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 0.375rem;
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: 0.75rem;
      transform-origin: left center;
    }
  }

  &.is-active span {
    &:nth-child(1) {
      transform: rotate(45deg);
      top: 0.125rem;
      left: 0.125rem;
    }

    &:nth-child(2) {
      width: 0;
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
      top: 0.8125rem;
      left: 0.125rem;
    }
  }
`;

export default {
  NavBar,
  MenuSection,
  HomeTitle,
  SearchIcon,
  Burger,
};
