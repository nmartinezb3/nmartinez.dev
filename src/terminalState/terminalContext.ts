import React from 'react';
import { TerminalState } from './TerminalState';

export const initialState: TerminalState = {
  commands: [],
  lastCommandIndex: -1,
};

export interface TerminalContextType {
  terminalState: TerminalState;
  runCommand: (command: string) => void;
  clearTerminal: () => void;
  getPreviousCommand: () => string;
}

const initialTerminalContext: TerminalContextType = {
  terminalState: initialState,
  runCommand: () => {},
  clearTerminal: () => {},
  getPreviousCommand: () => '',
};

export const TerminalContext = React.createContext(initialTerminalContext);
