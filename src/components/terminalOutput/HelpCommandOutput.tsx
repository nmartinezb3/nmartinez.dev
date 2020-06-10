import React from 'react';
import { TerminalLineOutput, CommandText } from '../terminal/TerminalLine.styles';

const HelpCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      Supported commands: <CommandText>about</CommandText>,{' '}
      <CommandText>experience [--all]</CommandText>, <CommandText>education</CommandText>,{' '}
      <CommandText>skills</CommandText>
    </TerminalLineOutput>
  );
};

export default HelpCommandOutput;
