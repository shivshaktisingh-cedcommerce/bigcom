import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import { GET_ALL_CUSTOMERS_API_URL } from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import { requestgetAllCustomers } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import CustomTablePagination from 'components/pagination/CustomTablePagination';
import PartialPageSpinner from 'components/PartialPageSpinner';
import Scrollbar from 'components/Scrollbar';
import { TableHeadCustom, TableNoData } from 'components/table';
import {
  CustomersList,
  CustomersListType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import CustomersTableRow from './CustomersTableRow';

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

const CustomersListing = ({
  params,
  setParams,
  selected,
  onSelectRow,
  onSelectAllRows,
  enablePagination = true,
  exportSingle,
}: Props) => {
  const TABLE_HEAD = [
    { id: 'first_name', label: t('first_name'), align: 'left' },
    { id: 'last_name', label: t('last_name'), align: 'left' },
    { id: 'email', label: t('email'), align: 'left' },
    { id: 'phone', label: t('phone'), align: 'center' },
    { id: 'view_in_hubspot', label: t('view_in_hubspot'), align: 'center' },
    ...(exportSingle ? [{ id: 'action', label: '' }] : []),
  ];

  const { filterName, skip, rowsPerPage } = params;

  let contentLoad: ReactNode = {};

  const activePage = skip / rowsPerPage + 1;

  const mapPages = (data: CustomersList[]) => {
    const rows: ReactNode[] = [];
    data.forEach((row, index) => {
      rows.push(
        <CustomersTableRow
          key={index}
          row={row}
          selected={selected.includes(row.source_customer_id)}
          onSelectRow={() => onSelectRow(row.source_customer_id)}
          exportSingle={exportSingle}
        />
      );
    });

    return rows;
  };

  const { data, isLoading } = useQuery<CustomersListType>(
    [GET_ALL_CUSTOMERS_API_URL, skip, filterName, rowsPerPage],
    () => requestgetAllCustomers(rowsPerPage, activePage, filterName),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <PartialPageSpinner />;
  }

  const customers = data?.data;

  const totalPage = customers?.count
    ? Math.ceil((customers?.count ?? 0) / rowsPerPage)
    : 0;

  if (customers) {
    contentLoad = customers?.rows.length ? (
      <TableBody>{mapPages(customers?.rows)}</TableBody>
    ) : (
      <>
        <TableNoData isNotFound={true} Message={t('customers')} />
      </>
    );
  }

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
                        customers?.rows
                          ? customers?.rows.map(row => row.source_customer_id)
                          : []
                      )
                  : undefined
              }
            />
            {contentLoad}
          </Table>
        </TableContainer>
      </Scrollbar>
      {enablePagination && customers && totalPage > 1 && (
        <CustomTablePagination
          params={params}
          setParams={setParams}
          totalPage={totalPage}
        />
      )}
    </>
  );
};

export default CustomersListing;
