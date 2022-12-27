import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link,
} from '@mui/material';
import { useCreateAccountUrl } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';
import { FC } from 'react';
import { CreateAccountType } from '../BigcommerceHubspotType';

interface OwnProps {
  open: boolean;
  handleOpenCloseConfirmDialogue: () => void;
}
type Props = OwnProps;

const RedirectingHubSpotDialog: FC<Props> = ({
  open,
  handleOpenCloseConfirmDialogue,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = (data: CreateAccountType) => {
    if (data.success) {
      window.open(data.data, '_blank');
    } else {
      enqueueSnackbar(t('something_went_wrong'), {
        variant: 'error',
      });
    }
  };

  const onError = () => {
    enqueueSnackbar(t('something_went_wrong'), {
      variant: 'error',
    });
  };

  const createAccountMutation = useCreateAccountUrl(onSuccess, onError);

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleOpenCloseConfirmDialogue}
      aria-describedby='alert-dialog-slide-description'
      maxWidth='lg'
    >
      <DialogTitle sx={{ px: 5, py: 2 }}>
        {t('redirecting_to_hubspot_account_page')}
      </DialogTitle>
      <DialogContent sx={{ px: 5, pb: 1 }}>
        <DialogContentText>
          {t('this_will_redirect_you_to_hubspot')}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'start', ml: '17px' }}>
        <LoadingButton
          variant='contained'
          loading={createAccountMutation.isLoading}
          onClick={() => createAccountMutation.mutate()}
        >
          {t('yes_take_me_to_hubspot')}
        </LoadingButton>
        <Button
          sx={{ ml: 3 }}
          variant='outlined'
          onClick={handleOpenCloseConfirmDialogue}
        >
          {t('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RedirectingHubSpotDialog;
