import React from 'react';
import { Link } from 'gatsby';

// CSS
import './Header.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function callSidebar() {
  const sidebar = document.querySelector('.App');
  sidebar.classList.toggle('slide');
}

function hamburger() {
  return (
    <div className="column is-2">
      <div className="navbar-brand">
        <button
          type="button"
          className="navbar-burger"
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
    <div className="column is-8 has-text-centered">
      <Link to="/">
        <h6 className="subtitle is-6">huskyhoochu.com</h6>
      </Link>
    </div>
  );
}

function search() {
  return (
    <div className="column is-2 has-text-right">
      <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
}

export default () => (
  <div className="columns is-mobile is-vcentered">
    {hamburger()}
    {title()}
    {search()}
  </div>
);
