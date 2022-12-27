import { ChangeEvent, FunctionComponent, useState } from 'react';
import { SelectedObjectType } from '../Setup';
import {
  Box,
  Stack,
  Card,
  Typography,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import _ from 'lodash';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { SAVE_MAPPING_DATA_API_URL } from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import useConnectedApps from 'hooks/useConnectedApps';
import { PipelineMappingType } from '../../BigcommerceHubspotType';

type Props = {
  enable: boolean;
  data: PipelineMappingType | undefined;
  setupStep?: number;
  setupStepsStatus?: Record<string, boolean>[];
  setSetupStepsStatus?: (data: Record<string, boolean>[]) => void;
};

const SelectGroupAndPropertiesForm: FunctionComponent<Props> = ({
  enable,
  data,
  setupStep,
  setupStepsStatus,
  setSetupStepsStatus,
}) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const accessToken = localStorage.getItem('accessToken');
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const targets = data?.target;
  const title = data?.source;
  const defaultData = data?.saved?.mapping ?? data?.default?.mapping;
  const defaultId = data?.saved?.pipeline ?? data?.default?.pipeline;
  const pipeline = data?.pipelines;
  const newTitleArray = title?.map(elem =>
    elem.replace(' ', '_').toLowerCase()
  );
  const [pipelineState, setPipelineState] = useState(defaultId);
  const [loading, setLoading] = useState(false);

  const stateObject: SelectedObjectType[] = [];

  newTitleArray?.map(
    (newTitle: string, index: number) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      stateObject[newTitle] = {
        name: title?.[index],
        value: defaultData?.[index],
      };

      return stateObject;
    },
    [newTitleArray]
  );
  const [stateSource, setSources] = useState(
    Object.fromEntries(Object.entries(stateObject))
  );
  const [defaultValues, setDefaultValues] = useState(
    Object.fromEntries(Object.entries(stateObject))
  );

  const handleResetMapping = () => {
    setSources(defaultValues);
  };
  const handleSubmitMapping = async () => {
    const mapping = [];
    for (const prop in stateSource) {
      mapping.push(stateSource[prop].value);
    }
    setLoading(true);
    try {
      await axios
        .post(
          SAVE_MAPPING_DATA_API_URL,
          {
            targetShopId: hubspotTargetShopId,
            sourceShopId: bigcommerceSourceShopId,
            mapping,
            pipeline: pipelineState,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(result => {
          if (result.data.success) {
            enqueueSnackbar(result.data.message, {
              variant: 'success',
            });
            if (setupStep && setupStepsStatus && setSetupStepsStatus) {
              setTimeout(() => {
                const oldData = [...setupStepsStatus];
                oldData[setupStep].completed = true;
                oldData[setupStep].error = false;
                setSetupStepsStatus(oldData);
              }, 500);
            }
          } else {
            enqueueSnackbar(result.data.message, { variant: 'error' });
            if (setupStep && setupStepsStatus && setSetupStepsStatus) {
              setTimeout(() => {
                const oldData = [...setupStepsStatus];
                oldData[setupStep].completed = false;
                oldData[setupStep].error = true;
                setSetupStepsStatus(oldData);
              }, 500);
            }
          }
        });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setLoading(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    //@ts-ignore
    const copy = {
      ...stateSource,
      //@ts-ignore
      [e.target.name]: {
        //@ts-ignore
        name: stateSource[e.target.name].name,
        //@ts-ignore
        value: e.target.value,
      },
    };
    //@ts-ignore
    setSources(copy);
  };

  const handlePipelineChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    _.forEach(pipeline, function (pipe) {
      if (pipe.id === e.target.value) {
        setPipelineState(e.target.value);
        const valueToSet = Object.keys(pipe.stages)[0];
        const defValues = defaultValues;
        for (const i in defValues) {
          //@ts-ignore
          defValues[i].value = valueToSet;
        }
        setDefaultValues(defValues);
      }
    });
  };

  const mapFields = () => {
    return _.map(stateSource, (source, key) => (
      <Stack direction='row' key={key}>
        <Grid container spacing={2} sx={{ width: '60%' }}>
          <Grid item xs={8}>
            <Typography
              variant='h6'
              color={'black'}
              sx={{ mb: 3, py: 1, justifyContent: 'center' }}
              noWrap
            >
              {source.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ width: '437px' }}>
              <Select
                labelId='demo-simple-select-label'
                name={key}
                //@ts-ignore
                value={source.value}
                onChange={handleChange}
              >
                {_.map(targets, function (target, key) {
                  return (
                    <MenuItem key={key} value={key}>
                      {target}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    ));
  };

  return (
    <Card sx={{ backgroundColor: enable ? '#F4F6F8' : '#E0E0E0', mb: 5 }}>
      <Stack sx={{ m: 4 }}>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h3'>
            {t('map_deals_stages_with_hubspot_pipline')}
          </Typography>
          <FormControl sx={{ width: '250px' }}>
            <Select
              labelId='demo-simple-select-label'
              name={'pipeline'}
              value={pipelineState}
              onChange={handlePipelineChange}
            >
              {_.map(pipeline, function (target, key) {
                return (
                  <MenuItem key={target.id} value={target.id}>
                    {target.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary', mb: 5 }}
          noWrap
        >
          {t('map_deals_line_1')}
        </Typography>
        <Typography variant='subtitle2' sx={{ mb: 2 }} noWrap>
          {t('bigcommerce_order_status_deal_stages')}:
        </Typography>
        {mapFields()}
        <Box display='inline-block'>
          <LoadingButton
            variant='contained'
            onClick={handleSubmitMapping}
            disabled={!enable}
            loading={loading}
          >
            {t('save')}
          </LoadingButton>
          <LoadingButton
            sx={{ ml: 2 }}
            onClick={handleResetMapping}
            variant='contained'
            disabled={!enable}
          >
            {t('reset_to_default_mapping')}
          </LoadingButton>
        </Box>
      </Stack>
    </Card>
  );
};

export default SelectGroupAndPropertiesForm;
