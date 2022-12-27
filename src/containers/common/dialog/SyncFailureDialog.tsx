import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Image from 'components/Image';
import syncFailure from 'assets/images/sync-failed.gif';
import { t } from 'i18next';
import { Transition } from './SyncInprogressDialog';

type Props = {
  open: boolean;
  handleClose: (value: string) => void;
  errorMsg: string;
};

const SyncFailureDialog = ({ open, handleClose, errorMsg }: Props) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth='xs'
      onClose={handleClose}
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
                src={syncFailure}
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
          <DialogTitle>{t('sync_unsuccessfull')}</DialogTitle>
          <DialogContentText sx={{ justifyContent: 'center' }}>
            {errorMsg}
          </DialogContentText>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default SyncFailureDialog;
