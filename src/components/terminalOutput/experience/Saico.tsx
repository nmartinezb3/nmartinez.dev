import React from 'react';
import { Link } from '../TerminalOutput.styles';

export const SaicoTitle: React.FunctionComponent = () => (
  <b>
    <i>
      <Link href="https://www.saico.com.uy" target="_blank">
        SAICO Sistemas
      </Link>{' '}
      (2013 - 2016)
    </i>
  </b>
);

export const SaicoDescription: React.FunctionComponent = () => (
  <div>
    SAICO Sistemas is a software development company specialized in business administration
    software, such as accounting, human resources, sales, among others.
    <br />
    During my 3 years on SAICO, I worked as a Java developer as well as a SysAdmin in charge of the
    administration of networks and infrastructure of Linux and Windows servers.
  </div>
);
