import styled from 'styled-components';

export const TerminalHeader = styled.div`
  height: 30px;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  background-color: #eae8e9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  position: relative;
  background-image: linear-gradient(180deg, #464248 0%, #3b383d 100%);
  border-bottom: 1px solid rgba(66, 66, 66, 0.5);
`;

interface ITerminalHeaderButtonProps {
  type: 'close' | 'min' | 'max';
}

export const TerminalHeaderButton = styled.div<ITerminalHeaderButtonProps>`
  border-radius: 50%;
  margin-top: 7px;
  height: 15px;
  width: 15px;
  margin-bottom: 0.5rem;
  margin-left: 0.6rem;
  background-color: ${(props) => {
    switch (props.type) {
      case 'close':
        return '#fa615c';
      case 'min':
        return '#ffbd48';
      case 'max':
        return '#3fc950';
    }
  }};
`;

export const TerminalHeaderTextText = styled.div`
  color: #bdb9bf;
  position: absolute;
  margin-top: 5px;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

export const TerminalContent = styled.div`
  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  box-sizing: inherit;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 254px;
  padding: 0.5rem 0rem 0rem 0.5rem;
  display: flex;
  background-color: rgb(23, 42, 69);
`;
