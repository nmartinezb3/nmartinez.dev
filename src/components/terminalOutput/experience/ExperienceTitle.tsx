import React, { useCallback } from 'react';
import { Link } from '../TerminalOutput.styles';

interface IExperienceTitleProps {
  title: string;
  from: string;
  to: string;
  onClick?: () => void;
  url?: string;
}
export const ExperienceTitle: React.FunctionComponent<IExperienceTitleProps> = (
  props: IExperienceTitleProps
) => {
  const onClick = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    props.onClick?.();
  }, []);

  return (
    <b>
      <i>
        <Link onClick={onClick}>{props.title}</Link> ({props.from} - {props.to})
        {props.url && (
          <>
            <span> - </span>
            <Link href={`https://${props.url}`} target="_blank">
              {props.url}
            </Link>
          </>
        )}
      </i>
    </b>
  );
};
