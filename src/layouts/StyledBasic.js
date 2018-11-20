import styled from 'styled-components';

const BasicRelativeWrapper = styled.div`
  position: relative;
`;

const BasicAbsoluteWrapper = styled.div`
  position: absolute;
`;

const BasicFlexWrapper = styled(BasicRelativeWrapper)`
  display: flex;
`;

export default {
  BasicRelativeWrapper,
  BasicAbsoluteWrapper,
  BasicFlexWrapper,
};
