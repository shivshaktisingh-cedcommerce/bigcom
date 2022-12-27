import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { useOngoingActivities } from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import PartialPageSpinner from 'components/PartialPageSpinner';
import CircularProgressWithLabel from 'components/progress/CircularProgressWithLabel';
import useConnectedApps from 'hooks/useConnectedApps';
import { useTranslation } from 'react-i18next';
import { fDateTime } from 'utils/formatTime';

export default function OngoingActivities() {
  const { t } = useTranslation();
  const { hubspotTargetShopId, bigcommerceSourceShopId } = useConnectedApps();

  const { data } = useOngoingActivities({
    target: {
      marketplace: 'hubspot',
      shopId: hubspotTargetShopId,
    },
    source: {
      marketplace: 'bigcommerce',
      shopId: bigcommerceSourceShopId,
    },
    activePage: '1',
    count: '10',
  });

  if (data === undefined) {
    return <PartialPageSpinner />;
  }

  const ongoingActivities = data.data.rows;

  return ongoingActivities.length ? (
    <Table>
      <TableBody>
        {ongoingActivities.map((activity, index) => {
          return (
            <TableRow key={index}>
              <TableCell width='10%'>
                <CircularProgressWithLabel
                  size={75}
                  value={activity.progress}
                />
              </TableCell>
              <TableCell width='90%'>
                <Typography variant='h6'>{activity.message}</Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'text.secondary' }}
                  noWrap
                >
                  {fDateTime(activity.created_at)}
                </Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
      }}
    >
      <Typography variant='h4'>{t('no_activities_found')}</Typography>
    </Stack>
  );
}
