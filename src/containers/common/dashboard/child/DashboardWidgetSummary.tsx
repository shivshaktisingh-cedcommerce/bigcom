import { Card, Typography, Stack, Box, Divider } from '@mui/material';
import Iconify from 'components/Iconify';
import PartialPageSpinner from 'components/PartialPageSpinner';
import { t } from 'i18next';
import { FunctionComponent } from 'react';
import { fDateTime } from 'utils/formatTime';

type Props = {
  title: string;
  scoreBicommerce: number;
  scoreHubspot: number;
  loading: boolean;
  syncedDate: string;
};

const DashboardWidgetSummary: FunctionComponent<Props> = ({
  title,
  scoreBicommerce,
  scoreHubspot,
  loading,
  syncedDate,
}) => {
  if (loading) {
    return (
      <Card>
        <PartialPageSpinner />
      </Card>
    );
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        pl: 3,
      }}
    >
      <Typography variant='h6'>{title}</Typography>
      <Stack
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          p: 5,
        }}
      >
        <Box>
          <Typography variant='subtitle2'>{t('bigcommerce')}</Typography>
          <Typography
            variant='h3'
            sx={{
              color: 'text.primary',
              fontSize: '32px',
              p: 1,
            }}
          >
            {scoreBicommerce}
            <Iconify
              sx={{
                mb: 1,
                ml: 1,
                verticalAlign: 'middle',
                width: '20px',
              }}
              icon={'ant-design:arrow-down-outlined'}
            />
          </Typography>
        </Box>
        <Divider
          orientation='vertical'
          sx={{ mx: 'auto', height: 40, color: 'primary' }}
        />
        <Box>
          <Typography variant='subtitle2'>{t('hubspot')}</Typography>
          <Typography
            variant='h3'
            sx={{
              color: 'text.primary',
              fontSize: '32px',
              p: 1,
            }}
          >
            {scoreHubspot}
            <Iconify
              sx={{
                mb: 1,
                ml: 1,
                verticalAlign: 'middle',
                width: '20px',
              }}
              icon={'ant-design:arrow-up-outlined'}
            />
          </Typography>
        </Box>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row'>
          <Iconify
            icon={'ic:twotone-refresh'}
            style={{ color: '#637381' }}
            width='25px'
            height='25px'
          />
          <Typography
            variant='body2'
            sx={{
              color: '#919EAB',
              fontSize: '14px',
              fontWeight: 700,
              ml: '3px',
            }}
          >
            {t('last_synced')}:
          </Typography>
        </Stack>
        <Typography
          variant='body2'
          sx={{
            color: '#919EAB',
            fontSize: '14px',
          }}
        >
          {syncedDate ? fDateTime(syncedDate) : ''}
        </Typography>
      </Stack>
    </Card>
  );
};

export default DashboardWidgetSummary;
