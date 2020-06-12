import React from 'react';
import { TerminalLineOutput, CommandText } from '../terminal/TerminalLine.styles';

const HelpCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      Supported commands:
      <ul>
        <li>
          <CommandText>about</CommandText>
        </li>
        <li>
          <CommandText>experience [--nobly] [--octobot] [--saico] [--all]</CommandText>
        </li>
        <li>
          <CommandText>education</CommandText>
        </li>
        <li>
          <CommandText>download-cv</CommandText>
        </li>
      </ul>
    </TerminalLineOutput>
  );
};

export default HelpCommandOutput;
