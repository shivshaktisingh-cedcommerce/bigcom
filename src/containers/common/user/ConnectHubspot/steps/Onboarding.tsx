import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { HUBSPOT_SCRIPT_URL } from 'config';
import { t } from 'i18next';
import { FunctionComponent, useEffect } from 'react';

type Props = {
  activeStep: number;
  setActiveStep: (step: number) => void;
};

const Onboarding: FunctionComponent<Props> = ({
  activeStep,
  setActiveStep,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = HUBSPOT_SCRIPT_URL ?? '';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (window.hbspt) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '22552962',
          formId: '4c33ae93-bab7-4a3b-8bd1-f85e58ce8ec9',
          target: '#hubspotForm',
        });

        window.addEventListener('message', event => {
          if (
            event.data.type === 'hsFormCallback' &&
            event.data.eventName === 'onFormSubmit'
          ) {
            console.log('Form Submitted!');
            setActiveStep(activeStep + 1);
          }
        });
      }
    });
  }, []);

  return (
    <Container maxWidth='md' sx={{ textAlign: 'center', minHeight: '86vh' }}>
      <Typography variant='h4'>
        {t('gat_tailored_onboarding_emails_straight_to_your_inbox')}
      </Typography>
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', mb: 5, mt: 1 }}
        noWrap
        gutterBottom
      >
        {t('help_us_make_your_experience_even_better_by_telling_us')}
      </Typography>
      <Grid container spacing={0} alignItems='center' justifyContent='center'>
        <Grid item xs={6}>
          <Stack id='hubspotForm'></Stack>
          <Stack
            direction='column'
            spacing={3}
            justifyContent='center'
            sx={{ p: 2, mt: 4 }}
          >
            <Button
              variant='outlined'
              onClick={() => setActiveStep(activeStep + 1)}
            >
              {t('skip_now')}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Onboarding;
