import React from 'react';
import { InfoWrapper, Avatar, Profile, Name, Job } from './Info.styles';
import profile from '../../assets/profile.jpeg';
import { Link } from '../terminalOutput/TerminalOutput.styles';
import SocialIcons from './SocialIcons';
import { Command } from '../terminalOutput/TerminalOutput';
import useTerminal from '../../terminalState/useTerminal';

const Info: React.FunctionComponent = () => {
  const { runCommand } = useTerminal();
  return (
    <InfoWrapper>
      <Avatar src={profile} />
      <Name>Nicolás Martínez</Name>
      <Job>Computer Engineer</Job>
      <SocialIcons />
      <Profile>
        Available commands:
        <ul>
          <li>
            <Link onClick={() => runCommand(Command.ABOUT)}>About</Link>
          </li>
          <li>
            <Link onClick={() => runCommand(Command.EXPERIENCE)}>Experience</Link>
            <ul>
              <li>
                <Link onClick={() => runCommand(Command.EXPERIENCE_ALL)}>With details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link onClick={() => runCommand(Command.EDUCATION)}>Education</Link>
          </li>
          <li>
            <Link onClick={() => runCommand(Command.SKILLS)}>Skills</Link>
          </li>
          <li>
            <Link onClick={() => runCommand(Command.DOWNLOAD_CV)}>Download CV</Link>
          </li>
        </ul>
      </Profile>
    </InfoWrapper>
  );
};
export default Info;
