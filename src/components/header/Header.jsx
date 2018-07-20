import React from 'react';
import { Link } from 'gatsby';

// CSS
import './Header.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Methods
export function callSidebar() {
  const sidebar = document.querySelector('.App');
  sidebar.classList.toggle('slide');
}

function hamburger() {
  return (
    <div className="">
      <div className="">
        <button
          id="burger"
          type="button"
          className=""
          aria-label="menu"
          aria-expanded="false"
          onClick={() => callSidebar()}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function title() {
  return (
    <div className="">
      <Link to="/">
        <h6 className="">huskyhoochu.com</h6>
      </Link>
    </div>
  );
}

function search() {
  return (
    <div className="">
      <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
}

export default () => (
  <div className="">
    {hamburger()}
    {title()}
    {search()}
  </div>
);
