import React, { useEffect, useState } from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import styled from 'styled-components';

const ProgressValue = styled.span<{ hide: boolean }>`
  ${(props) => props.hide && `color: #34597c`};
`;

const DownloadCvCommandOutput: React.FunctionComponent = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (progress < 34) {
        setProgress((prog) => prog + 1);
      } else {
        downloadCv();
      }
    }, 10);
  }, [progress]);

  const downloadCv = () => {
    const link = document.createElement('a');
    link.setAttribute('href', `/Resume_Nicolas_Martinez.pdf`);
    link.setAttribute('download', `Resume_Nicolas_Martinez.pdf`);
    link.setAttribute('target', '_blank');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <TerminalLineOutput>
      Downloading <i>Resume_Nicolas_Martinez.pdf</i> [
      {[...new Array(33)].map((value, index) => (
        <ProgressValue key={Math.random()} hide={index > progress}>
          =
        </ProgressValue>
      ))}
      ]{' '}
      <span>
        {Math.min(3 * progress, 100)} % {'  '}
      </span>
    </TerminalLineOutput>
  );
};

export default DownloadCvCommandOutput;
