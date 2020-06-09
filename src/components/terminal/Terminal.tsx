import React from 'react';
import {
  TerminalHeader,
  TerminalHeaderButton,
  TerminalHeaderTextText,
  TerminalContent,
} from './Terminal.styles';
import { TerminalLineOutput, CommandText } from './TerminalLine.styles';

function Terminal() {
  return (
    <>
      <TerminalHeader>
        <TerminalHeaderButton type="close" />
        <TerminalHeaderButton type="min" />
        <TerminalHeaderButton type="max" />
        <TerminalHeaderTextText>guest@nmartinez.dev: ~</TerminalHeaderTextText>
      </TerminalHeader>
      <TerminalContent>
        <TerminalLineOutput>
          Welcome to nmartinez.dev! Type <CommandText>help</CommandText> for a list of supported
          commands
        </TerminalLineOutput>
      </TerminalContent>
    </>
  );
}
export default Terminal;
