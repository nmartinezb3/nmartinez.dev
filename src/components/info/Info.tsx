import React from 'react';
import { InfoWrapper, Avatar, Profile, Name, Job } from './Info.styles';
import profile from '../../assets/profile.jpeg';
import { Link } from '../terminalOutput/TerminalOutput.styles';
import SocialIcons from './SocialIcons';

const Info: React.FunctionComponent = () => {
  return (
    <InfoWrapper>
      <Avatar src={profile} />
      <Name>Nicolás Martínez</Name>
      <Job>Computer Engineer</Job>
      <SocialIcons />
      <Profile>
        Hi! <span>👋</span>
        <br />
        <br />
        I’m Nicolás Martínez, a 28 years-old Computer Science Engineer who graduated from{' '}
        <Link href="https://www.fing.edu.uy/" target="_blank">
          Facultad de Ingenieria of Universidad de la Republica, Uruguay
        </Link>
        .
        <br />
        <br />I am a senior full stack developer passionate about web and mobile application
        development, especially using React, React Native, Node.js, and Mongo DB, although I'm
        always open to learning new technologies.
        <br />
        <br />
        I'm currently working at{' '}
        <Link href="https://www.noblypos.com/" target="_blank">
          Nobly POS
        </Link>{' '}
        as a Full Stack Engineer.
        <br />
        <br />
        Outside of my job, I love surfing 🏄‍♂️ and traveling 🛫.
      </Profile>
    </InfoWrapper>
  );
};
export default Info;
