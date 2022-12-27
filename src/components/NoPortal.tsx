import { styled } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
import NoportalImage from '../assets/images/noportal.png';
import Image from './Image';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import ProgressBar from './ProgressBar';
import { useTranslation } from 'react-i18next';

const RootStyle = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

const DetailMessage = styled('p')(({ theme }) => ({
  width: '554px',
  height: '48px',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifyContent: 'center',
}));

export default function Noportal() {
  const { t } = useTranslation();

  return (
    <>
      <ProgressBar />
      <RootStyle>
        <LogoOnlyLayout />
        <Container sx={{ textAlign: 'center' }}>
          <h4>{t('connect_portals')}</h4>
          <DetailMessage>{t('choose_listed_portals')}</DetailMessage>
          <Image
            sx={{
              width: '207px',
              height: '207px',
              objectFit: 'contain',
              margin: '0 auto',
            }}
            visibleByDefault
            disabledEffect
            src={NoportalImage}
            alt='Invalid'
          />
          <h3>{t('no_portal_found')}</h3>
          <DetailMessage>
            {t('no_portal_added_yet_click_add_new_portal_btn')}
          </DetailMessage>
        </Container>
      </RootStyle>
    </>
  );
}
