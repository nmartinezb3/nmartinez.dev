import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { Link } from './TerminalOutput.styles';

const EducationCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      <ul>
        <li>
          <b>
            <i>
              <Link href="https://www.fing.edu.uy/" target="_blank">
                Facultad de Ingenieria of Universidad de la Republica, Uruguay
              </Link>{' '}
              (2010 - 2018)
            </i>
          </b>
          <br />
          Computer Engineer
        </li>
        <li>
          <b>
            <i>
              <Link href="http://kennedy.edu.uy/" target="_blank">
                John Fitzgerald Kennedy School, Uruguay
              </Link>{' '}
              (1998 - 2009)
            </i>
          </b>
        </li>
      </ul>
    </TerminalLineOutput>
  );
};

export default EducationCommandOutput;
