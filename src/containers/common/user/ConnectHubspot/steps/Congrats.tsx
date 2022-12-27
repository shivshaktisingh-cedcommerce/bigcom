import { LoadingButton } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import { completeOnboarding } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import CongratsIllustration from 'assets/pages/illustration_congrats';
// @mui
import { varBounce } from 'components/animate';
import { m } from 'framer-motion';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { PATH_USER } from 'routes/paths';

export default function Congrats() {
  const { enqueueSnackbar } = useSnackbar();
  const { hubspotTargetShopId, bigcommerceSourceShopId } = useConnectedApps();
  const mutation = useMutation(
    () => completeOnboarding(hubspotTargetShopId, bigcommerceSourceShopId),
    {
      onError: () => {
        enqueueSnackbar(t('something_went_wrong'), {
          variant: 'error',
        });
      },
      onSuccess: data => {
        if (data.data.success) {
          window.location.href = PATH_USER.dashboard;
        } else {
          enqueueSnackbar(data.data.message, {
            variant: 'error',
          });
        }
      },
    }
  );

  return (
    <Box sx={{ maxWidth: 650, margin: 'auto', textAlign: 'center' }}>
      <m.div variants={varBounce().in}>
        <CongratsIllustration sx={{ height: 260 }} />
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography variant='h4' paragraph>
          {t('congrats_successfully_setup_bigcommerce_hubspot_integration')}
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          {t('whats_next_go_to_dashboard_learn_more_about_integration')}
        </Typography>
      </m.div>

      <LoadingButton
        size='large'
        variant='contained'
        loading={mutation.isLoading}
        sx={{ mt: 3 }}
        onClick={() => mutation.mutate()}
      >
        {t('view_dashboard')}
      </LoadingButton>
    </Box>
  );
}
