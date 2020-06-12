import React, { useReducer, useCallback } from 'react';
import { reducer, ActionTypes } from './terminalReducer';
import { TerminalContext, initialState } from './terminalContext';

export type TerminalState = {
  commands: string[];
  lastCommandIndex: number;
};

interface ITerminalProviderProps {
  children: React.ReactChild[];
}

const TerminalProvider: React.FunctionComponent<ITerminalProviderProps> = (
  props: ITerminalProviderProps
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const runCommand = useCallback((command: string) => {
    dispatch({
      type: ActionTypes.RUN_COMMAND,
      command,
    });
  }, []);

  const clearTerminal = useCallback(() => {
    dispatch({
      type: ActionTypes.CLEAR_TERMINAL,
    });
  }, []);

  const getPreviousCommand = useCallback((): string => {
    if (state.lastCommandIndex > -1) {
      const command = state.commands[state.lastCommandIndex];
      dispatch({
        type: ActionTypes.SET_LAST_COMMAND_INDEX,
        index: state.lastCommandIndex - 1,
      });
      return command;
    }
    return state.commands.length ? state.commands[0] : '';
  }, [state.commands, state.lastCommandIndex]);

  return (
    <TerminalContext.Provider
      value={{ terminalState: state, runCommand, clearTerminal, getPreviousCommand }}
    >
      {props.children}
    </TerminalContext.Provider>
  );
};

export default TerminalProvider;
