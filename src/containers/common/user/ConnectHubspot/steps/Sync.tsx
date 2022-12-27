import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { INITIAL_SYNC_API_URL } from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import axios from 'axios';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';
import { FC, useState } from 'react';

interface OwnProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}
type Props = OwnProps;

const Sync: FC<Props> = ({ activeStep, setActiveStep }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState({
    initiaited: false,
    skip: false,
  });
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const accessToken = localStorage.getItem('accessToken');

  const handleInitialSync = async (status: string) => {
    setIsLoading({
      ...isLoading,
      [status]: true,
    });
    try {
      await axios
        .post(
          INITIAL_SYNC_API_URL,
          {
            target: {
              marketplace: 'hubspot',
              shopId: hubspotTargetShopId,
            },
            source: {
              marketplace: 'bigcommerce',
              shopId: bigcommerceSourceShopId,
            },
            status,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(result => {
          setIsLoading({
            ...isLoading,
            [status]: false,
          });
          setActiveStep(activeStep + 1);
        });
    } catch (error: any) {
      setIsLoading({
        ...isLoading,
        [status]: false,
      });
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <Stack>
      <Typography variant='h3'>
        {t('sync_bigcommerce_data_with_hubspot')}
      </Typography>
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary' }}
        noWrap
        gutterBottom
      >
        {t(
          'almost_done_last_step_to_sync_existing_woocommerce_data_to_hubspot'
        )}
      </Typography>
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', mb: 5 }}
        noWrap
        gutterBottom
      >
        {t(
          'once_sync_your_data_you_ll_see_you_woocommerce_information_on_hubspot'
        )}
      </Typography>
      <Stack direction='row' spacing={3} justifyContent='center'>
        <LoadingButton
          loading={isLoading.initiaited}
          type='button'
          variant='contained'
          onClick={() => handleInitialSync('initiaited')}
        >
          {t('sync_now')}
        </LoadingButton>
        <LoadingButton
          loading={isLoading.skip}
          variant='outlined'
          onClick={() => handleInitialSync('skip')}
        >
          {t('skip_data_sync')}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default Sync;
