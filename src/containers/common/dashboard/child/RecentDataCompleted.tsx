import {
  Timeline,
  timelineItemClasses,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { useCompletedActivities } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import PartialPageSpinner from 'components/PartialPageSpinner';
import useConnectedApps from 'hooks/useConnectedApps';
import { t } from 'i18next';
import { fDateTime } from 'utils/formatTime';

const RecentDataCompleted = () => {
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const ROW_PER_PAGE = 3;

  const activitiesData = useCompletedActivities({
    target: {
      marketplace: 'hubspot',
      shopId: hubspotTargetShopId,
    },
    source: {
      marketplace: 'bigcommerce',
      shopId: bigcommerceSourceShopId,
    },
    activePage: '1',
    count: ROW_PER_PAGE,
  });
  if (activitiesData.data === undefined) {
    return (
      <Stack
        sx={{ maxHeight: '200px' }}
        alignItems='center'
        justifyContent='center'
      >
        <PartialPageSpinner />
      </Stack>
    );
  }
  const activities = activitiesData.data.data.rows;
  const totalCount = activities.length;

  return (
    <Stack direction='row' justifyContent='center'>
      {activities.length ? (
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {activities.map((activity, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color='primary' />
                  {index !== totalCount - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent>
                  <Typography variant='body2'>{activity.message}</Typography>

                  <Typography
                    variant='caption'
                    sx={{ color: 'text.secondary' }}
                  >
                    {fDateTime(activity.created_at)}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      ) : (
        <Stack p={3}>{t('no_activity_found')}</Stack>
      )}
    </Stack>
  );
};

export default RecentDataCompleted;
