import { Box, Card, Tab, Tabs, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FunctionComponent, SyntheticEvent, useState } from 'react';
import { capitalCase } from 'change-case';
import RecentDataOngoing from './RecentDataOngoing';
import RecentDataCompleted from './RecentDataCompleted';

const RecentDataUpdates: FunctionComponent = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState('ongoing');

  const ACCOUNT_TABS = [
    {
      value: 'ongoing',
      component: <RecentDataOngoing />,
    },
    {
      value: 'completed',
      component: <RecentDataCompleted />,
    },
  ];

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant='subtitle1' sx={{ width: 1, pb: 1 }}>
        {t('recent_data_updates')}
      </Typography>

      <Tabs
        allowScrollButtonsMobile
        variant='fullWidth'
        scrollButtons='auto'
        value={tab}
        onChange={handleTabChange}
      >
        {ACCOUNT_TABS.map(tab => (
          <Tab
            disableRipple
            key={t(tab.value)}
            label={capitalCase(t(tab.value))}
            value={tab.value}
          />
        ))}
      </Tabs>
      {ACCOUNT_TABS.map(tabVal => {
        const isMatched = tabVal.value === tab;

        return (
          isMatched && (
            <Box sx={{ mt: 2 }} key={tabVal.value}>
              {tabVal.component}
            </Box>
          )
        );
      })}
    </Card>
  );
};
export default RecentDataUpdates;
