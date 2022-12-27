import { styled } from '@mui/material/styles';
import { Container, SxProps } from '@mui/material';
import InvalidImage from '../assets/images/invalid.png';
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
  width: '540px',
  height: '72px',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifyContent: 'center',
}));

type Props = {
  invalidMessage?: string;
  detailedMessage?: string;
  sx?: SxProps;
};

export default function Invalid({
  invalidMessage,
  detailedMessage,
  ...other
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <ProgressBar />
      <RootStyle {...other}>
        {/* <LogoOnlyLayout /> */}
        <Container sx={{ textAlign: 'center' }}>
          <Image
            sx={{
              width: '245px',
              height: '245px',
              objectFit: 'contain',
              margin: '0 auto',
            }}
            visibleByDefault
            disabledEffect
            src={InvalidImage}
            alt='Invalid'
          />
          <h2>{`${invalidMessage}`}</h2>
          <DetailMessage>{detailedMessage}</DetailMessage>
        </Container>
      </RootStyle>
    </>
  );
}
