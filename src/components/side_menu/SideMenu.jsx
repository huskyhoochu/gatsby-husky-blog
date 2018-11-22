import React from 'react';
import { Link } from 'gatsby';
import config from '../../data/SiteConfig';

// Styled
import StyledBasic from '../../layouts/StyledBasic';
import Styled from './StyledSideMenu';

// Methods
import { callSidebar } from '../header/Header';

class SideMenu extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Styled.MenuWrapper>
        <Styled.Menu>
          <Styled.MenuList>
            <li>
              <Link to="/" onClick={callSidebar}>
                Latest
              </Link>
            </li>
          </Styled.MenuList>
          <StyledBasic.BasicP>Programming</StyledBasic.BasicP>
          <Styled.MenuList>
            <li>
              <Link to="/categories/frontend" onClick={callSidebar}>
                Frontend
              </Link>
            </li>
            <li>
              <Link to="/">Backend</Link>
            </li>
          </Styled.MenuList>
          <StyledBasic.BasicP>Literature</StyledBasic.BasicP>
          <Styled.MenuList>
            <li>
              <Link to="/categories/essay" onClick={callSidebar}>
                Essay
              </Link>
            </li>
            <li>
              <Link to="/categories/review" onClick={callSidebar}>
                Review
              </Link>
            </li>
          </Styled.MenuList>
          <StyledBasic.BasicP>About</StyledBasic.BasicP>
          <Styled.MenuList>
            <li>
              <Link to="/about-me" onClick={callSidebar}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" onClick={callSidebar}>
                Privacy Policy
              </Link>
            </li>
          </Styled.MenuList>
        </Styled.Menu>
        <Styled.Copyright>
          {config.copyright}
          <a
            href="https://unsplash.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <strong>Unsplash</strong>.
          </a>
        </Styled.Copyright>
      </Styled.MenuWrapper>
    );
  }
}

export default SideMenu;
