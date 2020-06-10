import React from 'react';
import ExperienceCommandOutput from './ExperienceCommandOutput';
import EducationCommandOutput from './EducationCommandOutput';
import AboutCommandOutput from './AboutCommandOutput';
import HelpCommandOutput from './HelpCommandOutput';
import NotFoundCommandOutput from './NotFoundCommandOutput';

enum Command {
  HELP = 'help',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EXPERIENCE_ALL = 'experience --all',
  EDUCATION = 'education',
}

interface ITerminalOutputProps {
  command: string;
}

const TerminalOutput: React.FunctionComponent<ITerminalOutputProps> = (
  props: ITerminalOutputProps
) => {
  switch (props.command) {
    case Command.HELP:
      return <HelpCommandOutput />;
    case Command.ABOUT:
      return <AboutCommandOutput />;
    case Command.EXPERIENCE:
    case Command.EXPERIENCE_ALL:
      return <ExperienceCommandOutput showAll={props.command.includes('--all')} />;
    case Command.EDUCATION:
      return <EducationCommandOutput />;
    default:
      if (props.command === '') {
        return <div />;
      }
      return <NotFoundCommandOutput command={props.command} />;
  }
};

export default TerminalOutput;
