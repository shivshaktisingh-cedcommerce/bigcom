import React from 'react';
import { styled, useTheme } from '@mui/material/styles';

interface Props {
  $linkColor: string;
}
const ServerHTMLContainer = styled('div')<Props>`
  display: flex;
  align-items: center;
  white-space: pre;
  a {
    margin: 0;
    color: ${p => p.$linkColor};
    -webkit-text-decoration: none;
    text-decoration: none;
  }
`;

export default function ServerHTMLContent({ children }: { children: string }) {
  const theme = useTheme();

  return (
    <ServerHTMLContainer
      $linkColor={theme.palette.primary.main}
      dangerouslySetInnerHTML={{ __html: children }}
    ></ServerHTMLContainer>
  );
}
