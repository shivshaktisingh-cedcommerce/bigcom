import { styled } from '@mui/material/styles';
import React from 'react';
import Logo from 'components/Logo';
import LanguagePopover from 'layouts/dashboard/header/LanguagePopover';

export const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 5, 0, 7),
  },
}));

const AuthHeader: React.FC = props => {
  return (
    <HeaderStyle>
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {props.children}
        <LanguagePopover />
      </div>
    </HeaderStyle>
  );
};

export default AuthHeader;
