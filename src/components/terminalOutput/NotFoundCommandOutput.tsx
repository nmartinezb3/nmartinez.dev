import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';

const NotFoundCommandOutput: React.FunctionComponent<{ command: string }> = (props: {
  command: string;
}) => {
  return <TerminalLineOutput>command not found: {props.command}</TerminalLineOutput>;
};

export default NotFoundCommandOutput;
