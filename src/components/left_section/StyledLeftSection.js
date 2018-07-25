import styled from 'styled-components';
import MainThumb from '../../assets/images/thumb-min.jpg';

const LeftSection = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;
  height: 100vh;
  flex: 1;
  background-image: url(${(props) => {
    const { theme } = props;
    return theme.main;
  }});
  background-size: cover;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    min-height: 100vh;
  }
`;

LeftSection.defaultProps = {
  theme: {
    main: MainThumb,
  },
};

export default {
  LeftSection,
};
