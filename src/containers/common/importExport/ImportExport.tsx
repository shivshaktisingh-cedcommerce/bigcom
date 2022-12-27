import {
  Container,
  Tooltip,
  Typography,
  IconButton,
  Card,
  Grid,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Page from '../../../components/Page';
import toolTip from 'assets/images/toolTip.png';
import Image from 'components/Image';
import pleaseRead from 'assets/images/pleaseRead.png';
import ImportExportCard from './child/ImportExportCard';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import {
  customersImport,
  orderImport,
  productsImport,
  productsExport,
  customersExport,
  orderExport,
} from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import {
  ImportCustomersType,
  ImportOrderType,
  ImportProductsType,
  ExportCustomersType,
  ExportProductsType,
  ExportOrderType,
} from '../user/ConnectHubspot/BigcommerceHubspotType';
import useResponsive from 'hooks/useResponsive';

export default function ImpExp() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const isDesktop = useResponsive('up', 'sm');

  const onSuccess = (data: any) => {
    enqueueSnackbar(data.data.message, {
      variant: data.data.success ? 'success' : 'error',
    });
  };

  const onError = () => {
    enqueueSnackbar(t('something_went_wrong'), {
      variant: 'error',
    });
  };

  const customerImportMutation = useMutation(
    (data: ImportCustomersType) => customersImport(data),
    {
      onError,
      onSuccess,
    }
  );

  const customerExportMutation = useMutation(
    (data: ExportCustomersType) => customersExport(data),
    {
      onError,
      onSuccess,
    }
  );

  const productsImportMutation = useMutation(
    (data: ImportProductsType) => productsImport(data),
    {
      onError,
      onSuccess,
    }
  );

  const productsExportMutation = useMutation(
    (data: ExportProductsType) => productsExport(data),
    {
      onError,
      onSuccess,
    }
  );

  const orderImporMutation = useMutation(
    (data: ImportOrderType) => orderImport(data),
    {
      onError,
      onSuccess,
    }
  );

  const orderExportMutation = useMutation(
    (data: ExportOrderType) => orderExport(data),
    {
      onError,
      onSuccess,
    }
  );

  return (
    <Page title={t('import_export')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ minHeight: '86vh' }}>
        <Stack sx={{ py: 12 }}>
          <Typography variant='h4' sx={{ ml: 1, mb: 3 }}>
            {t('import_export')}
          </Typography>
          <Card sx={{ backgroundColor: 'rgba(0, 183, 255, 0.08)', p: 2, m: 1 }}>
            <Stack direction={isDesktop ? 'row' : 'column'} spacing={4}>
              <Stack alignItems='center' justifyContent='center'>
                <Image
                  src={pleaseRead}
                  visibleByDefault
                  disabledEffect
                  sx={{
                    objectFit: 'contain',
                    width: 150,
                    height: 150,
                  }}
                  alt='success'
                />
              </Stack>
              <Stack sx={{ justifyContent: 'left' }}>
                <Typography variant='body2' sx={{ p: '4px' }}>
                  {t('import_line_1')}
                </Typography>
                <Typography variant='body2' sx={{ p: '4px' }}>
                  {t('import_line_2')}
                </Typography>
                <Typography variant='body2' sx={{ p: '4px' }}>
                  {t('import_line_3')}
                </Typography>
                <Typography variant='body2' sx={{ p: '4px' }}>
                  {t('import_line_4')}
                </Typography>
                <Typography variant='body2' sx={{ p: '4px' }}>
                  {t('import_line_5')}
                </Typography>
              </Stack>
            </Stack>
          </Card>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ImportExportCard
                title={t('import_data')}
                subtitle={t('from_bigcommerce_to_app')}
                description={t('import_data_by_type_and_date_range')}
                icon={'pajamas:import'}
                buttonText={t('import_data')}
                type='import'
                loading={
                  customerImportMutation.isLoading ||
                  productsImportMutation.isLoading ||
                  orderImporMutation.isLoading
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleCustomerImportExport={(data: ImportCustomersType) => {
                  customerImportMutation.mutate(data);
                }}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleProductsImportExport={(data: ImportProductsType) => {
                  productsImportMutation.mutate(data);
                }}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleOrderImportExport={(data: ImportOrderType) => {
                  orderImporMutation.mutate(data);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ImportExportCard
                title={t('export_data')}
                subtitle={t('from_app_to_hubspot')}
                description={t('export_data_by_type_and_date_range')}
                icon={'pajamas:export'}
                buttonText={t('export_data')}
                loading={
                  customerExportMutation.isLoading ||
                  productsExportMutation.isLoading ||
                  orderExportMutation.isLoading
                }
                type='export'
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleCustomerImportExport={(data: ExportCustomersType) => {
                  customerExportMutation.mutate(data);
                }}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleProductsImportExport={(data: ExportProductsType) => {
                  productsExportMutation.mutate(data);
                }}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handleOrderImportExport={(data: ExportOrderType) => {
                  orderExportMutation.mutate(data);
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Page>
  );
}
