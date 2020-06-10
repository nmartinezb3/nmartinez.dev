import styled from 'styled-components';

export const TerminalInputContainer = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
`;
export const ArrowIconWrapper = styled.span`
  color: #8dd39e;
  font-size: 0.6rem;
`;

export const DirectoryIconWrapper = styled.span`
  color: #75e1e7;
  font-weight: 500;
  font-size: 0.8rem;
  margin-left: 5px;
`;

export const Cursor = styled.span`
  height: 75%;
  width: 5px;
  background-color: #ffffffa1;
  margin-left: -2px;
`;

interface IInputProps {
  length: number;
}
export const Input = styled.input<IInputProps>`
  caret-color: transparent;
  background: none;
  border: none;
  outline: none;
  color: #b7c5d2;
  padding-left: 8px;
  font-family: 'Anonymous Pro', monospace !important;
  width: 100%;
  font-size: 0.9rem;
`;

export const Command = styled.div`
  color: #b7c5d2;
  padding-left: 8px;
  font-family: 'Anonymous Pro', monospace !important;
  width: 100%;
  font-size: 0.9rem;
`;
