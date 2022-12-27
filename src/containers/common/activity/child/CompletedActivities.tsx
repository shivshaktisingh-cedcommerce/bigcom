import { LoadingButton } from '@mui/lab';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import {
  clearNotifications,
  useCompletedActivities,
} from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import Iconify from 'components/Iconify';
import PartialPageSpinner from 'components/PartialPageSpinner';
import useConnectedApps from 'hooks/useConnectedApps';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { fDateTime } from 'utils/formatTime';

export default function CompletedActivities() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();

  const mutation = useMutation(
    () => clearNotifications(hubspotTargetShopId, bigcommerceSourceShopId),
    {
      onError: () => {
        enqueueSnackbar(t('something_went_wrong'), {
          variant: 'error',
        });
      },
      onSuccess: data => {
        if (data.data.success) {
          enqueueSnackbar(data.data.message, {
            variant: 'success',
          });
          refetch();
        } else {
          enqueueSnackbar(data.data.message, {
            variant: 'error',
          });
        }
      },
    }
  );

  const { data, isFetching, refetch } = useCompletedActivities({
    target: {
      marketplace: 'hubspot',
      shopId: hubspotTargetShopId,
    },
    source: {
      marketplace: 'bigcommerce',
      shopId: bigcommerceSourceShopId,
    },
    activePage: '1',
    count: '10',
  });

  if (isFetching) {
    return <PartialPageSpinner />;
  }

  const completedActivities = data?.data.rows;

  const handleClear = () => {
    mutation.mutate();
  };

  return completedActivities?.length ? (
    <Stack direction='row' justifyContent='space-between'>
      <Stack>
        <Table>
          <TableBody>
            {completedActivities.map((activity, index) => {
              return (
                <TableRow key={index}>
                  <TableCell width='10%'>
                    <Iconify
                      icon={
                        activity?.severity === 'success'
                          ? 'mdi:tick-circle-outline'
                          : 'charm:circle-cross'
                      }
                      sx={{
                        color:
                          activity?.severity === 'success'
                            ? '#54D62C'
                            : '#FF0000',
                        width: 40,
                        height: 40,
                      }}
                    />
                  </TableCell>
                  <TableCell width='90%'>
                    <Typography variant='h6'>{activity.message}</Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                      noWrap
                    >
                      {fDateTime(activity.created_at)}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Stack>
      <Stack p={3}>
        <LoadingButton
          loading={mutation.isLoading}
          variant='outlined'
          onClick={handleClear}
        >
          {t('clear_all')}
        </LoadingButton>
      </Stack>
    </Stack>
  ) : (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
      }}
    >
      <Typography variant='h4'>{t('no_activities_found')}</Typography>
    </Stack>
  );
}
