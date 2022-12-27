import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Banner = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'sticky',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  padding: '10px',
}));
