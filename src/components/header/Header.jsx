import React from 'react';
import { Link } from 'gatsby';

// CSS
import faSearch from '../../assets/icons/search-solid.svg';

// Styled
import Styled from './StyledHeader';

export const callSidebar = () => {
  const sidebar = document.querySelector('#App');
  sidebar.classList.toggle('slide');

  const burger = document.querySelector('#burger');
  burger.classList.toggle('is-active');
};

class Hamburger extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Styled.MenuSection>
        <Styled.Burger onClick={callSidebar}>
          <span />
          <span />
          <span />
        </Styled.Burger>
      </Styled.MenuSection>
    );
  }
}

const Title = () => (
  <div className="home-menu">
    <Link to="/">
      <Styled.HomeTitle>huskyhoochu.com</Styled.HomeTitle>
    </Link>
  </div>
);

const Search = () => (
  <Styled.MenuSection>
    <Styled.SearchIcon data={faSearch}>
      현재 브라우저는 iframe을 지원하지 않습니다.
    </Styled.SearchIcon>
  </Styled.MenuSection>
);

const HeaderWrapper = () => (
  <Styled.NavBar>
    <Hamburger />
    <Title />
    <Search />
  </Styled.NavBar>
);

export default HeaderWrapper;
