import Label from 'components/Label';
import {
  Checkbox,
  IconButton,
  Link,
  MenuItem,
  Stack,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { TableMoreMenu } from 'components/table';
import { OrdersList } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import { useState } from 'react';
import useConnectedApps from 'hooks/useConnectedApps';
import { isArray } from 'lodash';
import Image from 'components/Image';
import toolTip from 'assets/images/toolTip.png';
import Iconify from 'components/Iconify';

type Props = {
  row: OrdersList;
  selected: boolean;
  onSelectRow: VoidFunction;
  exportSingle?: (id: string) => void;
};

export default function OrdersTableRow({
  row,
  selected,
  onSelectRow,
  exportSingle,
}: Props) {
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);
  const { hubspotPortalId } = useConnectedApps();
  const rowIndex = isArray(row.targets)
    ? row.targets.findIndex(x => x.target_marketplace === 'hubspot')
    : -1;
  let rowStatus = null;
  let rowHubspotid = '';
  let errorMsg = '';
  if (rowIndex !== -1) {
    rowStatus = row.targets[rowIndex].status === 'active' ? true : false;
    rowHubspotid = row?.targets[rowIndex]?.target_order_id ?? '';
    errorMsg =
      row.targets[rowIndex].status === 'active'
        ? ''
        : row.targets[rowIndex]?.errors?.[0] ?? '';
  }

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow>
      {exportSingle && (
        <TableCell padding='checkbox'>
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>
      )}
      <TableCell align='center'>
        <Typography variant='body2'>
          {row?.marketplace_reference_id ?? ''}
        </Typography>
      </TableCell>
      <TableCell align='left'>
        <Typography variant='body2'>{row?.customer?.email ?? ''}</Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>
          {row?.currency + ' ' ?? ''}
          {row?.total?.price ?? 0}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography noWrap>
          <Label color={'primary'} sx={{ textTransform: 'capitalize' }}>
            {row?.attributes?.map(
              item => item.key === 'bigcommerce_order_status' && item.value
            ) ?? ''}
          </Label>
        </Typography>
      </TableCell>
      <TableCell align='left'>
        <Typography variant='body2'>{row?.source_created_at ?? ''}</Typography>
      </TableCell>
      <TableCell align='center'>
        {rowStatus ? (
          <Stack direction='row' justifyContent='center' spacing={1}>
            <Typography variant='body2'>{rowHubspotid}</Typography>
            <Link
              href={`https://app.hubspot.com/contacts/${hubspotPortalId}/deal/${rowHubspotid}`}
              target='_blank'
              variant='body2'
            >
              <Iconify icon={'ri:external-link-line'} />
            </Link>
          </Stack>
        ) : (
          rowIndex !== -1 && (
            <Tooltip title={errorMsg}>
              <IconButton>
                <Image
                  src={toolTip}
                  visibleByDefault
                  disabledEffect
                  sx={{
                    width: '20px',
                    height: '20px',
                  }}
                />
              </IconButton>
            </Tooltip>
          )
        )}
      </TableCell>
      {exportSingle && (
        <TableCell align='right'>
          <TableMoreMenu
            open={openMenu}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            actions={
              <MenuItem
                onClick={() => {
                  exportSingle(row.marketplace_reference_id);
                  handleCloseMenu();
                }}
              >
                {t('export')}
              </MenuItem>
            }
          />
        </TableCell>
      )}
    </TableRow>
  );
}
