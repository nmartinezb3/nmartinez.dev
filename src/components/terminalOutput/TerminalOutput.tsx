import React from 'react';
import ExperienceCommandOutput from './ExperienceCommandOutput';
import EducationCommandOutput from './EducationCommandOutput';
import AboutCommandOutput from './AboutCommandOutput';
import HelpCommandOutput from './HelpCommandOutput';
import NotFoundCommandOutput from './NotFoundCommandOutput';
import SkillsCommandOutput from './SkillsCommandOutput';
import DownloadCvCommandOutput from './DownloadCvCommandOutput';
import SudoCommandOutput from './SudoCommandOutput';

export enum Command {
  HELP = 'help',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EXPERIENCE_ALL = 'experience --all',
  EXPERIENCE_NOBLY = 'experience --nobly',
  EXPERIENCE_OCTOBOT = 'experience --octobot',
  EXPERIENCE_SAICO = 'experience --saico',
  EDUCATION = 'education',
  SKILLS = 'skills',
  DOWNLOAD_CV = 'download-cv',
  CLEAR = 'clear',
  SUDO = 'sudo',
}

interface ITerminalOutputProps {
  command: string;
  onClearCommands: () => void;
}

const checkSudo = (input: string) => {
  if (input.match(/^sudo$|^sudo\s\w*/)) {
    return input;
  }
  return 'sudo';
};
const checkExperience = (input: string) => {
  if (input.match(/^experience$|^experience(\s--\w*)*$/)) {
    return input;
  }
  return 'experience';
};

const TerminalOutput: React.FunctionComponent<ITerminalOutputProps> = (
  props: ITerminalOutputProps
) => {
  switch (props.command) {
    case Command.HELP:
      return <HelpCommandOutput />;
    case Command.ABOUT:
      return <AboutCommandOutput />;

    case checkExperience(props.command):
      return <ExperienceCommandOutput command={props.command} />;
    case Command.EDUCATION:
      return <EducationCommandOutput />;
    case Command.SKILLS:
      return <SkillsCommandOutput />;
    case Command.DOWNLOAD_CV:
      return <DownloadCvCommandOutput />;
    case checkSudo(props.command):
      return <SudoCommandOutput />;
    case Command.CLEAR:
      props.onClearCommands();
      return null;
    default:
      if (props.command === '') {
        return <div />;
      }
      return <NotFoundCommandOutput command={props.command} />;
  }
};

export default TerminalOutput;
