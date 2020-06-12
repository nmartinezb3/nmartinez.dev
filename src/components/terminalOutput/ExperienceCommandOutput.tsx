import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { OctobotDescription } from './experience/Octobot';
import { NoblyDescription } from './experience/Nobly';
import { SaicoDescription } from './experience/Saico';
import { ExperienceTitle } from './experience/ExperienceTitle';
import useTerminal from '../../terminalState/useTerminal';
import { Command } from './TerminalOutput';

interface IExperienceCommandOutput {
  command: string;
}

const ExperienceCommandOutput: React.FunctionComponent<IExperienceCommandOutput> = (
  props: IExperienceCommandOutput
) => {
  const { runCommand } = useTerminal();
  if (!props.command.includes('--')) {
    return (
      <TerminalLineOutput>
        <ul>
          <li>
            <ExperienceTitle
              onClick={() => runCommand(Command.EXPERIENCE_NOBLY)}
              title="Nobly POS"
              from="2018"
              to="Present"
            />
          </li>
          <li>
            <ExperienceTitle
              onClick={() => runCommand(Command.EXPERIENCE_OCTOBOT)}
              title="Octobot"
              from="2016"
              to="2018"
            />
          </li>
          <li>
            <ExperienceTitle
              onClick={() => runCommand(Command.EXPERIENCE_SAICO)}
              title="SAICO Sistemas"
              from="2013"
              to="2016"
            />
          </li>
        </ul>
      </TerminalLineOutput>
    );
  }
  const showSaico = props.command.includes('--all') || props.command.includes('--saico');
  const showOctobot = props.command.includes('--all') || props.command.includes('--octobot');
  const showNobly = props.command.includes('--all') || props.command.includes('--nobly');
  return (
    <TerminalLineOutput>
      <ul>
        {showNobly && (
          <li>
            <ExperienceTitle title="Nobly POS" from="2018" to="Present" url="www.noblypos.com" />
            <NoblyDescription />
          </li>
        )}
        {showOctobot && (
          <li>
            <ExperienceTitle title="Octobot" from="2016" to="2018" url="www.octobot.io" />
            <OctobotDescription />
          </li>
        )}
        {showSaico && (
          <li>
            <ExperienceTitle title="SAICO Sistemas" from="2013" to="2016" url="www.saico.com.uy" />
            <SaicoDescription />
          </li>
        )}
      </ul>
    </TerminalLineOutput>
  );
};

export default ExperienceCommandOutput;
