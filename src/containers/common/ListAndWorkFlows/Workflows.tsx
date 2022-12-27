import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Card,
} from '@mui/material';
import { useWorkFlows } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import PartialPageSpinner from 'components/PartialPageSpinner';
import useConnectedApps from 'hooks/useConnectedApps';
import { useTranslation } from 'react-i18next';
import Page from '../../../components/Page';
import ListAndWorkflowsTable from './Child/ListAndWorkflowsTable';

export default function WorkFlows() {
  const { t } = useTranslation();
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const { data, refetch } = useWorkFlows(
    bigcommerceSourceShopId,
    hubspotTargetShopId
  );

  if (data === undefined) {
    return (
      <Card sx={{ minHeight: '86vh' }}>
        <PartialPageSpinner />
      </Card>
    );
  }

  const dataMap = data.data;

  return (
    <Page title={t('workflow')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ padding: '5px', minHeight: '86vh' }}>
        <Typography
          variant='h3'
          sx={{
            mt: 13,
          }}
        >
          {t('workflow')}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            mb: 3,
          }}
        >
          {t('workflow_line_1')}
        </Typography>
        <Card>
          <TableContainer component={Paper} sx={{ mt: 2, p: 3 }}>
            <ListAndWorkflowsTable
              dataMap={dataMap}
              type='workflows'
              sourceShopId={bigcommerceSourceShopId}
              targetShopId={hubspotTargetShopId}
              refetch={() => refetch()}
            />
          </TableContainer>
        </Card>
      </Container>
    </Page>
  );
}
