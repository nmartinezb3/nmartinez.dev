import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { Link, CheckIconWrapper } from './TerminalOutput.styles';

const CheckIcon = () => <CheckIconWrapper>✓</CheckIconWrapper>;
// ★★★★☆☆☆☆
const SkillsCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      <ul>
        <li>
          JavaScript <CheckIcon />
          <ul>
            <li>
              ES6 <CheckIcon />
            </li>
            <li>
              TypeScript <CheckIcon />
            </li>
          </ul>
        </li>
        <li>
          TypeScript <CheckIcon />
        </li>
        <li>
          React <CheckIcon />
        </li>
        <li>
          React Native <CheckIcon />
        </li>
        <li>
          HTML <CheckIcon />
        </li>
        <li>
          CSS <CheckIcon />
        </li>
        <li>
          Node <CheckIcon />
          <ul>
            <li>
              Express.js <CheckIcon />
            </li>
            <li>
              Koa.js <CheckIcon />
            </li>
            <li>
              Mongoose <CheckIcon />
            </li>
          </ul>
        </li>
        <li>
          Mongo DB <CheckIcon />
        </li>
      </ul>
    </TerminalLineOutput>
  );
};

export default SkillsCommandOutput;
