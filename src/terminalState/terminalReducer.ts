import { TerminalState } from './TerminalState';

export enum ActionTypes {
  'RUN_COMMAND',
  'SET_LAST_COMMAND_INDEX',
  'CLEAR_TERMINAL',
}
export type TerminalActions =
  | {
      type: ActionTypes.RUN_COMMAND;
      command: string;
    }
  | {
      type: ActionTypes.SET_LAST_COMMAND_INDEX;
      index: number;
    }
  | {
      type: ActionTypes.CLEAR_TERMINAL;
    };

export const reducer = (state: TerminalState, action: TerminalActions): TerminalState => {
  switch (action.type) {
    case ActionTypes.RUN_COMMAND:
      return {
        ...state,
        commands: [...state.commands, action.command],
        lastCommandIndex: state.commands.length,
      };

    case ActionTypes.CLEAR_TERMINAL:
      return {
        ...state,
        commands: [],
      };
    case ActionTypes.SET_LAST_COMMAND_INDEX:
      return {
        ...state,
        lastCommandIndex: action.index,
      };
    default:
      return state;
  }
};
