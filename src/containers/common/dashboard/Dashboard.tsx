// @mui
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Page from '../../../components/Page';
import AutomaticSyncing from './child/AutomaticSyncing';
import DashboardWidgetSummary from './child/DashboardWidgetSummary';
import SummaryInfo from './child/SummaryInfo';
import { getSyncDataSummary } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import useConnectedApps from 'hooks/useConnectedApps';
import RecentDataUpdates from './child/RecentDataUpdates';
import { useQuery } from 'react-query';
import { SyncDataSummaryType } from '../user/ConnectHubspot/BigcommerceHubspotType';
import {
  GET_SYNC_DATA_SUMMARY_API_URL,
  REFETCH_INTERVAL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';

export default function Dashboard() {
  const { t } = useTranslation();
  const { bigcommerceSourceShopId, hubspotTargetShopId, hubspotPortalId } =
    useConnectedApps();

  const { data, isLoading } = useQuery<SyncDataSummaryType>(
    [GET_SYNC_DATA_SUMMARY_API_URL],
    () => getSyncDataSummary(bigcommerceSourceShopId, hubspotTargetShopId),
    {
      refetchOnWindowFocus: false,
      refetchInterval: REFETCH_INTERVAL,
    }
  );

  return (
    <Page title={t('dashboard')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ minHeight: '86vh' }}>
        <Box sx={{ flexGrow: 1 }} />
        <Grid container spacing={3} paddingBottom={5}>
          <Grid item xs={12}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              sx={{ mt: 13, mb: 3 }}
            >
              <Typography variant='h3'>{t('dashboard')}</Typography>
              <Chip
                label={`Portal id: ${hubspotPortalId}`}
                sx={{
                  background: '#DFE3E8',
                  borderRadius: 1,
                  fontWeight: 700,
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardWidgetSummary
              title={t('product_information')}
              scoreBicommerce={data?.products?.total ?? 0}
              scoreHubspot={data?.products?.synced ?? 0}
              loading={isLoading}
              syncedDate={data?.products?.last_synced ?? ''}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardWidgetSummary
              title={t('order_information')}
              scoreBicommerce={data?.orders?.total ?? 0}
              scoreHubspot={data?.orders?.synced ?? 0}
              loading={isLoading}
              syncedDate={data?.orders?.last_synced ?? ''}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardWidgetSummary
              title={t('customer_information')}
              scoreBicommerce={data?.customers?.total ?? 0}
              scoreHubspot={data?.customers?.synced ?? 0}
              loading={isLoading}
              syncedDate={data?.customers?.last_synced ?? ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{ mt: 3 }}>
              {t('summary')}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={8.8}>
            <SummaryInfo />
          </Grid>
          <Grid item xs={12} lg={3.2}>
            <RecentDataUpdates />
            <Box sx={{ mb: 5 }} />
            <AutomaticSyncing />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
