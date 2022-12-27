import { Box, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import Page from '../../../../components/Page';
import { useTranslation } from 'react-i18next';
import Connection from './steps/Connection';
import { useState } from 'react';
import Sync from './steps/Sync';
import Congrats from './steps/Congrats';
import Setup from './steps/Setup';
import useConnectedApps from 'hooks/useConnectedApps';

const STEPS = ['Connection', 'Setup', 'Sync'];

export default function ConnectToHubspot() {
  const { t } = useTranslation();
  const { hubspotTargetShopId } = useConnectedApps();
  const [activeStep, setActiveStep] = useState(hubspotTargetShopId ? 1 : 0);

  return (
    <Page title={t('bigcommerce_hubspot_integration')}>
      <Container maxWidth='lg' sx={{ minHeight: '86vh' }}>
        <Box sx={{ mt: 6 }}></Box>
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={6} sx={{ mb: 5 }}>
            <Stepper alternativeLabel activeStep={activeStep}>
              {STEPS.map(label => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      '& .MuiStepLabel-label': {
                        typography: 'subtitle2',
                        color: 'text.disabled',
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
        {activeStep !== 3 && <Box sx={{ mt: 6 }}></Box>}
        {activeStep === 0 && (
          <Connection activeStep={activeStep} setActiveStep={setActiveStep} />
        )}
        {activeStep === 1 && (
          <Setup activeStep={activeStep} setActiveStep={setActiveStep} />
        )}
        {activeStep === 2 && (
          <Sync activeStep={activeStep} setActiveStep={setActiveStep} />
        )}
        {activeStep === 3 && <Congrats />}
        <Box sx={{ pb: 6 }}></Box>
      </Container>
    </Page>
  );
}
