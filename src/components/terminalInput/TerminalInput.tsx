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
  getPreviousCommand?: () => string;
  getNextCommand?: () => string;
}

const TerminalInputRef = (props: ITerminalInputProps, ref: any) => {
  const [command, setCommand] = useState('');
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCommand('');
      props.onEnter && props.onEnter(command);
      setTimeout(() => {
        scrollToBottom();
      }, 0);
    } else if (event.keyCode === 38) {
      // key up
      const previuosCommand = (props.getPreviousCommand && props.getPreviousCommand()) || '';
      setCommand(previuosCommand);
    } else if (event.keyCode === 40) {
      // key down
      const nextCommand = (props.getNextCommand && props.getNextCommand()) || '';
      setCommand(nextCommand);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
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
};
const TerminalInput = React.forwardRef(TerminalInputRef);
export default TerminalInput;
