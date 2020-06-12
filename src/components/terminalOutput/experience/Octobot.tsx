import React from 'react';
import { Link } from '../TerminalOutput.styles';

export const OctobotTitle: React.FunctionComponent = () => (
  <b>
    <i>
      <Link href="https://www.octobot.io" target="_blank">
        Octobot
      </Link>{' '}
      (2016 - 2018)
    </i>
  </b>
);

export const OctobotDescription: React.FunctionComponent = () => (
  <div>
    Octobot is an Uruguayan-based software factory specialized in web and mobile development. <br />
    During my journey in Octobot I have been involved in several projects for many US-based startups
    and companies, developing web applications with Python-Django, Node.js, React, Postgres SQL and
    Mongo DB.
  </div>
);
