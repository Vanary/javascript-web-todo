import styled from 'styled-components';
import theme from 'style/themePalette';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 10% 15% 15% 50% 10%;

  background-color: ${theme.color.background};
  box-shadow: 2.5rem 2.5rem ${theme.color.boxShadow};
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  top: 10%;
  width: 64rem;
  height: 72rem;
`;

export default StyledMain;
