import { LoadingButton } from '@mui/lab';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { t } from 'i18next';

export default function OnboardingForm() {
  return (
    <Stack>
      <Typography
        sx={{ mb: 2, textAlign: 'start' }}
        variant='subtitle2'
        component='div'
      >
        {t('which_of_these_sounds_most_like_hubspot_ability')}
      </Typography>
      <TextField
        id='hubspot_ability'
        name='hubspot_ability'
        select
        fullWidth
        SelectProps={{ native: true }}
      >
        <option value='' key='-1' className='text-gray-300'>
          {t('select_options')}
        </option>
      </TextField>
      <Typography
        sx={{ mb: 2, textAlign: 'start', mt: 3 }}
        variant='subtitle2'
        component='div'
      >
        {t('which_of_these_sounds_most_like_woocommerce_ability')}
      </Typography>
      <TextField
        id='woocommerce_ability'
        name='woocommerce_ability'
        select
        fullWidth
        SelectProps={{ native: true }}
      >
        <option value='' key='-1' className='text-gray-300'>
          {t('select_options')}
        </option>
      </TextField>
      <Typography
        sx={{ mb: 2, textAlign: 'start', mt: 3 }}
        variant='subtitle2'
        component='div'
      >
        {t('which_hubspot_plan_you_are_using')}
      </Typography>
      <TextField
        id='hubspot_plan'
        name='hubspot_plan'
        select
        fullWidth
        SelectProps={{ native: true }}
      >
        <option value='' key='-1' className='text-gray-300'>
          {t('select_options')}
        </option>
      </TextField>
      <Typography
        sx={{ mb: 2, textAlign: 'start', mt: 3 }}
        variant='subtitle2'
        component='div'
      >
        {t('email')}
      </Typography>
      <TextField
        id='email'
        type='email'
        name='email'
        label='test@gmail.com'
        fullWidth
      />
      <Typography
        sx={{ mb: 2, textAlign: 'start', mt: 3 }}
        variant='subtitle2'
        component='div'
      >
        {t('phone')}
      </Typography>
      <TextField
        id='phone'
        type='number'
        name='phone'
        label={t('phone_number')}
        fullWidth
      />
      <Stack
        direction='column'
        spacing={3}
        justifyContent='center'
        sx={{ p: 2, mt: 4 }}
      >
        <LoadingButton type='button' variant='contained'>
          {t('complete_onboarding')}
        </LoadingButton>
        <Button variant='outlined'>{t('skip_now')}</Button>
      </Stack>
    </Stack>
  );
}
