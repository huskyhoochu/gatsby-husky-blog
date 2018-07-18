import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Layout.css';

// Components
import SideMenu from '../side_menu/SideMenu';
import LeftSection from '../left_section/LeftSection';
import RightSection from '../right_section/RightSection';
import GreyOut from '../grey_out/GreyOut';

const Layout = ({ children }) => (
  <div id="canvas" className="columns is-desktop is-gapless">
    <SideMenu />
    <LeftSection />
    <RightSection contents={children} />
    <GreyOut />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
