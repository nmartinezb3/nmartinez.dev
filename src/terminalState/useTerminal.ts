import { useContext } from 'react';
import { TerminalContext, TerminalContextType } from './terminalContext';

/**
 * To use and set the state of the terminal from anywhere in the app
 * - @returns an object with a functions `runCommand`, `clearTerminal`, `getPreviousCommand` and the `terminalState`
 */
const useTerminal = (): TerminalContextType => useContext(TerminalContext);

export default useTerminal;
