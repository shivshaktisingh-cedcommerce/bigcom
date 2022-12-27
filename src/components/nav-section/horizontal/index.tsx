import { memo } from 'react';
// @mui
import { Chip, Stack } from '@mui/material';
// type
import { NavSectionProps } from '../type';
//
import { NavListRoot } from './NavList';
import useConnectedApps from 'hooks/useConnectedApps';

// ----------------------------------------------------------------------

const hideScrollbar = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
} as const;

function NavSectionHorizontal({ navConfig }: NavSectionProps) {
  const { bigcommerceDomain } = useConnectedApps();

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ bgcolor: '#fff', borderRadius: 1, px: 0.5 }}
    >
      <Stack>
        <Chip
          label={bigcommerceDomain}
          sx={{
            background: '#DFE3E8',
            borderRadius: 1,
            fontWeight: 700,
            px: 2,
            py: 3,
          }}
        />
      </Stack>
      <Stack
        direction='row'
        justifyContent='flex-end'
        sx={{ ...hideScrollbar, py: 1 }}
      >
        {navConfig.map((group, index) => (
          <Stack key={index} direction='row' flexShrink={0}>
            {group.items.map(list => (
              <NavListRoot key={list.title} list={list} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default memo(NavSectionHorizontal);
