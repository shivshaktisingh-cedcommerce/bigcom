// @mui
import {
  Box,
  Card,
  Container,
  Tooltip,
  Typography,
  IconButton,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Page from '../../../components/Page';
import toolTip from 'assets/images/toolTip.png';
import Image from 'components/Image';
import { useState } from 'react';
import CustomerTableToolbar from './child/CustomerTableToolbar';
import {
  EXPORT_CUSTOMERS_API_URL,
  UPLOAD_SINGLE_CUSTOMER_API_URL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import useTable from 'hooks/useTable';
import { useSnackbar } from 'notistack';
import useConnectedApps from 'hooks/useConnectedApps';
import CustomersListing from './child/CustomersListing';
import SyncInprogressDialog from '../dialog/SyncInprogressDialog';
import SyncSuccessDialog from '../dialog/SyncSuccessDialog';
import SyncFailureDialog from '../dialog/SyncFailureDialog';
import axiosInstance from 'utils/axios';

export default function Customers() {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openComplete, setOpenComplete] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [params, setParams] = useState({
    skip: 0,
    filterName: '',
    rowsPerPage: 10,
  });
  const [msg, setMsg] = useState({
    success: '',
    error: '',
  });
  const { hubspotTargetShopId, bigcommerceSourceShopId } = useConnectedApps();
  const userId = localStorage.getItem('user_id');

  const ROWS_PER_PAGE = 10;

  const handleClose = () => {
    setOpen(false);
    setOpenComplete(false);
    setOpenFailure(false);
  };

  const { selected, onSelectRow, onSelectAllRows } = useTable({
    defaultOrderBy: 'first_name',
  });

  const exportSingle = async (id: string) => {
    setOpen(true);
    try {
      const response = await axiosInstance.post(
        UPLOAD_SINGLE_CUSTOMER_API_URL,
        {
          marketplace: 'hubspot',
          source: {
            marketplace: 'bigcommerce',
            shopId: bigcommerceSourceShopId,
          },
          target: {
            marketplace: 'hubspot',
            shopId: hubspotTargetShopId,
          },
          limit: params.rowsPerPage,
          source_customer_id: id,
          user_id: userId,
        }
      );
      if (response.data.success) {
        setMsg({
          success: response.data.message,
          error: '',
        });
        setOpen(false);
        setOpenComplete(true);
      } else {
        setMsg({
          success: '',
          error: response.data.message,
        });
        setOpenComplete(false);
        setOpenFailure(true);
      }
    } catch (error) {}
  };

  const exportBulk = async () => {
    if (selected.length) {
      setOpen(true);
      try {
        const response = await axiosInstance.post(EXPORT_CUSTOMERS_API_URL, {
          marketplace: 'hubspot',
          source: {
            marketplace: 'bigcommerce',
            shopId: bigcommerceSourceShopId,
          },
          target: {
            marketplace: 'hubspot',
            shopId: hubspotTargetShopId,
          },
          limit: ROWS_PER_PAGE,
          source_customer_ids: selected,
          user_id: userId,
        });
        if (response.data.success) {
          setMsg({
            success: t('sync_initiated_pleace_check_activities'),
            error: '',
          });
          setOpen(false);
          setOpenComplete(true);
        } else {
          setMsg({
            success: '',
            error: response.data.message,
          });
          setOpen(false);
          setOpenFailure(true);
        }
      } catch (error) {}
    } else {
      enqueueSnackbar(t('select_atleast_one_customer_to_export'), {
        variant: 'error',
      });
    }
  };

  const handleFilterName = (filterName: string) => {
    setParams({
      ...params,
      skip: 0,
      filterName: filterName,
    });
  };

  return (
    <Page title={t('customers')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ padding: '5px', minHeight: '86vh' }}>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant='h4' sx={{ mt: 13, mb: 3 }}>
          {t('customers')}
        </Typography>
        <Card>
          <CustomerTableToolbar
            filterName={params.filterName}
            onFilterName={handleFilterName}
            exportBulk={exportBulk}
          />
          <CustomersListing
            params={params}
            setParams={setParams}
            selected={selected}
            onSelectRow={onSelectRow}
            onSelectAllRows={onSelectAllRows}
            enablePagination={true}
            exportSingle={exportSingle}
          />
          <SyncInprogressDialog open={open} handleClose={handleClose} />
          <SyncSuccessDialog
            open={openComplete}
            handleClose={handleClose}
            successMsg={msg.success}
          />
          <SyncFailureDialog
            open={openFailure}
            handleClose={handleClose}
            errorMsg={msg.error}
          />
        </Card>
      </Container>
    </Page>
  );
}
