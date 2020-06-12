import React, { useCallback, useRef, useEffect } from 'react';
import {
  TerminalWrapper,
  TerminalHeader,
  TerminalHeaderButton,
  TerminalHeaderTextText,
  TerminalContent,
} from './Terminal.styles';
import { TerminalLineOutput, CommandText } from './TerminalLine.styles';
import TerminalInput from '../terminalInput/TerminalInput';
import TerminalOutput from '../terminalOutput/TerminalOutput';
import useTerminal from '../../terminalState/useTerminal';

const Terminal: React.FunctionComponent = () => {
  const { terminalState, runCommand, clearTerminal, getPreviousCommand } = useTerminal();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    terminalContentRef.current?.scrollTo({
      behavior: 'smooth',
      top: terminalContentRef.current.scrollHeight,
    });
  }, [terminalState.commands]);

  const getNextCommand = (): string => {
    return '';
  };

  const onClickTerminal = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <TerminalHeaderButton type="close" />
        <TerminalHeaderButton type="min" />
        <TerminalHeaderButton type="max" />
        <TerminalHeaderTextText>guest@nmartinez.dev: ~</TerminalHeaderTextText>
      </TerminalHeader>
      <TerminalContent onClick={onClickTerminal} ref={terminalContentRef}>
        <TerminalLineOutput>
          Welcome to nmartinez.dev! Type <CommandText>help</CommandText> for a list of supported
          commands
        </TerminalLineOutput>
        {terminalState.commands.map((command) => (
          <div key={command}>
            <TerminalInput readOnly command={command} />
            <TerminalOutput command={command} onClearCommands={clearTerminal} />
          </div>
        ))}
        <TerminalInput
          ref={inputRef}
          onEnter={runCommand}
          getPreviousCommand={getPreviousCommand}
          getNextCommand={getNextCommand}
        />
      </TerminalContent>
    </TerminalWrapper>
  );
};

export default Terminal;
