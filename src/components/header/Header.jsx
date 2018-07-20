import React from 'react';
import { Link } from 'gatsby';

// CSS
import './Header.css';
import './hamburgers.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Methods
export function callSidebar() {
  const sidebar = document.querySelector('.App');
  sidebar.classList.toggle('slide');

  const burger = document.querySelector('.hamburger--collapse');
  burger.classList.toggle('is-active');
}

function hamburger() {
  return (
    <div className="side-menu">
      <button
        id="burger"
        type="button"
        className="hamburger hamburger--collapse"
        onClick={() => callSidebar()}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </button>
    </div>
  );
}

function title() {
  return (
    <div className="home-menu">
      <Link to="/">
        <h6 className="">huskyhoochu.com</h6>
      </Link>
    </div>
  );
}

function search() {
  return (
    <div className="search-menu">
      <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
}

export default () => (
  <nav className="nav-bar">
    {hamburger()}
    {title()}
    {search()}
  </nav>
);
