import { ReactNode } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Button, Popover, ButtonProps, LinkProps } from '@mui/material';
// config
import { NAVBAR } from '../../../config';

// ----------------------------------------------------------------------

type IProps = LinkProps & ButtonProps;

interface ListItemStyleProps extends IProps {
  component?: ReactNode;
  to?: string;
  activeRoot?: boolean;
  activeSub?: boolean;
  subItem?: boolean;
  open?: boolean;
}

export const ListItemStyle = styled(Button, {
  shouldForwardProp: prop =>
    prop !== 'activeRoot' &&
    prop !== 'activeSub' &&
    prop !== 'subItem' &&
    prop !== 'open',
})<ListItemStyleProps>(({ activeRoot, activeSub, subItem, open, theme }) => {
  const activeRootStyle = {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.common.white,
  };

  return {
    ...theme.typography.subtitle2,
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0, 1),
    color: theme.palette.text.primary,
    height: NAVBAR.DASHBOARD_ITEM_HORIZONTAL_HEIGHT,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
    },
    // activeRoot
    ...(activeRoot && {
      ...activeRootStyle,
    }),
    // activeSub
    ...(activeSub && {
      ...theme.typography.body2,
      color: theme.palette.primary.main,
    }),
    // subItem
    ...(subItem && {
      ...theme.typography.body2,
      width: '100%',
      margin: 0,
      paddingRight: 0,
      paddingLeft: theme.spacing(1),
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: '#CCF1FF',
      },
    }),
    // open
    ...(open &&
      !activeRoot && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
      }),
  };
});

// ----------------------------------------------------------------------

export const PaperStyle = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    width: 160,
    pointerEvents: 'auto',
    padding: theme.spacing(1),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    boxShadow: theme.customShadows.dropdown,
  },
}));
