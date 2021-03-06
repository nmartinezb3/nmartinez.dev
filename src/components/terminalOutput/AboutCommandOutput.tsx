import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { Link } from './TerminalOutput.styles';

const AboutCommandOutput: React.FunctionComponent = () => {
  return (
    <TerminalLineOutput>
      Hi!{' '}
      <span role="img" aria-label="hi">
        👋
      </span>
      <br />
      <br />
      My name is Nico. I&apos;m a 28 years-old Software Engineer from Uruguay. <br />
      <br />I have a Computer Science Engineering degree from{' '}
      <Link href="https://www.fing.edu.uy/" target="_blank">
        Facultad de Ingenieria of Universidad de la Republica
      </Link>
      .
      <br />
      <br />I am a senior full stack developer passionate about web and mobile application
      development, especially using React, React Native, and Node.js, although I'm always learning
      new technologies that new challenges demands.
      <br />
      <br />
      I&apos;m currently working at{' '}
      <Link href="https://www.noblypos.com/" target="_blank">
        Nobly POS
      </Link>{' '}
      as a Full Stack Engineer.
      <br />
      <br />
      Outside of my job, I love surfing{' '}
      <span role="img" aria-label="surf">
        🏄‍♂️
      </span>{' '}
      and traveling{' '}
      <span role="img" aria-label="plane">
        🛫
      </span>
      .
    </TerminalLineOutput>
  );
};

export default AboutCommandOutput;
