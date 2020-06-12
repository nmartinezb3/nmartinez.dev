import styled from 'styled-components';
import { device } from './helpers/mediaQuery';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  height: 99%;
  width: 99%;

  @media ${device.tablet} {
    position: relative;
    height: auto;
    width: auto;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  width: 80%;

  @media ${device.tablet} {
    height: 90vh;
    grid-template-columns: unset;
    grid-template-rows: 1fr 2fr;
    width: 100%;
  }
`;
