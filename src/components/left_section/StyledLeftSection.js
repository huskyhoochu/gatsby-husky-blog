import _ from 'lodash';
import styled from 'styled-components';
import MainThumb from '../../assets/images/category_index.jpg';

// Styled
import StyledFlexWrpper from '../flex_wrapper/StyledFlexWrapper';

const GreyOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 0;
  height: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
`;

const LeftSection = styled.section.attrs({
  id: 'left',
})`
  position: relative;
  top: 0;
  z-index: 1;
  height: 100vh;
  flex: 1;

  &.move {
    ${GreyOut} {
      height: 100%;
      opacity: 1;
    }

    ${StyledFlexWrpper.InfoWrapper} {
      transform: translateY(-1rem);
    }
  }
`;

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 50vw;
  height: 100vh;

  background-image: url(${(props) => {
    const { theme } = props;
    return theme.src;
  }});
  background-image: image-set(
    ${(props) => {
    const { theme } = props;
    const splitItem = _.split(theme.srcSet, ',');
    const splitRes = _.map(splitItem, item => _.split(item, ' '));
    const wrapUrl = _.map(splitRes, item => `url(${item[0]}) ${item[1]}`);
    return _.join(wrapUrl, ', ');
  }}
  );
  background-size: cover;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    width: 100vw;
    min-height: 100vh;
  }
`;

FixedWrapper.defaultProps = {
  theme: {
    src: MainThumb,
  },
};

export default {
  LeftSection,
  FixedWrapper,
  GreyOut,
};
