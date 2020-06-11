import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';

const SudoCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      We trust you have received the usual lecture from the local System Administrator. It usually
      boils down to these three things:
      <ol>
        <li>Respect the privacy of others.</li>
        <li>Think before you type.</li>
        <li>With great power comes great responsibility.</li>
      </ol>
      Haha! Not today 😉
    </TerminalLineOutput>
  );
};

export default SudoCommandOutput;
