import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { StarWrapper } from './TerminalOutput.styles';

interface IStarsProps {
  rate: number;
}

const Stars: React.FunctionComponent<IStarsProps> = (props: IStarsProps) => {
  return (
    <>
      {[...new Array(5)].map((value, index) => {
        return <StarWrapper key={value}>{index < props.rate ? '★' : '☆'}</StarWrapper>;
      })}
    </>
  );
};

const SkillsCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      <ul>
        <li>
          JavaScript <Stars rate={5} />
        </li>
        <li>
          TypeScript <Stars rate={4} />
        </li>
        <li>
          Node.js <Stars rate={5} />
        </li>
        <li>
          React <Stars rate={5} />
        </li>
        <li>
          React Native <Stars rate={4} />
        </li>
        <li>
          HTML <Stars rate={4} />
        </li>
        <li>
          CSS <Stars rate={4} />
        </li>
        <li>
          Mongo DB <Stars rate={5} />
        </li>
        <li>
          PostgreSQL <Stars rate={4} />
        </li>
      </ul>
    </TerminalLineOutput>
  );
};

export default SkillsCommandOutput;
