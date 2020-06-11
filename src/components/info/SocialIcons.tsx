import React from 'react';
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { IconsContainer, IconLink } from './Info.styles';

const SocialIcons: React.FunctionComponent = () => {
  return (
    <IconsContainer>
      <IconLink href="https://www.linkedin.com/in/nmartinezbaston" target="_blank">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://github.com/nmartinezb3" target="_blank">
        <FaGithub />
      </IconLink>
      <IconLink href="mailto:contact@nmartinez.dev">
        <FaRegEnvelope />
      </IconLink>
    </IconsContainer>
  );
};

export default SocialIcons;
