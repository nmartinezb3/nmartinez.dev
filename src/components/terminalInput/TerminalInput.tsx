import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  const shouldMoveCaret = useRef(false);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCommand('');
      props.onEnter && props.onEnter(command);
    } else if (event.keyCode === 38) {
      // key up
      const previuosCommand = (props.getPreviousCommand && props.getPreviousCommand()) || '';
      shouldMoveCaret.current = true;
      setCommand(previuosCommand);
    } else if (event.keyCode === 40) {
      // key down
      const nextCommand = (props.getNextCommand && props.getNextCommand()) || '';
      setCommand(nextCommand);
    }
  };

  useEffect(() => {
    if (ref && shouldMoveCaret && shouldMoveCaret.current) {
      ref.current.selectionStart = command.length;
      ref.current.selectionEnd = command.length;
      shouldMoveCaret.current = false;
    }
  }, [command]);

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
