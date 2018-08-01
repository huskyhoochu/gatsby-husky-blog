import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import config from '../data/SiteConfig';

// Img
import Logo from '../../static/favicon_package/android-chrome-512x512.png';

// Styled
import StyledLayout from '../layouts/StyledLayout';
import StyledIndexInformation from '../components/index_information/StyledIndexInformation';
import StyledFlexWrapper from '../components/flex_wrapper/StyledFlexWrapper';

export default () => (
  <StyledLayout.App>
    <Helmet>
      <title>{`Page not found | ${config.siteTitle}`}</title>
    </Helmet>
    <StyledLayout.Canvas>
      <StyledIndexInformation.InfoWrapper style={{ height: '100vh' }}>
        <StyledIndexInformation.InfoInner style={{ color: '#263238' }}>
          <StyledFlexWrapper.ContentsWrapper>
            <img
              src={Logo}
              style={{ width: '256px', height: 'auto' }}
              alt="Logo"
            />
            <h1>404 Not Found</h1>
            <p>죄송합니다. 요쳥하신 페이지를 찾을 수 없습니다.</p>
            <Link to="/" style={{ color: 'rebeccapurple' }}>
              <strong>홈으로 돌아가기</strong>
            </Link>
          </StyledFlexWrapper.ContentsWrapper>
        </StyledIndexInformation.InfoInner>
      </StyledIndexInformation.InfoWrapper>
    </StyledLayout.Canvas>
  </StyledLayout.App>
);
