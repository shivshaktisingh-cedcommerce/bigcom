import { DatePicker, LoadingButton } from '@mui/lab';
import {
  Card,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Stack,
  SelectChangeEvent,
  Checkbox,
  Collapse,
} from '@mui/material';
import { t } from 'i18next';
import { useState } from 'react';
import Iconify from 'components/Iconify';
import {
  ExportCustomersType,
  ExportOrderType,
  ExportProductsType,
  ImportCustomersType,
  ImportOrderType,
  ImportProductsType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { fDateTimeSuffix, fDateToYMD } from 'utils/formatTime';
import useConnectedApps from 'hooks/useConnectedApps';
import useResponsive from 'hooks/useResponsive';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  buttonText: string;
  loading?: boolean;
  type: 'import' | 'export';
  handleCustomerImportExport: (
    data: ImportCustomersType | ExportCustomersType
  ) => void;
  handleProductsImportExport: (
    data: ImportProductsType | ExportProductsType
  ) => void;
  handleOrderImportExport: (data: ImportOrderType | ExportOrderType) => void;
};

export default function ImportExportCard({
  title,
  subtitle,
  description,
  icon,
  buttonText,
  loading = false,
  type,
  handleCustomerImportExport,
  handleProductsImportExport,
  handleOrderImportExport,
}: Props) {
  const [formData, setFormData] = useState({
    dataType: 'products',
    startDate: new Date(),
    endDate: new Date(),
  });

  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const userId = localStorage.getItem('user_id');
  const [checked, setChecked] = useState(true);
  const isDesktop = useResponsive('up', 'sm');

  const dataExport = {
    target: {
      marketplace: 'hubspot',
      shopId: hubspotTargetShopId,
    },
    source: {
      marketplace: 'bigcommerce',
      shopId: bigcommerceSourceShopId,
    },
    user_id: userId ?? '',
  };

  const dataImport = {
    target: {
      marketplace: 'hubspot',
      shopId: hubspotTargetShopId,
    },
    source: {
      marketplace: 'bigcommerce',
      shopId: bigcommerceSourceShopId,
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Card sx={{ p: 3, m: 1 }}>
      <Typography
        variant='h4'
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {title}
        <Iconify icon={icon} sx={{ fontSize: 30 }} />
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {subtitle}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{
          mt: 1,
        }}
      >
        {description}
      </Typography>
      <Stack
        direction={isDesktop ? 'row' : 'column'}
        alignItems='center'
        my={3}
      >
        <Typography sx={{ width: '25%' }}>{t('select_data_type')} :</Typography>
        <FormControl>
          <InputLabel>{t('data_type')}</InputLabel>
          <Select
            label={t('data_type')}
            sx={{ width: '250px' }}
            value={formData.dataType}
            onChange={(event: SelectChangeEvent<string>) => {
              setFormData(prevData => ({
                ...prevData,
                dataType: event.target.value,
              }));
            }}
          >
            <MenuItem key='products' value='products' selected>
              {t('products')}
            </MenuItem>
            <MenuItem key='orders' value='orders'>
              {t('orders')}
            </MenuItem>
            <MenuItem key='customers' value='customers'>
              {t('customers')}
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center'>
        <Typography variant='body1'>{t('enable_date_range')}</Typography>
        <Checkbox checked={checked} onChange={handleChange} />
      </Stack>
      <Box sx={{ display: 'flex', minHeight: 75 }}>
        <Collapse in={checked}>
          <Stack
            direction={isDesktop ? 'row' : 'column'}
            alignItems='center'
            mt={2}
          >
            <Typography sx={{ width: '25%' }}>
              {t('set_date_range')} :
            </Typography>
            <Box sx={{ width: '30%' }} display='inline-block'>
              <DatePicker
                mask=''
                inputFormat='yyyy/MM/dd'
                renderInput={props => (
                  <TextField
                    {...props}
                    onKeyDown={e => {
                      e.preventDefault();
                    }}
                  />
                )}
                label={t('start_date')}
                className='mt-5'
                value={formData.startDate}
                onChange={newValue => {
                  setFormData(prevData => ({
                    ...prevData,
                    startDate: newValue!,
                  }));
                }}
              />
            </Box>
            <Box sx={{ width: '30%', ml: 2 }} display='inline-block'>
              <DatePicker
                mask=''
                inputFormat='yyyy/MM/dd'
                renderInput={props => (
                  <TextField
                    {...props}
                    onKeyDown={e => {
                      e.preventDefault();
                    }}
                  />
                )}
                label={t('end_date')}
                className='mt-5'
                value={formData.endDate}
                onChange={newValue => {
                  setFormData(prevData => ({
                    ...prevData,
                    endDate: newValue ?? new Date(),
                  }));
                }}
              />
            </Box>
          </Stack>
        </Collapse>
      </Box>
      <LoadingButton
        type='submit'
        variant='contained'
        loading={loading}
        disabled={false}
        sx={{ mt: 5 }}
        onClick={() => {
          if (formData.dataType === 'products') {
            const data = {
              ...(type === 'import'
                ? {
                    ...dataImport,
                    ...(checked && {
                      data: {
                        'date_created:min': fDateToYMD(formData.startDate),
                        'date_created:max': fDateToYMD(formData.endDate),
                      },
                    }),
                  }
                : {
                    ...dataExport,
                    limit: 10,
                    ...(checked
                      ? {
                          filter: {
                            created_at: {
                              '7': {
                                from: fDateTimeSuffix(formData.startDate),
                                to: fDateTimeSuffix(formData.endDate),
                              },
                            },
                          },
                        }
                      : {
                          profile_id: 'all_products',
                        }),
                  }),
            };
            handleProductsImportExport(data);
          } else if (formData.dataType === 'customers') {
            const data = {
              ...(type === 'import'
                ? {
                    marketplace: 'bigcommerce',
                    target: dataImport.target,
                    source: {
                      ...dataImport.source,
                      data: {
                        isPrimeIntented: true,
                      },
                    },
                    ...(checked && {
                      data: {
                        'date_created:min': fDateToYMD(formData.startDate),
                        'date_created:max': fDateToYMD(formData.endDate),
                      },
                    }),
                  }
                : {
                    ...dataExport,
                    marketplace: 'hubspot',
                    limit: 10,
                    ...(checked
                      ? {
                          filter: {
                            created_at: {
                              '7': {
                                from: fDateTimeSuffix(formData.startDate),
                                to: fDateTimeSuffix(formData.endDate),
                              },
                            },
                          },
                        }
                      : {
                          profile_id: 'all_customers',
                        }),
                  }),
            };
            handleCustomerImportExport(data);
          } else if (formData.dataType === 'orders') {
            const data = {
              ...(type === 'import'
                ? {
                    ...dataImport,
                    marketplace: 'bigcommerce',
                    ...(checked && {
                      data: {
                        min_date_created: fDateToYMD(formData.startDate),
                        max_date_created: fDateToYMD(formData.endDate),
                      },
                    }),
                  }
                : {
                    ...dataExport,
                    marketplace: 'hubspot',
                    limit: 10,
                    ...(checked
                      ? {
                          filter: {
                            created_at: {
                              '7': {
                                from: fDateTimeSuffix(formData.startDate),
                                to: fDateTimeSuffix(formData.endDate),
                              },
                            },
                          },
                        }
                      : {
                          profile_id: 'all_orders',
                        }),
                  }),
            };
            handleOrderImportExport(data);
          }
        }}
      >
        {buttonText}
      </LoadingButton>
    </Card>
  );
}
