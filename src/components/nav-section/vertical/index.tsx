import { styled } from '@mui/material/styles';
import { List, Box, ListSubheader } from '@mui/material';
import { NavSectionProps } from '../type';
import { NavListRoot } from './NavList';

export const ListSubheaderStyle = styled(props => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

export default function NavSectionVertical({
  navConfig,
  isCollapse = false,
  ...other
}: NavSectionProps) {
  return (
    <Box {...other}>
      {navConfig.map((group, index) => (
        <List key={index} disablePadding sx={{ px: 2 }}>
          {group.items.map(list => (
            <NavListRoot key={list.title} list={list} isCollapse={isCollapse} />
          ))}
        </List>
      ))}
    </Box>
  );
}
