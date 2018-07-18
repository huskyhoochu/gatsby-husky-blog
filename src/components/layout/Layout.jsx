import React from 'react';

// CSS
import './Layout.css';

// Components
import SideMenu from '../side_menu/SideMenu';
import LeftSection from '../left_section/LeftSection';
import RightSection from '../right_section/RightSection';

export default () => (
  <div id="canvas" className="columns is-desktop is-gapless">
    <SideMenu />
    <LeftSection />
    <RightSection />
  </div>
);
