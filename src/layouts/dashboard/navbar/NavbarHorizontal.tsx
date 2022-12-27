import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Container, AppBar } from '@mui/material';
import { NavSectionHorizontal } from '../../../components/nav-section';
import navConfigTablet from './NavConfigTablet';
import navConfig from './NavConfig';
import useResponsive from 'hooks/useResponsive';

const RootStyle = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(2, 0),
  boxShadow: theme.customShadows.z8,
  backgroundColor: theme.palette.background.default,
}));

function NavbarHorizontal() {
  const isTablet = useResponsive('between', 'lg', 'md', 1350);

  return (
    <RootStyle>
      <Container maxWidth={false}>
        <NavSectionHorizontal
          navConfig={isTablet ? navConfigTablet() : navConfig()}
        />
      </Container>
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);
