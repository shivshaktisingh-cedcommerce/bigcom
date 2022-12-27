import { LoadingButton } from '@mui/lab';
import { Stack, Typography, ListItem, Button } from '@mui/material';
import { t } from 'i18next';
import { FunctionComponent, useState } from 'react';
import { CONNECT_TO_HUBSPOT_API_URL } from '../../../../../api/ApiConstants/BigcommerceHubspotApiConstants';
import RedirectingHubSpotDialog from '../dialog/RedirectingHubSpotDialog';
import OauthPopup from 'react-oauth-popup';
import { REDIRECT_URL } from 'config';
import useConnectedApps from 'hooks/useConnectedApps';

type Props = {
  activeStep: number;
  setActiveStep: (step: number) => void;
};

const Connection: FunctionComponent<Props> = ({
  activeStep,
  setActiveStep,
}) => {
  const [open, setOpen] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const { bigcommerceSourceShopId, refetchConnectedAddData } =
    useConnectedApps();

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const onCode = (code: string) => {
    console.log('wooooo a code', code);
    // setActiveStep(activeStep + 1);
    refetchConnectedAddData && refetchConnectedAddData();
  };

  const onClose = () => console.log('closed!');

  return (
    <Stack>
      <Typography variant='h3' sx={{ mb: 2 }}>
        {t('getting_started_with_bigcommerce_hubspot_integration')}
      </Typography>
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', mb: 1 }}
        noWrap
        gutterBottom
      >
        {t(
          'with_bigcomm_hubspot_integration_you_can_sync_bigcomm_contact_customer_with_hubspot_crm'
        )}
      </Typography>
      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', mb: 1 }}
        noWrap
      >
        {t('once_set_up_integration_you_will_be_able_to')}:
      </Typography>
      <ListItem sx={{ display: 'list-item', ml: 3, p: 0 }} component='ul'>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary' }}
          noWrap
          component='li'
        >
          {t(
            'see_every_action_contact_including_page_view_past_orders_abondoned_card_and_more'
          )}
        </Typography>
      </ListItem>
      <ListItem sx={{ display: 'list-item', ml: 3, p: 0 }} component='ul'>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary' }}
          noWrap
          component='li'
        >
          {t(
            'segment_contact_customers_list_based_previous_interactions_with_store'
          )}
        </Typography>
      </ListItem>
      <ListItem sx={{ display: 'list-item', ml: 3, p: 0 }} component='ul'>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary' }}
          noWrap
          component='li'
        >
          {t(
            'easily_create_and_send_beautiful_responsive_emails_to_drive_sales'
          )}
        </Typography>
      </ListItem>
      <ListItem
        sx={{ display: 'list-item', ml: 3, p: 0, mb: 1 }}
        component='ul'
      >
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary' }}
          noWrap
          component='li'
        >
          {t('measure_store_performance_with_customer_reports_and__dashboards')}
        </Typography>
      </ListItem>

      <Typography
        variant='body2'
        sx={{ color: 'text.secondary', mb: 5 }}
        noWrap
        gutterBottom
      >
        {t(
          'to_get_started_connect_hubspot_account_dont_have_account_create_one_then_return_to_this_window_to_connect'
        )}
      </Typography>
      <Stack direction='row' spacing={3} justifyContent='center'>
        <OauthPopup
          url={`${CONNECT_TO_HUBSPOT_API_URL}?code=hubspot&bearer=${accessToken}&source=bigcommerce&source_shop_id=${bigcommerceSourceShopId}&redirect_return_type=custom&custom_url=${REDIRECT_URL}?code=hubspot&success=true`}
          onCode={onCode}
          onClose={onClose}
          title={''}
          width={1000}
          height={600}
        >
          <LoadingButton type='button' variant='contained'>
            {t('connect_your_account')}
          </LoadingButton>
        </OauthPopup>

        <Button variant='outlined' onClick={handleOpenClose}>
          {t('create_free_hubspot_account')}
        </Button>
      </Stack>
      <RedirectingHubSpotDialog
        open={open}
        handleOpenCloseConfirmDialogue={handleOpenClose}
      />
    </Stack>
  );
};

export default Connection;
