import React from 'react';

// Components
import SideMenu from './side_menu/SideMenu';
import LeftSection from './left_section/LeftSection';

export default () => (
  <div id="canvas" className="columns is-desktop is-gapless">
    <SideMenu />
    <LeftSection />
  </div>
);
