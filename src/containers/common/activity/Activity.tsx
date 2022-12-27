import { capitalCase } from 'change-case';
import { Container, Tab, Box, Tabs, Typography, Card } from '@mui/material';
import Page from 'components/Page';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OngoingActivities from './child/OngoingActivities';
import CompletedActivities from './child/CompletedActivities';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { BIGCOMMERCE_NAVIGATION } from 'routes/paths';

export default function Settings() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tab } = useParams<{ tab: string }>();
  const ACCOUNT_TABS = [
    {
      value: 'ongoing',
      icon: <AccessTimeFilledRoundedIcon />,
      component: <OngoingActivities />,
    },
    {
      value: 'completed',
      icon: <CheckCircleRoundedIcon />,
      component: <CompletedActivities />,
    },
  ];

  return (
    <Page title={t('activities')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ padding: '5px', minHeight: '86vh' }}>
        <Typography variant='h4' sx={{ mt: 13 }}>
          {t('activities')}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
          {t('groups_properties_line_1')}
        </Typography>
        <Card>
          <Tabs
            allowScrollButtonsMobile
            variant='scrollable'
            scrollButtons='auto'
            value={tab}
            onChange={(e, tabIndex) =>
              navigate(BIGCOMMERCE_NAVIGATION.general.activity(tabIndex))
            }
            sx={{ p: 3 }}
          >
            {ACCOUNT_TABS.map(tab => (
              <Tab
                disableRipple
                key={t(tab.value)}
                label={capitalCase(t(tab.value))}
                icon={tab.icon}
                value={tab.value}
              />
            ))}
          </Tabs>
          {ACCOUNT_TABS.map(tabVal => {
            const isMatched = tabVal.value === tab;

            return (
              isMatched && <Box key={tabVal.value}>{tabVal.component}</Box>
            );
          })}
        </Card>
      </Container>
    </Page>
  );
}
