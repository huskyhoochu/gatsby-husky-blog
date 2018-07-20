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
  <div className="App">
    <div className="canvas">
      <SideMenu />
      <div className="grid-wrapper">
        <LeftSection />
        <RightSection contents={children} />
      </div>
      <GreyOut />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Layout;
