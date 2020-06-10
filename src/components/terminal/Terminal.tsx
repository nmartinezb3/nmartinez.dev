import React, { useState, useCallback } from 'react';
import {
  TerminalHeader,
  TerminalHeaderButton,
  TerminalHeaderTextText,
  TerminalContent,
} from './Terminal.styles';
import { TerminalLineOutput, CommandText } from './TerminalLine.styles';
import TerminalInput from '../terminalInput/TerminalInput';
import { TerminalOutput } from '../terminalOutput/TerminalOutput';

function Terminal() {
  const [commands, setCommands] = useState<string[]>([]);
  const onEnterCommand = useCallback((command: string) => {
    setCommands((prevCommands) => [...prevCommands, command]);
  }, []);
  return (
    <>
      <TerminalHeader>
        <TerminalHeaderButton type="close" />
        <TerminalHeaderButton type="min" />
        <TerminalHeaderButton type="max" />
        <TerminalHeaderTextText>guest@nmartinez.dev: ~</TerminalHeaderTextText>
      </TerminalHeader>
      <TerminalContent>
        <TerminalLineOutput>
          Welcome to nmartinez.dev! Type <CommandText>help</CommandText> for a list of supported
          commands
        </TerminalLineOutput>
        {commands.map((command) => (
          <div key={command}>
            <TerminalInput readOnly command={command} />
            <TerminalOutput command={command} />
          </div>
        ))}
        <TerminalInput onEnter={onEnterCommand} />
      </TerminalContent>
    </>
  );
}
export default Terminal;
