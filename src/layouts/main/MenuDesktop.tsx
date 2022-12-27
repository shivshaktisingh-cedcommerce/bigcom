import { useState, useEffect, ReactNode } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Link,
  Stack,
  LinkProps,
  Button,
  MenuItem,
  Menu,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import { MenuProps, MenuItemProps } from './type';
import MoreMenuButton from 'components/MoreMenuButton';

// ----------------------------------------------------------------------

interface RouterLinkProps extends LinkProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

const LinkStyle = styled(Link)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    color: 'primary',
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({
  isOffset,
  isHome,
  navConfig,
}: MenuProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction='row'>
      {navConfig.map(link => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export type IconBulletProps = {
  type?: 'item';
};

function IconBullet({ type = 'item' }: IconBulletProps) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component='span'
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  isHome: boolean;
  isOffset: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

function MenuDesktopItem({
  item,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}: MenuDesktopItemProps) {
  const { title, path, children, icon } = item;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (children && title !== 'more') {
    return (
      <>
        <Button
          component={LinkStyle}
          onClick={(e: React.MouseEvent<HTMLSpanElement>) => handleClick(e)}
          startIcon={icon}
          variant='text'
          size='small'
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            color: 'text.primary',
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Iconify
            icon={isOpen ? 'eva:arrow-up-fill' : 'eva:arrow-down-fill'}
            sx={{ ml: 0.5, width: 20, height: 20 }}
          />
        </Button>

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {children.map(list => {
            const { items } = list;
            {
              items.map((item, index) => (
                <MenuItem key={index}>{item.title}</MenuItem>
              ));
            }
          })}
        </Menu>
      </>
    );
  }

  if (title === 'more') {
    return (
      <Button
        sx={{ pr: 3 }}
        component={MoreMenuButton}
        open={null}
        onClose={onClose}
        onOpen={onOpen}
        actions={
          <>
            <MenuItem sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} />
              Delete
            </MenuItem>

            <MenuItem>
              <Iconify icon={'eva:edit-fill'} />
              Edit
            </MenuItem>
          </>
        }
      />
    );
  }

  return (
    <Button
      to={path}
      component={RouterLink}
      end={path === '/'}
      startIcon={icon}
      variant='text'
      size='small'
      sx={{
        color: 'text.primary',
        '&:hover': {
          color: 'primary',
          opacity: 0.48,
        },
        px: 3,
      }}
    >
      {title}
    </Button>
  );
}
