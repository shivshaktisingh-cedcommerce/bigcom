import { LoadingButton } from '@mui/lab';
import { Button, TableCell, TableRow, Typography } from '@mui/material';
import { List } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import { useMutation } from 'react-query';

type Props = {
  data: List;
  type: string;
  createListAndWorkflows: (type: string, name: string) => Promise<void>;
};

const ListAndWorkflowTableRow = ({
  data,
  type,
  createListAndWorkflows,
}: Props) => {
  const { name, desc, created } = data;

  const customerImportMutation = useMutation(
    ({ type, name }: { type: string; name: string }) =>
      createListAndWorkflows(type, name),
    {}
  );

  return (
    <TableRow>
      <TableCell align='left'>
        <Typography variant='subtitle2'>{name}</Typography>
        <Typography variant='body2'>{desc}</Typography>
      </TableCell>
      <TableCell align='center'>
        {created ? (
          <Button disabled variant='outlined'>
            {t('created')}
          </Button>
        ) : (
          <LoadingButton
            onClick={() => customerImportMutation.mutate({ type, name })}
            variant='outlined'
            loading={customerImportMutation.isLoading}
          >
            {t('create')}
          </LoadingButton>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ListAndWorkflowTableRow;
