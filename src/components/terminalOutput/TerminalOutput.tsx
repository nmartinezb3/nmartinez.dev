import React from 'react';
import ExperienceCommandOutput from './ExperienceCommandOutput';
import EducationCommandOutput from './EducationCommandOutput';
import AboutCommandOutput from './AboutCommandOutput';
import HelpCommandOutput from './HelpCommandOutput';
import NotFoundCommandOutput from './NotFoundCommandOutput';
import SkillsCommandOutput from './SkillsCommandOutput';
import DownloadCvCommandOutput from './DownloadCvCommandOutput';

enum Command {
  HELP = 'help',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EXPERIENCE_ALL = 'experience --all',
  EDUCATION = 'education',
  SKILLS = 'skills',
  DOWNLOAD_CV = 'download-cv',
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
    case Command.SKILLS:
      return <SkillsCommandOutput />;
    case Command.DOWNLOAD_CV:
      return <DownloadCvCommandOutput />;
    default:
      if (props.command === '') {
        return <div />;
      }
      return <NotFoundCommandOutput command={props.command} />;
  }
};

export default TerminalOutput;
