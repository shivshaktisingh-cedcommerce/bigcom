import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem } from '@mui/material';
import { PATH_AUTH } from '../../../routes/paths';
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import MyAvatar from '../../../components/MyAvatar';
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import usePortalId from 'hooks/portal/usePortalId';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const MENU_OPTIONS = (portalId: string) => [
  {
    label: i18next.t('home'),
    linkTo: '/',
  },
];

export default function AccountPopover() {
  const portalId = usePortalId();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  const isMountedRef = useIsMountedRef();

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });

      if (isMountedRef.current) {
        handleClose();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(t('unable_to_logout'), { variant: 'error' });
    }
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <MyAvatar />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            {user?.firstname}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS(portalId).map(option => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          {t('logout')}
        </MenuItem>
      </MenuPopover>
    </>
  );
}