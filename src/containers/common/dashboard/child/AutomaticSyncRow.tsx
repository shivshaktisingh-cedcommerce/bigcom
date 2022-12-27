// @mui
import { Stack, Typography, Box } from '@mui/material';
// components
import { useTranslation } from 'react-i18next';

type Props = {
  data: {
    title: string;
    syncEnabled: boolean;
  };
};

export default function AutomaticSyncRow({ data }: Props) {
  const { t } = useTranslation();

  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Typography variant='body2'>{t(data.title)}</Typography>
      <Box
        sx={{
          p: '8px',
          border: '1px solid #229A16',
          borderRadius: 1,
          color: '#229A16',
          fontWeight: '700',
          mr: data.syncEnabled ? '14px' : '10px',
        }}
      >
        {t(data.syncEnabled ? 'sync_enabled' : 'sync_disabled')}
      </Box>
    </Stack>
  );
}
