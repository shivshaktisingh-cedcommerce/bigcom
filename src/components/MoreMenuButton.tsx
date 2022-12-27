import { IconButton } from '@mui/material';
import Iconify from './Iconify';
import MenuPopover from './MenuPopover';

type MoreMenuButtonProps = {
  actions: React.ReactNode;
  open: HTMLElement | null;
  smUp?: boolean;
  onClose: VoidFunction;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function MoreMenuButton({
  actions,
  open,
  smUp,
  onOpen,
  onClose,
}: MoreMenuButtonProps) {
  return (
    <>
      <IconButton size='large' color='inherit' onClick={onOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={onClose}
        disabledArrow={!smUp}
        sx={{
          ml: 0.5,
          width: 'auto',
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
