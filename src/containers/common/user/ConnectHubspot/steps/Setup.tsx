// @mui
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import SetupSuccessCard from './child/SetupSuccessCard';
import SetupGroupsListsWorkflowsCard from './child/SetupGroupsListsWorkflowsCard';
import {
  CREATE_GROUPS_AND_PROPERTIES_API_URL,
  CREATE_LISTS_API_URL,
  CREATE_WORKFLOWS_API_URL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import { FunctionComponent, useState } from 'react';
import PartialPageSpinner from 'components/PartialPageSpinner';
import { useCreatePipeLine } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import SelectGroupAndPropertiesForm from './child/SelectGroupAndPropertiesForm';
import useConnectedApps from 'hooks/useConnectedApps';

export interface SelectedObjectType {
  [key: string]: {
    name: string;
    value: string;
  };
}

type Props = {
  activeStep: number;
  setActiveStep: (step: number) => void;
};

const Setup: FunctionComponent<Props> = ({ activeStep, setActiveStep }) => {
  const { t } = useTranslation();
  const [setupStepsStatus, setSetupStepsStatus] = useState<
    Record<string, boolean>[]
  >([
    { completed: false, error: false },
    { completed: false, error: false },
    { completed: false, error: false },
    { completed: false, error: false },
  ]);
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const { data } = useCreatePipeLine(
    bigcommerceSourceShopId,
    hubspotTargetShopId
  );

  if (data === undefined) {
    return <PartialPageSpinner />;
  }

  const totalSteps = data?.success ? 3 : 2;

  const handleClick = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Stack>
      {!setupStepsStatus[0].completed || setupStepsStatus[0].error ? (
        <SetupGroupsListsWorkflowsCard
          enable={true}
          title={t('setup_group_properties')}
          description1={t('setup_line_1')}
          description2={t('setup_line_2')}
          headingProgressBar={t('setup_line_3')}
          buttonText={t('create_groups_properties')}
          listItems={[
            t('order_information'),
            t('previous_purchase'),
            t('abandoned_cart_details'),
            t('and_more'),
          ]}
          setupStep={0}
          setupStepsStatus={setupStepsStatus}
          setSetupStepsStatus={setSetupStepsStatus}
          url={CREATE_GROUPS_AND_PROPERTIES_API_URL}
        />
      ) : (
        <SetupSuccessCard title={t('setup_group_properties')} />
      )}
      {!setupStepsStatus[1].completed || setupStepsStatus[1].error ? (
        <SetupGroupsListsWorkflowsCard
          enable={
            (!setupStepsStatus[1].completed &&
              (setupStepsStatus[0].completed || setupStepsStatus[0].error)) ||
            setupStepsStatus[1].error
              ? true
              : false
          }
          title={t('create_lists_in_hubspot')}
          description1={t('setup_line_4')}
          headingProgressBar={t('lists_creation_in_progress')}
          buttonText={t('create_list')}
          listItems={[
            t('leads_contact'),
            t('customer_contact'),
            t('abandoned_cart_contacts'),
          ]}
          setupStep={1}
          setupStepsStatus={setupStepsStatus}
          setSetupStepsStatus={setSetupStepsStatus}
          url={CREATE_LISTS_API_URL}
        />
      ) : (
        <SetupSuccessCard title={t('create_lists_in_hubspot')} />
      )}
      {!setupStepsStatus[2].completed || setupStepsStatus[2].error ? (
        <SetupGroupsListsWorkflowsCard
          enable={
            (!setupStepsStatus[2].completed &&
              (setupStepsStatus[1].completed || setupStepsStatus[1].error)) ||
            setupStepsStatus[2].error
              ? true
              : false
          }
          title={t('create_workflows_bigcommerce')}
          description1={t('setup_line_4')}
          headingProgressBar={t('workflows_creation_in_progress')}
          buttonText={t('create_workflows')}
          listItems={[
            t('leads_contact'),
            t('customer_contact'),
            t('abandoned_cart_contacts'),
          ]}
          setupStep={2}
          setupStepsStatus={setupStepsStatus}
          setSetupStepsStatus={setSetupStepsStatus}
          url={CREATE_WORKFLOWS_API_URL}
        />
      ) : (
        <SetupSuccessCard title={t('create_workflows_bigcommerce')} />
      )}
      {!setupStepsStatus[3].completed || setupStepsStatus[3].error ? (
        <SelectGroupAndPropertiesForm
          enable={
            ((!setupStepsStatus[3].completed &&
              (setupStepsStatus[2].completed || setupStepsStatus[2].error)) ||
              setupStepsStatus[3].error) &&
            totalSteps !== 2
              ? true
              : false
          }
          data={data}
          setupStep={3}
          setupStepsStatus={setupStepsStatus}
          setSetupStepsStatus={setSetupStepsStatus}
        />
      ) : (
        <SetupSuccessCard title={t('map_deals_stages_with_hubspot_pipline')} />
      )}
      <Stack spacing={3} alignItems='center'>
        <LoadingButton
          type='submit'
          variant='contained'
          disabled={
            setupStepsStatus[totalSteps].completed ||
            setupStepsStatus[totalSteps].error
              ? false
              : true
          }
          onClick={handleClick}
        >
          {t('go_to_sync_now')}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default Setup;
