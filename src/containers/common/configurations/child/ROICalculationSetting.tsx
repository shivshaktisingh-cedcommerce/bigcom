import { Stack, Typography } from '@mui/material';
import { RHFSelect } from 'components/hook-form';
import { OrderStatusType } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import { FunctionComponent } from 'react';

type Props = {
  orderStatus: OrderStatusType[];
};

const ROICalculationSetting: FunctionComponent<Props> = ({ orderStatus }) => {
  return (
    <Stack direction='row' alignItems='center' pl={2}>
      <Typography variant='subtitle2' sx={{ mr: 3 }}>
        {t('calculate_roi_for_the_selected_status')}
      </Typography>

      <RHFSelect name='calculateRoi' size='small' fullWidth={false}>
        {orderStatus.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </RHFSelect>
    </Stack>
  );
};

export default ROICalculationSetting;
