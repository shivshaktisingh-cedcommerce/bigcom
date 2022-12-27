import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import { GET_ALL_ORDERS_API_URL } from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import { getAllOrders } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import CustomTablePagination from 'components/pagination/CustomTablePagination';
import PartialPageSpinner from 'components/PartialPageSpinner';
import Scrollbar from 'components/Scrollbar';
import { TableHeadCustom, TableNoData } from 'components/table';
import {
  OrdersList,
  OrdersListType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import OrdersTableRow from './OrdersTableRow';

type Props = {
  params: {
    skip: number;
    filterName: string;
    rowsPerPage: number;
  };
  setParams: Dispatch<
    SetStateAction<{
      skip: number;
      filterName: string;
      rowsPerPage: number;
    }>
  >;
  selected: string[];
  onSelectRow: (id: string) => void;
  onSelectAllRows: (checked: boolean, newSelecteds: string[]) => void;
  enablePagination?: boolean;
  exportSingle?: (id: string) => void;
};

const OrdersListing = ({
  params,
  setParams,
  selected,
  onSelectRow,
  onSelectAllRows,
  enablePagination = true,
  exportSingle,
}: Props) => {
  const TABLE_HEAD = [
    { id: 'order_id', label: t('order_id'), align: 'center' },
    { id: 'customer_id', label: t('customer_id'), align: 'left' },
    { id: 'amount', label: t('amount'), align: 'center' },
    { id: 'status', label: t('status'), align: 'center' },
    { id: 'date_created', label: t('date_created'), align: 'left' },
    { id: 'view_in_hubspot', label: t('view_in_hubspot'), align: 'center' },
    ...(exportSingle ? [{ id: 'action', label: '' }] : []),
  ];
  const { filterName, skip, rowsPerPage } = params;
  const { bigcommerceSourceShopId } = useConnectedApps();

  let contentLoad: ReactNode = {};

  const activePage = skip / rowsPerPage + 1;

  const mapPages = (data: OrdersList[]) => {
    const rows: ReactNode[] = [];
    data.forEach(row => {
      rows.push(
        <OrdersTableRow
          key={row._id.$oid}
          row={row}
          selected={selected.includes(row.marketplace_reference_id)}
          onSelectRow={() => onSelectRow(row.marketplace_reference_id)}
          exportSingle={exportSingle}
        />
      );
    });

    return rows;
  };

  const { data, isLoading } = useQuery<OrdersListType>(
    [GET_ALL_ORDERS_API_URL, skip, filterName, rowsPerPage],
    () =>
      getAllOrders(
        rowsPerPage,
        activePage,
        bigcommerceSourceShopId,
        filterName
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <PartialPageSpinner />;
  }

  const orders = data?.data;

  if (orders) {
    contentLoad = orders?.rows.length ? (
      <TableBody>{mapPages(orders?.rows)}</TableBody>
    ) : (
      <>
        <TableNoData isNotFound={true} Message={t('orders')} />
      </>
    );
  }

  const totalPage = orders?.count
    ? Math.ceil((orders?.count ?? 0) / rowsPerPage)
    : 0;

  return (
    <>
      <Scrollbar>
        <TableContainer
          component={Paper}
          sx={{ minWidth: 800, minHeight: 596 }}
        >
          <Table aria-label='simple table'>
            <TableHeadCustom
              headLabel={TABLE_HEAD}
              rowCount={rowsPerPage}
              numSelected={selected.length}
              onSelectAllRows={
                exportSingle
                  ? checked =>
                      onSelectAllRows(
                        checked,
                        orders?.rows
                          ? orders?.rows.map(
                              row => row.marketplace_reference_id
                            )
                          : []
                      )
                  : undefined
              }
            />
            {contentLoad}
          </Table>
        </TableContainer>
      </Scrollbar>
      {enablePagination && orders && totalPage > 1 && (
        <CustomTablePagination
          params={params}
          setParams={setParams}
          totalPage={totalPage}
        />
      )}
    </>
  );
};

export default OrdersListing;
