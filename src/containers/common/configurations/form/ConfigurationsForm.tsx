import { t } from 'i18next';
import { FunctionComponent, useState } from 'react';
import AbondonedCartDetails from '../child/AbondonedCartDetails';
import ROICalculationSetting from '../child/ROICalculationSetting';
import { FormProvider } from 'components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Card,
  Stack,
  Typography,
} from '@mui/material';
import Iconify from 'components/Iconify';
import {
  ConfigurationFormValuesProps,
  ConfigurationsDataType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import RFMSetting from '../child/RFMSetting';
import { LoadingButton } from '@mui/lab';
import { useMutation } from 'react-query';
import { useSnackbar } from 'notistack';
import { updateConfigurations } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import SelectGroupAndPropertiesForm from 'containers/common/user/ConnectHubspot/steps/child/SelectGroupAndPropertiesForm';

type Props = {
  configurationsData: ConfigurationsDataType | undefined;
  sourceShopId: string;
  targetShopId: string;
};

const ConfigurationsForm: FunctionComponent<Props> = ({
  configurationsData,
  targetShopId,
  sourceShopId,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [accordianActive, setAccordianActive] = useState([
    false,
    false,
    false,
    false,
  ]);

  const ACCORDIAN_DATA = [
    {
      title: t('automatic_sync'),
      subtitle: '',
      component: <AbondonedCartDetails />,
    },
    {
      title: t('roi_calculation_setting'),
      subtitle: '',
      component: (
        <ROICalculationSetting
          orderStatus={
            configurationsData?.roi_calculation_setting.order_status ?? []
          }
        />
      ),
    },
    {
      title: t('rfm_settings_manage_roi_tracking'),
      subtitle: '',
      component: <RFMSetting />,
    },
    {
      title: t('map_deals_stages_with_hubspot_pipline'),
      subtitle: t('map_deals_line_1'),
      component: (
        <SelectGroupAndPropertiesForm
          enable={true}
          data={configurationsData?.pipeline_mapping}
        />
      ),
    },
  ];

  const defaultValues = {
    abandoncartSync:
      configurationsData?.abandoncart_setting.abandoncart_sync ?? false,
    contactSync: configurationsData?.automatic_sync.contact_sync ?? false,
    dealSync: configurationsData?.automatic_sync.deal_sync ?? false,
    productSync: configurationsData?.automatic_sync.product_sync ?? false,
    calculateRoi:
      configurationsData?.roi_calculation_setting.calculate_roi ?? 0,
    score5: configurationsData?.rfm_setting.score_5 ?? [],
    score4: configurationsData?.rfm_setting.score_4 ?? { from: [], to: [] },
    score3: configurationsData?.rfm_setting.score_3 ?? { from: [], to: [] },
    score2: configurationsData?.rfm_setting.score_2 ?? { from: [], to: [] },
    score1: configurationsData?.rfm_setting.score_1 ?? [],
  };

  const AddConfigurationsSchema = Yup.object().shape({
    abandoncartSync: Yup.boolean().required(t('abondancart_sync_required')),
    calculateRoi: Yup.number().required(t('calculate_roi_required')),
    score5: Yup.array().of(
      Yup.number()
        .positive(t('value_must_be_positive_integer'))
        .typeError('required')
    ),
    score4: Yup.object().shape({
      from: Yup.array().of(
        Yup.number()
          .positive(t('value_must_be_positive_integer'))
          .typeError('required')
      ),
      to: Yup.array().of(
        Yup.number()
          .positive(t('value_must_be_positive_integer'))
          .typeError('required')
      ),
    }),
    score3: Yup.object().shape({
      from: Yup.array().of(
        Yup.number()
          .positive(t('value_must_be_positive_integer'))
          .typeError('required')
      ),
      to: Yup.array().of(
        Yup.number()
          .positive(t('value_must_be_positive_integer'))
          .typeError('required')
      ),
    }),
    score2: Yup.object().shape({
      from: Yup.array().of(
        Yup.number()
          .positive(t('value_must_be_positive_integer'))
          .typeError('required')
      ),
      to: Yup.array().of(
        Yup.number()
          .positive(t('value_must_be_positive_integer'))
          .typeError('required')
      ),
    }),
    score1: Yup.array().of(
      Yup.number()
        .positive(t('value_must_be_positive_integer'))
        .typeError('required')
    ),
  });

  const methods = useForm<ConfigurationFormValuesProps>({
    mode: 'all',
    resolver: yupResolver(AddConfigurationsSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const mutation = useMutation(
    (data: ConfigurationFormValuesProps) =>
      updateConfigurations(data, targetShopId, sourceShopId),
    {
      onError: () => {
        enqueueSnackbar(t('something_went_wrong'), {
          variant: 'error',
        });
      },
      onSuccess: data => {
        if (data.data.success) {
          enqueueSnackbar(data.data.message, {
            variant: 'success',
          });
        } else {
          enqueueSnackbar(data.data.message, {
            variant: 'error',
          });
        }
      },
    }
  );

  const onSubmit = (data: ConfigurationFormValuesProps) => {
    mutation.mutate(data);
  };

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setAccordianActive({
        ...accordianActive,
        [index]: newExpanded,
      });
    };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && (
        <Alert severity='error' sx={{ alignItems: 'center' }}>
          {errors.afterSubmit.message}
        </Alert>
      )}
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        pb={2}
      >
        <Stack p={1}>
          <Typography variant='h4'>{t('configurations')}</Typography>
        </Stack>
        <Stack mr={5}>
          <LoadingButton
            size='medium'
            type='submit'
            variant='contained'
            aria-label={t('save')}
            loading={mutation.isLoading}
          >
            {t('save')}
          </LoadingButton>
        </Stack>
      </Stack>
      <Card>
        {ACCORDIAN_DATA.map((data, index) => (
          <Accordion
            square={true}
            key={index}
            disableGutters
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={
                <Button
                  variant='outlined'
                  endIcon={
                    <Iconify
                      icon={
                        accordianActive[index] ? 'ep:arrow-up' : 'ep:arrow-down'
                      }
                    />
                  }
                  sx={{ pointerEvents: 'auto' }}
                >
                  {t('manage')}
                </Button>
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                pointerEvents: 'none',
                px: 2,
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(0deg)',
                },
              }}
            >
              <Stack flexDirection='column' p={2}>
                <Typography variant='subtitle1'>{data.title}</Typography>
                {data.subtitle && (
                  <Typography variant='body2' color='text.secondary'>
                    {data.subtitle}
                  </Typography>
                )}
              </Stack>
            </AccordionSummary>
            <AccordionDetails>{data.component}</AccordionDetails>
          </Accordion>
        ))}
      </Card>
    </FormProvider>
  );
};

export default ConfigurationsForm;
