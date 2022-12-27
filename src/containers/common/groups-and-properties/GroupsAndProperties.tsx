import {
  Container,
  Typography,
  TableContainer,
  Table,
  Paper,
  Card,
  TableCell,
  TableRow,
  TableBody,
  Collapse,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import { Fragment, FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../../components/Page';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  groupsPropertiesRequestCreate,
  useGetGroupsProperties,
} from 'api/ApiHooks/BigcommerceHubspotApiHooks';
import PartialPageSpinner from 'components/PartialPageSpinner';
import {
  GroupPropertiesRequestPostParamsType,
  GroupPropertiesRequestType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import Iconify from 'components/Iconify';
import { LoadingButton } from '@mui/lab';
import { useMutation } from 'react-query';
import { useSnackbar } from 'notistack';
import useConnectedApps from 'hooks/useConnectedApps';

type Props = {
  row: GroupPropertiesRequestType;
  targetShopId: string;
  sourceShopId: string;
};

const Row: FunctionComponent<Props> = ({ row, targetShopId, sourceShopId }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { label, created, properties, name } = row;
  const [createGroup, setCreateGroup] = useState(created);
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useMutation(
    (data: GroupPropertiesRequestPostParamsType) =>
      groupsPropertiesRequestCreate(data),
    {
      onError: () => {
        enqueueSnackbar(t('something_went_wrong'), {
          variant: 'error',
        });
      },
      onSuccess: data => {
        setCreateGroup(true);
        enqueueSnackbar(data.data.message, {
          variant: 'success',
        });
      },
    }
  );

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {label}
        </TableCell>
        <TableCell align='right'>
          {createGroup ? (
            <Typography variant='button'>{t('created')}</Typography>
          ) : (
            <LoadingButton
              variant='outlined'
              loading={mutation.isLoading}
              onClick={() => {
                mutation.mutate({
                  targetShopId: targetShopId,
                  sourceShopId: sourceShopId,
                  group: name,
                });
              }}
            >
              {t('create')}
            </LoadingButton>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  {properties.map((property, key) => (
                    <TableRow key={key}>
                      <TableCell>
                        <Stack direction='row' alignItems='center'>
                          {createGroup && (
                            <Iconify
                              icon={'charm:tick'}
                              sx={{ color: '#54D62C' }}
                            />
                          )}
                          <Typography variant='body2' sx={{ ml: 2 }}>
                            {property.label}
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default function GroupsAndProperties() {
  const { t } = useTranslation();
  const { bigcommerceSourceShopId, hubspotTargetShopId } = useConnectedApps();
  const { data } = useGetGroupsProperties(
    bigcommerceSourceShopId,
    hubspotTargetShopId
  );
  if (data === undefined) {
    return (
      <Card sx={{ minHeight: '86vh' }}>
        <PartialPageSpinner />
      </Card>
    );
  }

  const groupsData = data.data;

  return (
    <Page title={t('import_export')} sx={{ background: '#E5E5E5' }}>
      <Container maxWidth='xl' sx={{ minHeight: '86vh' }}>
        <Box sx={{ py: 12 }}>
          <Typography variant='h4'>{t('groups_and_properties')}</Typography>
          <Typography variant='body2' sx={{ mb: 2 }}>
            {t('groups_properties_line_1')}
          </Typography>
          <Card>
            <TableContainer component={Paper}>
              <Table aria-label='collapsible table'>
                <TableBody>
                  {groupsData.map(group => (
                    <Row
                      key={group.name}
                      row={group}
                      targetShopId={hubspotTargetShopId}
                      sourceShopId={bigcommerceSourceShopId}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Box>
      </Container>
    </Page>
  );
}
