import {
  Button,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { DataLogType } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import { fDateTime } from 'utils/formatTime';

type Props = {
  row: DataLogType;
  selected: boolean;
  onSelectRow: VoidFunction;
  handleViewDetails: (
    externalObjectId: string,
    request: string,
    response: string
  ) => void;
};

const DataLogsTablesRow = ({
  row,
  selected,
  onSelectRow,
  handleViewDetails,
}: Props) => {
  return (
    <TableRow>
      <TableCell padding='checkbox'>
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row?.objectType ?? ''}</Typography>
      </TableCell>
      <TableCell align='left'>
        <Typography variant='body2' sx={{ wordBreak: 'break-word' }}>
          {row?.internalObjectId ?? ''}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row?.operation ?? ''}</Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row?.action ?? ''}</Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>
          {row?.created_at ? fDateTime(new Date(Number(row?.created_at))) : ''}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Button
          variant='text'
          onClick={() =>
            handleViewDetails(
              row?.externalObjectId,
              row?.request,
              row?.response
            )
          }
        >
          {t('view_details')}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default DataLogsTablesRow;
