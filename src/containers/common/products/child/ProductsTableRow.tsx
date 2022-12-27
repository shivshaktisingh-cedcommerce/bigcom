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
import { ProductsList } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import Image from 'components/Image';
import { TableMoreMenu } from 'components/table';
import { useState } from 'react';
import useConnectedApps from 'hooks/useConnectedApps';
import { isArray } from 'lodash';
import toolTip from 'assets/images/toolTip.png';
import Iconify from 'components/Iconify';

type Props = {
  row: ProductsList;
  selected: boolean;
  onSelectRow: VoidFunction;
  exportSingle?: (id: string) => void;
};

export default function ProductsTableRow({
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
    rowHubspotid = row?.marketplace[rowIndex]?.target_product_id ?? '';
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
      <TableCell align='center'>
        <Stack alignItems='center'>
          {row?.image_url && (
            <Image
              visibleByDefault
              disabledEffect
              alt={row.title}
              src={row.image_url}
              sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
            />
          )}
        </Stack>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row.source_product_id}</Typography>
      </TableCell>
      <TableCell align='left'>
        <Typography variant='body2'>{row.title}</Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row.sku}</Typography>
      </TableCell>
      <TableCell align='center'>
        <Typography variant='body2'>{row?.price ?? 0}</Typography>
      </TableCell>
      <TableCell align='center'>
        {rowStatus ? (
          <Stack direction='row' justifyContent='center' spacing={1}>
            <Typography variant='body2'>{rowHubspotid}</Typography>
            <Link
              href={`https://app.hubspot.com/settings/${hubspotPortalId}/sales/products`}
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
                  exportSingle(row.source_product_id);
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
