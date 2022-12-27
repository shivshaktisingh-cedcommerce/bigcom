import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { RHFTextField } from 'components/hook-form';
import { TableHeadCustom } from 'components/table';
import { t } from 'i18next';
import { ReactNode } from 'react';

const RFMSetting = () => {
  const TABLE_HEAD = [
    {
      id: 'score',
      label: t('score'),
      info: t('rating_for_rfm_segmentation'),
      width: '30%',
    },
    {
      id: 'recency',
      label: t('recency'),
      info: t('days_since_last_order'),
    },
    {
      id: 'frequency',
      label: t('frequency'),
      info: t('total_orders_placed'),
    },
    {
      id: 'monetary',
      label: t('monetary'),
      info: t('total_money_spent'),
    },
  ];

  const mapTableRow = () => {
    const rows: ReactNode[] = [];
    for (let i = 5; i > 0; i--) {
      rows.push(
        <TableRow key={i}>
          <TableCell align='left'>{i}</TableCell>
          <TableCell align='left'>
            {i === 1 || i === 5 ? (
              <RHFTextField
                label={i === 5 ? t('less_than') : t('more_than')}
                type='number'
                id={`recency${i}`}
                name={`score${i}[0]`}
              />
            ) : (
              <Stack spacing={2}>
                <RHFTextField
                  label={t('from')}
                  type='number'
                  name={`score${i}.from[0]`}
                />
                <RHFTextField
                  label={t('to')}
                  type='number'
                  name={`score${i}.to[0]`}
                />
              </Stack>
            )}
          </TableCell>
          <TableCell align='left'>
            {i === 1 || i === 5 ? (
              <RHFTextField
                label={i === 1 ? t('less_than') : t('more_than')}
                type='number'
                name={`score${i}[1]`}
              />
            ) : (
              <Stack spacing={2}>
                <RHFTextField
                  label={t('from')}
                  type='number'
                  name={`score${i}.from[1]`}
                />

                <RHFTextField
                  label={t('to')}
                  type='number'
                  name={`score${i}.to[1]`}
                />
              </Stack>
            )}
          </TableCell>
          <TableCell align='left'>
            {i === 1 || i === 5 ? (
              <RHFTextField
                label={i === 1 ? t('less_than') : t('more_than')}
                type='number'
                name={`score${i}[2]`}
              />
            ) : (
              <Stack spacing={2}>
                <RHFTextField
                  label={t('from')}
                  type='number'
                  name={`score${i}.from[2]`}
                />
                <RHFTextField
                  label={t('to')}
                  type='number'
                  name={`score${i}.to[2]`}
                />
              </Stack>
            )}
          </TableCell>
        </TableRow>
      );
    }

    return rows;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800, width: '80%' }} aria-label='simple table'>
        <TableHeadCustom headLabel={TABLE_HEAD} />
        <TableBody>{mapTableRow()}</TableBody>
        <TableHeadCustom headLabel={TABLE_HEAD} />
      </Table>
    </TableContainer>
  );
};

export default RFMSetting;
