import React from 'react';
import { Link } from 'gatsby';

// Styled
import Styled from './StyledSideMenu';

// Methods
import { Hamburger } from '../header/Header';

class SideMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.callSidebar = Hamburger.callSidebar.bind(this);
  }

  render() {
    return (
      <Styled.MenuWrapper>
        <Styled.Menu>
          <Styled.MenuList>
            <li>
              <Link to="/" onClick={this.callSidebar}>
                Latest
              </Link>
            </li>
          </Styled.MenuList>
          <Styled.MenuLabel>Programming</Styled.MenuLabel>
          <Styled.MenuList>
            <li>
              <Link to="/categories/frontend" onClick={this.callSidebar}>
                Frontend
              </Link>
            </li>
            <li>
              <Link to="/">Backend</Link>
            </li>
          </Styled.MenuList>
          <Styled.MenuLabel>Literature</Styled.MenuLabel>
          <Styled.MenuList>
            <li>
              <Link to="/categories/essay" onClick={this.callSidebar}>
                Essay
              </Link>
            </li>
            <li>
              <Link to="/categories/review" onClick={this.callSidebar}>
                Review
              </Link>
            </li>
          </Styled.MenuList>
          <Styled.MenuLabel>About</Styled.MenuLabel>
          <Styled.MenuList>
            <li>
              <Link to="/about-me" onClick={this.callSidebar}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={this.callSidebar}>
                Privacy Policy
              </Link>
            </li>
          </Styled.MenuList>
        </Styled.Menu>
      </Styled.MenuWrapper>
    );
  }
}

export default SideMenu;
