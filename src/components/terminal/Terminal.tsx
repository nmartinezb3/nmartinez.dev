import React, { useState, useCallback, useRef, useEffect } from 'react';
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

const Terminal: React.FunctionComponent = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const onEnterCommand = useCallback(
    (command: string) => {
      setCommands((prevCommands) => [...prevCommands, command]);
      setLastCommandIndex(commands.length);
    },
    [commands]
  );

  useEffect(() => {
    inputRef.current?.focus();
    terminalContentRef.current?.scrollTo({
      behavior: 'smooth',
      top: terminalContentRef.current.scrollHeight,
    });
  }, [commands]);

  const getPreviousCommand = (): string => {
    if (lastCommandIndex > -1) {
      const command = commands[lastCommandIndex];
      setLastCommandIndex((prevIndex) => prevIndex - 1);
      return command;
    }
    return '';
  };
  const getNextCommand = (): string => {
    return '';
  };

  const onClickTerminal = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const onClearCommands = () => {
    setCommands([]);
  };

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
        {commands.map((command) => (
          <div key={command}>
            <TerminalInput readOnly command={command} />
            <TerminalOutput command={command} onClearCommands={onClearCommands} />
          </div>
        ))}
        <TerminalInput
          ref={inputRef}
          onEnter={onEnterCommand}
          getPreviousCommand={getPreviousCommand}
          getNextCommand={getNextCommand}
        />
      </TerminalContent>
    </TerminalWrapper>
  );
};
export default Terminal;
