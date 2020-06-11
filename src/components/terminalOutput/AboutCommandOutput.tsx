import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { Link } from './TerminalOutput.styles';

const AboutCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      Hi! <span>👋</span> <br />
      I’m Nicolás Martínez, a 28 years-old Computer Science Engineer who graduated from{' '}
      <Link href="https://www.fing.edu.uy/" target="_blank">
        Facultad de Ingenieria of Universidad de la Republica, Uruguay
      </Link>
      . I am a senior full stack developer passionate about web and mobile application development,
      especially using React, React Native, Node.js, and Mongo DB, although I'm always open to
      learning new technologies. I'm currently working at{' '}
      <Link href="https://www.noblypos.com/" target="_blank">
        Nobly POS
      </Link>{' '}
      as a Full Stack Engineer. <br />
      Outside of my job, I love surfing 🏄‍♂️ and traveling 🛫.
    </TerminalLineOutput>
  );
};

export default AboutCommandOutput;
