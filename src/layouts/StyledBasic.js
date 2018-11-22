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

const BasicColor = '#263238';

const BasicH1 = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;

const BasicH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 100;
`;

const BasicP = styled.p``;

export default {
  BasicRelativeWrapper,
  BasicAbsoluteWrapper,
  BasicFlexWrapper,
  BasicColor,
  BasicH1,
  BasicH2,
  BasicP,
};
