import {
  Card,
  Stack,
  Pagination,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import { t } from 'i18next';
import { Dispatch, SetStateAction } from 'react';

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
  totalPage: number;
};

const CustomTablePagination = ({ params, setParams, totalPage }: Props) => {
  const viewCount = [10, 20, 50, 100];
  const { rowsPerPage, skip } = params;
  const handleRangeChange = (event: SelectChangeEvent) => {
    setParams({
      ...params,
      skip: 0,
      rowsPerPage: Number(event.target.value),
    });
  };

  return (
    <Card sx={{ p: 3 }}>
      <Stack direction='row' alignItems='center' justifyContent='end'>
        <Pagination
          color='primary'
          variant='outlined'
          sx={{ mr: 5 }}
          count={totalPage}
          page={Math.ceil(skip / rowsPerPage + 1)}
          onChange={(e, pageNo) =>
            setParams({
              ...params,
              skip: (pageNo - 1) * rowsPerPage,
            })
          }
        />
        <Divider orientation='vertical' flexItem />
        <Box sx={{ ml: 5 }}>
          <FormControl size='small' fullWidth>
            <InputLabel id='demo-simple-select-label'>{t('view')}</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={rowsPerPage.toString()}
              label={t('view')}
              onChange={handleRangeChange}
            >
              {viewCount.map(value => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Card>
  );
};

export default CustomTablePagination;
