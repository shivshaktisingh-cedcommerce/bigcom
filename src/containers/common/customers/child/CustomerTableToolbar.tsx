// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, InputAdornment, TextField } from '@mui/material';
import Iconify from 'components/Iconify';
import { t } from 'i18next';
// components

// ----------------------------------------------------------------------

type Props = {
  filterName: string;
  onFilterName: (value: string) => void;
  exportBulk: () => void;
};

export default function CustomerTableToolbar({
  filterName,
  onFilterName,
  exportBulk,
}: Props) {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ py: 2.5, px: 3 }}
    >
      <TextField
        value={filterName}
        onChange={event => onFilterName(event.target.value)}
        placeholder={t('search_customer')}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Iconify
                icon={'eva:search-fill'}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
        }}
      />
      <LoadingButton variant='contained' loading={false} onClick={exportBulk}>
        {t('sync_selected_data_row')}
      </LoadingButton>
    </Stack>
  );
}
