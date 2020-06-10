import React, { useState, useCallback } from 'react';
import {
  ArrowIconWrapper,
  DirectoryIconWrapper,
  TerminalInputContainer,
  Input,
  Command,
} from './TerminalInput.styles';

const ArrowIcon = () => <ArrowIconWrapper>➜</ArrowIconWrapper>;
const DirectoryIcon = () => <DirectoryIconWrapper>~</DirectoryIconWrapper>;

interface ITerminalInputProps {
  onEnter?: (command: string) => void;
  readOnly?: boolean;
  command?: string;
}

const TerminalInput = React.forwardRef((props: ITerminalInputProps, ref: any) => {
  const [command, setCommand] = useState('');
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCommand('');
      props.onEnter!(command);
    }
  };
  return (
    <TerminalInputContainer>
      <ArrowIcon />
      <DirectoryIcon />
      {props.readOnly ? (
        <Command>{props.command}</Command>
      ) : (
        <Input
          ref={ref}
          type="text"
          length={command.length}
          onChange={onChange}
          value={command}
          onKeyDown={onKeyDown}
        />
      )}
    </TerminalInputContainer>
  );
});
export default TerminalInput;
