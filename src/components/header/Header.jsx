import React from 'react';
import { Link } from 'gatsby';

// CSS
import './Header.css';
import faSearch from '../../assets/icons/search-solid.svg';

// Methods
export function callSidebar() {
  const sidebar = document.querySelector('.App');
  sidebar.classList.toggle('slide');

  const burger = document.querySelector('#burger');
  burger.classList.toggle('is-active');
}

function hamburger() {
  return (
    <div className="side-menu">
      <button type="button" id="burger" onClick={() => callSidebar()}>
        <span />
        <span />
        <span />
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
      <object className="icon" data={faSearch} type="image/svg+xml">
        현재 브라우저는 iframe을 지원하지 않습니다.
      </object>
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
