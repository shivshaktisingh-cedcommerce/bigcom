// @mui
import { Stack, Typography, Card, Box, Link } from '@mui/material';
// components
import Image from 'components/Image';
import { useTranslation } from 'react-i18next';
import AutomaticSyncRow from './AutomaticSyncRow';
import automaticSync from 'assets/images/automatic_sync.svg';
import useConnectedApps from 'hooks/useConnectedApps';
import { useGetConfigurations } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import PartialPageSpinner from 'components/PartialPageSpinner';
import { PATH_PAGE } from 'routes/paths';

export default function AutomaticSyncing() {
  const { t } = useTranslation();
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const { data, isLoading } = useGetConfigurations(
    hubspotTargetShopId,
    bigcommerceSourceShopId
  );

  if (isLoading) {
    return (
      <Card sx={{ maxHeight: 330 }}>
        <PartialPageSpinner />
      </Card>
    );
  }

  const AUTOMATIC_SYNC_DATA = [
    {
      title: 'customer_sync',
      syncEnabled: data?.data?.automatic_sync?.contact_sync ?? false,
    },
    {
      title: 'product_sync',
      syncEnabled: data?.data?.automatic_sync?.product_sync ?? false,
    },
    {
      title: 'order_sync',
      syncEnabled: data?.data?.automatic_sync?.deal_sync ?? false,
    },
    {
      title: 'abandoned_cart_sync',
      syncEnabled: data?.data?.abandoncart_setting?.abandoncart_sync ?? false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={3}>
        <Typography variant='subtitle1'>{t('automatic_syncing')}</Typography>

        <Stack spacing={1}>
          {AUTOMATIC_SYNC_DATA.map((data, index) => (
            <AutomaticSyncRow key={index} data={data} />
          ))}
        </Stack>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={1} mt={2}>
        <Box>
          <Image
            alt={'Automatic Sync'}
            src={automaticSync}
            disabledEffect={true}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            <Link href={PATH_PAGE.configurations}>{t('click')}</Link>{' '}
            {t('here_to_manage_configurations')}{' '}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
