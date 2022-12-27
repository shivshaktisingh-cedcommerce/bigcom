import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref } from 'react';
import Image from 'components/Image';
import syncProgress from 'assets/images/sync.gif';
import { t } from 'i18next';

type Props = {
  open: boolean;
  handleClose: (value: string) => void;
};

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const SyncInprogressDialog = ({ open, handleClose }: Props) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth='xs'
      aria-describedby='alert-dialog-slide-description'
    >
      <Box
        noValidate
        component='form'
        sx={{
          textAlign: 'center',
        }}
      >
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <DialogContentText id='alert-dialog-slide-description'>
              <Image
                src={syncProgress}
                visibleByDefault
                disabledEffect
                sx={{
                  objectFit: 'contain',
                  width: '120px',
                  height: '120px',
                }}
                alt='success'
              />
            </DialogContentText>
          </Box>
          <DialogTitle>{t('sync_in_progress')}</DialogTitle>
          <DialogContentText sx={{ justifyContent: 'center' }}>
            {t('you_can_see_your_sync_progress_in_the_activity_tab')}
          </DialogContentText>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default SyncInprogressDialog;
