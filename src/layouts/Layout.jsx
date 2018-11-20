import React from 'react';
import PropTypes from 'prop-types';
import '../utils/WebFontLoader';

// Styled
import Styled from './StyledLayout';

// Components
import Header from '../components/header/Header';
import SideMenu from '../components/side_menu/SideMenu';
import GreyOut from '../components/grey_out/GreyOut';
import FlexWrapper from '../components/flex_wrapper/FlexWrapper';

const Layout = ({ query }) => (
  <Styled.App>
    <Styled.Canvas>
      <SideMenu />
      <Header />
      <FlexWrapper query={query} />
      <GreyOut />
    </Styled.Canvas>
  </Styled.App>
);

Layout.propTypes = {
  query: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Layout;
