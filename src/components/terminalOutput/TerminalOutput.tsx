import React from 'react';
import { CommandText, TerminalLineOutput } from '../terminal/TerminalLine.styles';
import styled from 'styled-components';
import ExperienceCommandOutput from './ExperienceCommandOutput';
import { Link } from './TerminalOutput.styles';

enum Command {
  HELP = 'help',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EXPERIENCE_ALL = 'experience --all',
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
    case Command.ABOUT:
      return (
        <TerminalLineOutput>
          Hi! <span>👋</span> <br />
          I’m Nicolás Martínez, a 28 years-old Computer Science Engineer who graduated from{' '}
          <Link href="https://www.fing.edu.uy/" target="_blank">
            Facultad de Ingenieria of Universidad de la Republica, Uruguay
          </Link>
          . I am a senior full stack developer passionate about web and mobile application
          development, especially using React, React Native, Node.js, and Mongo DB, although I'm
          always open to learning new technologies. I'm currently working at{' '}
          <Link href="https://www.noblypos.com/" target="_blank">
            Nobly POS
          </Link>{' '}
          as a Full Stack Engineer. <br />
          Outside of my job, I love surfing and traveling.
        </TerminalLineOutput>
      );
    case Command.EXPERIENCE:
    case Command.EXPERIENCE_ALL:
      return <ExperienceCommandOutput showAll={props.command.includes('--all')} />;
    default:
      if (props.command === '') {
        return <div />;
      }
      return <TerminalLineOutput>command not found: {props.command}</TerminalLineOutput>;
  }
}
