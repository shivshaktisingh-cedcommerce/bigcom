import { List, Stack, Typography } from '@mui/material';
import { NavListRoot } from 'components/nav-section/vertical/NavList';
import footerConfig from './FooterConfig';

export default function Footer() {
  const footerConfigArr = footerConfig();

  return (
    <Stack
      direction='row'
      justifyContent='flex-end'
      alignItems='center'
      spacing={2}
      p={2}
      pb={6}
      component='footer'
      sx={{ background: '#E5E5E5' }}
    >
      <Typography variant='subtitle2'>Need help?</Typography>
      {footerConfigArr.map((group, index) => (
        <List key={index} disablePadding>
          {group.items.map(list => (
            <NavListRoot key={list.title} list={list} isCollapse={false} />
          ))}
        </List>
      ))}
    </Stack>
  );
}
