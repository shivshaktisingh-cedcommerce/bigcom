import { SyntheticEvent, useState } from 'react';
import {
  Box,
  Card,
  Button,
  Divider,
  Tab,
  Tabs,
  Stack,
  Link,
} from '@mui/material';
import Iconify from '../../../../components/Iconify';
import ProductsListing from 'containers/common/products/child/ProductsListing';
import useTable from 'hooks/useTable';
import CustomersListing from 'containers/common/customers/child/CustomersListing';
import OrdersListing from 'containers/common/orders/child/OrdersListing';
import { t } from 'i18next';
import { PATH_PAGE } from 'routes/paths';

export default function SummaryInfo() {
  const [tab, setTab] = useState('products');
  const { selected, onSelectRow, onSelectAllRows } = useTable();
  const [params, setParams] = useState({
    skip: 0,
    filterName: '',
    rowsPerPage: 10,
  });

  const SUMMARY_TABS = [
    {
      value: 'products',
      link: PATH_PAGE.products,
      component: (
        <ProductsListing
          params={params}
          setParams={setParams}
          selected={selected}
          onSelectRow={onSelectRow}
          onSelectAllRows={onSelectAllRows}
          enablePagination={false}
        />
      ),
    },
    {
      value: 'customers',
      link: PATH_PAGE.customers,
      component: (
        <CustomersListing
          params={params}
          setParams={setParams}
          selected={selected}
          onSelectRow={onSelectRow}
          onSelectAllRows={onSelectAllRows}
          enablePagination={false}
        />
      ),
    },
    {
      value: 'orders',
      link: PATH_PAGE.orders,
      component: (
        <OrdersListing
          params={params}
          setParams={setParams}
          selected={selected}
          onSelectRow={onSelectRow}
          onSelectAllRows={onSelectAllRows}
          enablePagination={false}
        />
      ),
    },
  ];

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Card sx={{ minHeight: 665 }}>
      <Stack
        sx={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Tabs
          allowScrollButtonsMobile
          variant='scrollable'
          scrollButtons='auto'
          value={tab}
          sx={{ px: 2 }}
          onChange={handleTabChange}
        >
          {SUMMARY_TABS.map((tab, index) => (
            <Tab
              disableRipple
              key={index}
              label={tab.value}
              value={tab.value}
            />
          ))}
        </Tabs>
        {SUMMARY_TABS.map((tabVal, index) => {
          const isMatched: boolean = tabVal.value === tab;

          return (
            isMatched && (
              <Box key={index} sx={{ p: 2 }}>
                <Button
                  href={tabVal.link}
                  component={Link}
                  color='inherit'
                  endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
                >
                  {t('view_all')}
                </Button>
              </Box>
            )
          );
        })}
      </Stack>
      <Divider />
      {SUMMARY_TABS.map((tabVal, index) => {
        const isMatched: boolean = tabVal.value === tab;

        return isMatched && <Box key={index}>{tabVal.component}</Box>;
      })}
    </Card>
  );
}
