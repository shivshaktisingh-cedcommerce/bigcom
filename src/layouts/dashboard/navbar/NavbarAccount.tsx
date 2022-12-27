import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
// import portalsDialogue from 'containers/common/user/Portal/child/portalsDialogue';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import usePortalId from 'hooks/portal/usePortalId';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

type Props = {
  isCollapse: boolean | undefined;
};

export default function NavbarAccount({ isCollapse }: Props) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const portalId = usePortalId();

  const handleOpenClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: 'transparent',
          }),
        }}
      >
        <div style={{ margin: '0 0 0 15px' }} onClick={handleOpenClose}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 36C8.05888 36 0 27.9411 0 18C0 8.05887 8.05888 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36Z'
              fill='#00B7FF'
              fillOpacity='0.08'
            />
            <path
              d='M21.3333 18C21.3337 18.1947 21.2659 18.3834 21.1417 18.5333L16.975 23.5333C16.6804 23.8877 16.1544 23.9362 15.8 23.6416C15.4456 23.3471 15.3971 22.821 15.6917 22.4666L19.425 18L15.825 13.5333C15.6852 13.3611 15.6198 13.1403 15.6432 12.9198C15.6667 12.6993 15.7771 12.4972 15.95 12.3583C16.1232 12.204 16.3529 12.1289 16.5838 12.151C16.8147 12.1732 17.0259 12.2906 17.1667 12.475L21.1917 17.475C21.2963 17.6292 21.3461 17.814 21.3333 18Z'
              fill='#2196F3'
            />
          </svg>
        </div>
      </RootStyle>
    </>
  );
}
