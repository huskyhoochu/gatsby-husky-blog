import React from 'react';
import { Link } from 'gatsby';

// Styled
import Styled from './Styled';

export default () => (
  <Styled.MenuWrapper>
    <Styled.Menu>
      <Styled.MenuList>
        <li>
          <Link id="latest" to="/">
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
          <Link to="/">Essay</Link>
        </li>
        <li>
          <Link to="/">Review</Link>
        </li>
      </Styled.MenuList>
      <Styled.MenuLabel>About</Styled.MenuLabel>
      <Styled.MenuList>
        <li>
          <Link id="about" to="/">
            About Me
          </Link>
        </li>
      </Styled.MenuList>
    </Styled.Menu>
  </Styled.MenuWrapper>
);
