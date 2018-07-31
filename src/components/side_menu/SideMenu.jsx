import React from 'react';
import { Link } from 'gatsby';

// Styled
import Styled from './StyledSideMenu';

// Methods
import { callSidebar } from '../header/Header';

export default () => (
  <Styled.MenuWrapper>
    <Styled.Menu>
      <Styled.MenuList>
        <li>
          <Link to="/" onClick={() => callSidebar()}>
            Latest
          </Link>
        </li>
      </Styled.MenuList>
      <Styled.MenuLabel>Programming</Styled.MenuLabel>
      <Styled.MenuList>
        <li>
          <Link to="/">Frontend</Link>
        </li>
        <li>
          <Link to="/">Backend</Link>
        </li>
      </Styled.MenuList>
      <Styled.MenuLabel>Literature</Styled.MenuLabel>
      <Styled.MenuList>
        <li>
          <Link to="/categories/essay" onClick={() => callSidebar()}>
            Essay
          </Link>
        </li>
        <li>
          <Link to="/categories/review" onClick={() => callSidebar()}>
            Review
          </Link>
        </li>
      </Styled.MenuList>
      <Styled.MenuLabel>About</Styled.MenuLabel>
      <Styled.MenuList>
        <li>
          <Link to="/">About Me</Link>
        </li>
      </Styled.MenuList>
    </Styled.Menu>
  </Styled.MenuWrapper>
);
