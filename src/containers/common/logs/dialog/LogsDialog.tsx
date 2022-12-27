import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
} from '@mui/material';
import { capitalCase } from 'change-case';
import { t } from 'i18next';
import { SyntheticEvent, useState } from 'react';

type Props = {
  open: boolean;
  dialogContent: {
    externalObjectId: string;
    request: string;
    response: string;
  };
  handleOpenClose: () => void;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const LogsDialog = ({ open, dialogContent, handleOpenClose }: Props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const LOGS_CONTENT_TABS = [
    {
      value: 'external_object_id',
      content: dialogContent.externalObjectId,
    },
    {
      value: 'request',
      content: dialogContent.request,
    },
    {
      value: 'response',
      content: dialogContent.response,
    },
  ];

  return (
    <Dialog
      open={open}
      keepMounted
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{t('logs_detail')}</DialogTitle>
      <DialogContent>
        <Tabs
          allowScrollButtonsMobile
          variant='scrollable'
          scrollButtons='auto'
          value={value}
          onChange={handleChange}
          sx={{ p: 3 }}
        >
          {LOGS_CONTENT_TABS.map((tab, index) => (
            <Tab key={index} label={capitalCase(t(tab.value))} />
          ))}
        </Tabs>
        {LOGS_CONTENT_TABS.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.value === 'external_object_id' ? (
              tab.content
            ) : (
              <pre>
                {tab.content
                  ? JSON.stringify(JSON.parse(tab.content), null, 2)
                  : ''}
              </pre>
            )}
          </TabPanel>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpenClose}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogsDialog;
