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
import { CustomersList } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import { isArray } from 'lodash';
import { useState } from 'react';
import Image from 'components/Image';
import toolTip from 'assets/images/toolTip.png';
import Iconify from 'components/Iconify';

type Props = {
  row: CustomersList;
  selected: boolean;
  onSelectRow: VoidFunction;
  exportSingle?: (id: string) => void;
};

export default function CustomersTableRow({
  row,
  selected,
  onSelectRow,
  exportSingle,
}: Props) {
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);
  const { hubspotPortalId } = useConnectedApps();

  const rowIndex = isArray(row.marketplace)
    ? row.marketplace.findIndex(x => x.target_marketplace === 'hubspot')
    : -1;
  let rowStatus = null;
  let rowHubspotid = '';
  let errorMsg = '';
  if (rowIndex !== -1) {
    rowStatus = row.marketplace[rowIndex].status === 'active' ? true : false;
    rowHubspotid = row?.marketplace[rowIndex]?.target_customer_id ?? '';
    errorMsg =
      row.marketplace[rowIndex].status === 'active'
        ? ''
        : row.marketplace[rowIndex]?.errors?.[0] ?? '';
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
      <TableCell align='left'>
        <Typography variant='body2'>{row.first_name}</Typography>
      </TableCell>
      <TableCell align='left'>
        <Typography variant='body2'>{row.last_name}</Typography>
      </TableCell>
      <TableCell align='left'>
        <Typography variant='body2'>{row.email}</Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row.phone}</Typography>
      </TableCell>
      <TableCell align='center'>
        {rowStatus ? (
          <Stack direction='row' justifyContent='center' spacing={1}>
            <Typography variant='body2'>{rowHubspotid}</Typography>
            <Link
              href={`https://app.hubspot.com/contacts/${hubspotPortalId}/contact/${rowHubspotid}`}
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
        <TableCell align='center'>
          <TableMoreMenu
            open={openMenu}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            actions={
              <MenuItem
                onClick={() => {
                  exportSingle(row.source_customer_id);
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
