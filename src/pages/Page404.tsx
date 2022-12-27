import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import Page from '../components/Page';
import { MotionContainer, varBounce } from '../components/animate';
import Image from '../components/Image';
import Image404 from '../assets/images/404.png';
import { useTranslation } from 'react-i18next';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

export default function Page404() {
  const { t } = useTranslation();

  return (
    <Page title={t('page_not_found')} sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <m.div variants={varBounce().in}>
              <Image
                sx={{
                  width: '50%',
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
                visibleByDefault
                disabledEffect
                src={Image404}
                alt='login'
              />
            </m.div>
            <m.div variants={varBounce().in}>
              <Typography variant='h3' paragraph>
                {t('sorry_page_not_found')}
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              {t('no_page_found')}
            </Typography>

            <Button
              sx={{ marginTop: '25px' }}
              to='/'
              size='large'
              variant='contained'
              component={RouterLink}
            >
              {t('go_to_home')}
            </Button>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
