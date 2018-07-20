import React from 'react';
import { Link } from 'gatsby';

// CSS
import './SideMenu.css';

export default () => (
  <aside className="menu-wrapper">
    <div className="menu">
      <ul className="menu-list">
        <li>
          <Link to="/">Latest</Link>
        </li>
      </ul>
      <p className="menu-label">Programming</p>
      <ul className="menu-list">
        <li>
          <Link to="/">Frontend</Link>
        </li>
        <li>
          <Link to="/">Backend</Link>
        </li>
      </ul>
      <p className="menu-label">Literature</p>
      <ul className="menu-list">
        <li>
          <Link to="/">Essay</Link>
        </li>
        <li>
          <Link to="/">Review</Link>
        </li>
      </ul>
      <p className="menu-label">About</p>
      <ul className="menu-list">
        <li>
          <Link to="/">About Me</Link>
        </li>
      </ul>
    </div>
  </aside>
);
