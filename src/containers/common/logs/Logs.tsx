import {
  Card,
  Container,
  Paper,
  Stack,
  Table,
  TableContainer,
  MenuItem,
  InputLabel,
  Select,
  Tooltip,
  FormControl,
  Typography,
  IconButton,
  TableBody,
  Pagination,
  SelectChangeEvent,
} from '@mui/material';
import { TableHeadCustom, TableNoData } from 'components/table';
import { useTranslation } from 'react-i18next';
import Page from '../../../components/Page';
import toolTip from 'assets/images/toolTip.png';
import Image from 'components/Image';
import { ReactNode, useState } from 'react';
import {
  DataLogDataType,
  DataLogType,
} from '../user/ConnectHubspot/BigcommerceHubspotType';
import useConnectedApps from 'hooks/useConnectedApps';
import { getLogsData } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import PartialPageSpinner from 'components/PartialPageSpinner';
import useTable from 'hooks/useTable';
import DataLogsTablesRow from './child/DataLogsTablesRow';
import LogsDialog from './dialog/LogsDialog';
import Scrollbar from 'components/Scrollbar';
import { useQuery } from 'react-query';
import { GET_LOGS_DATA_API_URL } from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import Iconify from 'components/Iconify';

export default function Logs() {
  const { t } = useTranslation();
  const ROWS_PER_PAGE = 10;
  const TABLE_HEAD = [
    {
      id: 'object_type',
      label: t('object_type'),
      align: 'center',
      width: '15%',
    },
    {
      id: 'internal_object_id',
      label: t('internal_object_id'),
      align: 'left',
      width: '25%',
    },
    { id: 'operation', label: t('operation'), align: 'center', width: '15%' },
    { id: 'action', label: t('action'), align: 'center', width: '15%' },
    { id: 'created_at', label: t('created_at'), align: 'center', width: '15%' },
    { id: '', label: t('details'), align: 'center', width: '12%' },
  ];
  const { hubspotTargetShopId } = useConnectedApps();
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    externalObjectId: '',
    request: '',
    response: '',
  });
  const [object, setObject] = useState('all');
  const [skip, setSkip] = useState(0);

  const { selected, onSelectRow, onSelectAllRows } = useTable({
    defaultOrderBy: 'object_type',
  });

  const mapData = (data: DataLogType[]) => {
    const rows: ReactNode[] = [];
    data.forEach(row => {
      rows.push(
        <DataLogsTablesRow
          key={row._id}
          row={row}
          selected={selected.includes(row._id)}
          onSelectRow={() => onSelectRow(row._id)}
          handleViewDetails={(
            externalObjectId: string,
            request: string,
            response: string
          ) => {
            setDialogContent({
              externalObjectId: externalObjectId,
              request: request,
              response: response,
            });
            handleOpenClose();
          }}
        />
      );
    });

    return rows;
  };

  const { data: logsData } = useQuery<DataLogDataType>(
    [GET_LOGS_DATA_API_URL, skip, object],
    () => getLogsData(hubspotTargetShopId, ROWS_PER_PAGE, skip, object),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (logsData === undefined) {
    return (
      <Card sx={{ minHeight: '86vh' }}>
        <PartialPageSpinner />
      </Card>
    );
  }

  let contentLoad: ReactNode = {};
  const totalPage = logsData?.totalCount
    ? Math.ceil((logsData?.totalCount ?? 0) / ROWS_PER_PAGE)
    : 0;

  if (logsData) {
    contentLoad = logsData?.data.length ? (
      <TableBody>{mapData(logsData?.data)}</TableBody>
    ) : (
      <TableBody>
        <TableNoData isNotFound={true} Message={t('logs')} />
      </TableBody>
    );
  }

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setObject(event.target.value);
    setSkip(0);
  };

  return (
    <Page
      title={t('hubspot_data_logs')}
      sx={{ background: '#E5E5E5', minHeight: '86vh' }}
    >
      <Container maxWidth='xl'>
        <Stack sx={{ py: 12 }}>
          <Typography variant='h4' sx={{ ml: 1 }}>
            {t('hubspot_data_logs')}
            <Tooltip
              title={t('logs_will_automatically_removed_after_seven_days')}
            >
              <IconButton>
                <Image
                  src={toolTip}
                  visibleByDefault
                  disabledEffect
                  sx={{
                    position: 'absolute',
                    width: '20px',
                    ml: 3,
                    height: '20px',
                  }}
                />
              </IconButton>
            </Tooltip>
          </Typography>
          <Card sx={{ my: 3 }}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              px={3}
              py={2}
            >
              <Typography variant='subtitle2'>{t('object_type')}</Typography>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>{t('object_type')}</InputLabel>
                <Select
                  label={t('object_type')}
                  autoWidth
                  sx={{ minWidth: '50px' }}
                  value={object}
                  onChange={handleChange}
                >
                  <MenuItem value='all'>{t('all')}</MenuItem>
                  <MenuItem value='Contact'>{t('contact')}</MenuItem>
                  <MenuItem value='Product'>{t('products')}</MenuItem>
                  <MenuItem value='Deal'>{t('deal')}</MenuItem>
                  <MenuItem value='Deal-Contact'>{t('deal_contact')}</MenuItem>
                  <MenuItem value='Line-item'>{t('line_item')}</MenuItem>
                  <MenuItem value='LineItem-Deal'>
                    {t('line_item_deal')}
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Scrollbar>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label='simple table'>
                  <TableHeadCustom
                    rowCount={ROWS_PER_PAGE}
                    numSelected={selected.length}
                    headLabel={TABLE_HEAD}
                    onSelectAllRows={checked =>
                      onSelectAllRows(
                        checked,
                        logsData?.data ? logsData?.data.map(row => row._id) : []
                      )
                    }
                  />
                  {contentLoad}
                </Table>
              </TableContainer>
            </Scrollbar>
            {totalPage > 1 && (
              <Card
                sx={{
                  display: 'flex',
                  paddingBottom: '25px',
                  justifyContent: 'center',
                  paddingTop: '10px',
                }}
              >
                <Pagination
                  color='primary'
                  variant='outlined'
                  count={totalPage}
                  page={Math.ceil(skip / ROWS_PER_PAGE + 1)}
                  onChange={(e, pageNo) =>
                    setSkip((pageNo - 1) * ROWS_PER_PAGE)
                  }
                />
              </Card>
            )}
          </Card>
        </Stack>
        <LogsDialog
          open={open}
          handleOpenClose={handleOpenClose}
          dialogContent={dialogContent}
        />
      </Container>
    </Page>
  );
}
