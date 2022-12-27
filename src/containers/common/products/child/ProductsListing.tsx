import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import {
  GET_ALL_PRODUCTS_API_URL,
  GET_PRODUCTS_COUNT_API_URL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import {
  getAllProducts,
  getProductsCount,
} from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import CustomTablePagination from 'components/pagination/CustomTablePagination';
import PartialPageSpinner from 'components/PartialPageSpinner';
import Scrollbar from 'components/Scrollbar';
import { TableHeadCustom, TableNoData } from 'components/table';
import {
  ProductsCountType,
  ProductsList,
  ProductsListType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import ProductsTableRow from './ProductsTableRow';

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

const ProductsListing = ({
  params,
  setParams,
  selected,
  onSelectRow,
  onSelectAllRows,
  enablePagination = true,
  exportSingle,
}: Props) => {
  const TABLE_HEAD = [
    { id: 'image', label: t('image'), align: 'center' },
    { id: 'id', label: t('id'), align: 'center' },
    { id: 'title', label: t('title'), align: 'left' },
    { id: 'sku', label: t('sku'), align: 'center' },
    { id: 'price', label: t('price'), align: 'center' },
    { id: 'view_in_hubspot', label: t('view_in_hubspot'), align: 'center' },
    ...(exportSingle ? [{ id: 'action', label: '' }] : []),
  ];
  const { bigcommerceSourceShopId } = useConnectedApps();

  const { filterName, skip, rowsPerPage } = params;

  let contentLoad: ReactNode = {};

  const activePage = skip / rowsPerPage + 1;

  const mapPages = (data: ProductsList[]) => {
    const rows: ReactNode[] = [];
    data.forEach(row => {
      rows.push(
        <ProductsTableRow
          key={row._id}
          row={row}
          selected={selected.includes(row.source_product_id)}
          onSelectRow={() => onSelectRow(row.source_product_id)}
          exportSingle={exportSingle}
        />
      );
    });

    return rows;
  };
  const { data, isLoading } = useQuery<ProductsListType>(
    [GET_ALL_PRODUCTS_API_URL, skip, filterName, rowsPerPage],
    () =>
      getAllProducts(
        rowsPerPage,
        activePage,
        bigcommerceSourceShopId,
        filterName
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: productsCountData, isLoading: isLoadingCount } =
    useQuery<ProductsCountType>(
      [GET_PRODUCTS_COUNT_API_URL, filterName],
      () => getProductsCount(bigcommerceSourceShopId, filterName),
      {
        refetchOnWindowFocus: false,
      }
    );

  if (isLoading || isLoadingCount) {
    return <PartialPageSpinner />;
  }

  const totalPage = productsCountData?.data?.count
    ? Math.ceil((productsCountData?.data?.count ?? 0) / rowsPerPage)
    : 0;

  const products = data?.data;

  if (products) {
    contentLoad = products?.rows.length ? (
      <TableBody>{mapPages(products?.rows)}</TableBody>
    ) : (
      <>
        <TableNoData isNotFound={true} Message={t('products')} />
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
              rowCount={rowsPerPage}
              numSelected={selected.length}
              headLabel={TABLE_HEAD}
              onSelectAllRows={
                exportSingle
                  ? checked =>
                      onSelectAllRows(
                        checked,
                        products?.rows
                          ? products?.rows.map(row => row.source_product_id)
                          : []
                      )
                  : undefined
              }
            />
            {contentLoad}
          </Table>
        </TableContainer>
      </Scrollbar>
      {enablePagination && products && totalPage > 1 && (
        <CustomTablePagination
          params={params}
          setParams={setParams}
          totalPage={totalPage}
        />
      )}
    </>
  );
};

export default ProductsListing;
