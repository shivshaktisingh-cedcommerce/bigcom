import { Stack, Typography } from '@mui/material';
import { RHFCheckbox } from 'components/hook-form';
import { t } from 'i18next';

const AbondonedCartDetails = () => {
  const syncSettings = [
    { name: 'abandoncartSync', label: 'abondantcart_sync' },
    { name: 'contactSync', label: 'contact_sync' },
    { name: 'dealSync', label: 'order_sync' },
    { name: 'productSync', label: 'product_sync' },
  ];

  return (
    <Stack>
      {syncSettings.map((syncType, index) => {
        return (
          <Stack key={index} direction='row' alignItems='center' pl={2}>
            <Typography variant='subtitle2' sx={{ mr: 3 }}>
              {t('enable_disable')}
            </Typography>
            <RHFCheckbox name={syncType.name} label={t(syncType.label)} />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default AbondonedCartDetails;
