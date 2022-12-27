import { Card, Container, Stack } from '@mui/material';
import { useGetConfigurations } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import Page from 'components/Page';
import PartialPageSpinner from 'components/PartialPageSpinner';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import ConfigurationsForm from './form/ConfigurationsForm';

export default function Configurations() {
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();

  const { data, isLoading } = useGetConfigurations(
    hubspotTargetShopId,
    bigcommerceSourceShopId
  );

  if (isLoading) {
    return (
      <Card sx={{ minHeight: '86vh' }}>
        <PartialPageSpinner />
      </Card>
    );
  }

  const configurationsData = data?.data;

  return (
    <Page title={t('configurations')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ minHeight: '86vh' }}>
        <Stack sx={{ py: 12 }}>
          <ConfigurationsForm
            configurationsData={configurationsData}
            sourceShopId={bigcommerceSourceShopId}
            targetShopId={hubspotTargetShopId}
          />
        </Stack>
      </Container>
    </Page>
  );
}
