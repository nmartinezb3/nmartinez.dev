import styled from 'styled-components';
import { device } from '../../helpers/mediaQuery';

export const InfoWrapper = styled.div`
  background: rgb(23, 42, 69);
  color: #bdb9bf;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px 15px 15px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 200px;
  margin: auto;
  margin-bottom: 10px;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Profile = styled.div`
  background-color: rgb(10, 25, 47);
  flex: 1;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
`;

export const Name = styled.span`
  color: #fff;
  font-size: 27px;
  text-align: center;
`;

export const Job = styled.span`
  font-size: 18px;
  text-align: center;
`;
export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

export const IconLink = styled.a`
  cursor: pointer;
  margin: 0 3px;
  svg {
    color: #bdb9bf;
    transition: color 0.2s ease;
    &:hover {
      color: #fff;
    }
  }
`;
