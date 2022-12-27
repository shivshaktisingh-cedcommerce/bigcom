import { LoadingButton } from '@mui/lab';
import {
  Card,
  Stack,
  Typography,
  ListItem,
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  List,
} from '@mui/material';
import { requestCreateGroupsPropertiesListsWorkflows } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import useConnectedApps from 'hooks/useConnectedApps';
import { useSnackbar } from 'notistack';
import { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import {
  CreateGroupPropertiesListsWorkflowsType,
  SetupCardType,
} from '../../BigcommerceHubspotType';

type Props = {
  enable: boolean;
  title: string;
  description1?: string;
  description2?: string;
  headingProgressBar: string;
  buttonText: string;
  listItems: Array<string>;
  setupStep: number;
  setupStepsStatus: Record<string, boolean>[];
  setSetupStepsStatus: (data: Record<string, boolean>[]) => void;
  url: string;
};

const initialSetupData: SetupCardType = {
  enableProgessBar: false,
  step: 1,
  progressValue: 1,
  totalSteps: 0,
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'sky',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const SetupGroupsListsWorkflowsCard: FunctionComponent<Props> = ({
  enable,
  title,
  description1,
  description2,
  headingProgressBar,
  buttonText,
  listItems,
  setupStep,
  setupStepsStatus,
  setSetupStepsStatus,
  url,
}) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const [setupData, setSetupData] = useState(initialSetupData);
  const [enableProgessBar, setEnableProgessBar] = useState(false);

  const onSuccess = (dataResult: CreateGroupPropertiesListsWorkflowsType) => {
    if (dataResult.success) {
      if (dataResult.currentStep < dataResult.totalSteps) {
        setSetupData({
          ...setupData,
          totalSteps: dataResult.totalSteps,
          progressValue: (setupData.step * 100) / dataResult.totalSteps,
          step: setupData.step + 1,
        });
      } else if (dataResult.currentStep === dataResult.totalSteps) {
        setSetupData({
          ...setupData,
          progressValue: (setupData.step * 100) / dataResult.totalSteps,
        });
        setTimeout(() => {
          const oldData = [...setupStepsStatus];
          oldData[setupStep].completed = true;
          oldData[setupStep].error = false;
          setSetupStepsStatus(oldData);
        }, 500);
      }
    } else {
      setEnableProgessBar(!enableProgessBar);
      enqueueSnackbar(t('something_went_wrong'), {
        variant: 'error',
      });
      const oldData = [...setupStepsStatus];
      oldData[setupStep].completed = false;
      oldData[setupStep].error = true;
      setSetupStepsStatus(oldData);
    }
  };

  useQuery(
    [url, setupData.step],
    () =>
      requestCreateGroupsPropertiesListsWorkflows(
        setupData.step,
        hubspotTargetShopId,
        bigcommerceSourceShopId,
        url
      ),
    {
      enabled: enableProgessBar,
      refetchOnWindowFocus: false,
      onSuccess,
    }
  );

  const handleCreateGroupsAndPropertiesClick = () => {
    setEnableProgessBar(!enableProgessBar);
  };

  return (
    <Card sx={{ backgroundColor: enable ? '#F4F6F8' : '#E0E0E0', mb: 5 }}>
      <Stack sx={{ m: 4 }}>
        <Typography variant='h3'>{title}</Typography>
        {description1 && (
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary', mt: 2 }}
            noWrap
          >
            {description1}
          </Typography>
        )}
        {description2 && (
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            {description2}
          </Typography>
        )}
        <List component='ul' sx={{ listStyleType: 'disc', mb: 5 }}>
          {listItems.map((listName, index) => {
            return (
              <ListItem
                key={index}
                sx={{ display: 'list-item', ml: 2, p: 0 }}
                component='li'
              >
                <Typography
                  variant='body2'
                  sx={{ color: 'text.secondary' }}
                  noWrap
                >
                  {listName}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        {enableProgessBar ? (
          <>
            <Typography
              variant='body2'
              sx={{ color: 'text.secondary', mb: 2 }}
              noWrap
            >
              {headingProgressBar}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <BorderLinearProgress
                variant='determinate'
                value={setupData.progressValue}
              />
            </Box>
          </>
        ) : (
          <Stack spacing={3} direction='row'>
            <LoadingButton
              type='submit'
              variant='contained'
              disabled={!enable}
              onClick={() => handleCreateGroupsAndPropertiesClick()}
            >
              {buttonText}
            </LoadingButton>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};

export default SetupGroupsListsWorkflowsCard;
