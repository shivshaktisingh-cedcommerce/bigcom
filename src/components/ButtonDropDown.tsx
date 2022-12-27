// @mui
import { Button, SxProps } from '@mui/material';
//
import Iconify from './Iconify';
import MenuPopover from './MenuPopover';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  actions: React.ReactNode;
  open?: HTMLElement | null;
  sx?: SxProps;
  onClose?: VoidFunction;
  onOpen?: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function ButtonDropDown({
  title,
  actions,
  open,
  sx,
  onClose,
  onOpen,
}: Props) {
  return (
    <>
      <Button
        variant='contained'
        sx={sx}
        onClick={onOpen}
        endIcon={
          <Iconify
            icon={open ? 'dashicons:arrow-up' : 'dashicons:arrow-down'}
          />
        }
      >
        {title}
      </Button>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={onClose}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 },
          },
        }}
      >
        {actions}
      </MenuPopover>
    </>
  );
}
