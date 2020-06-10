import React from 'react';
import { CommandText, TerminalLineOutput } from '../terminal/TerminalLine.styles';
import styled from 'styled-components';
import ExperienceCommandOutput from './ExperienceCommandOutput';

enum Command {
  HELP = 'help',
}

interface ITerminalOutputProps {
  command: string;
}

export function TerminalOutput(props: ITerminalOutputProps) {
  switch (props.command) {
    case Command.HELP:
      return (
        <TerminalLineOutput>
          Supported commands: <CommandText>about</CommandText>,{' '}
          <CommandText>experience [--all]</CommandText>, <CommandText>education</CommandText>,{' '}
          <CommandText>skills</CommandText>
        </TerminalLineOutput>
      );
    default:
      return <TerminalLineOutput>command not found: {props.command}</TerminalLineOutput>;
  }
}
