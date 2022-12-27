import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import {
  CREATE_LIST_API_URL,
  CREATE_WORKFLOW_API_URL,
} from 'api/ApiConstants/BigcommerceHubspotApiConstants';
import { List } from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';
import { FunctionComponent, ReactNode } from 'react';
import ListAndWorkflowTableRow from './ListAndWorkflowTableRow';
import { TableNoData } from 'components/table';
import axiosInstance from 'utils/axios';

type Props = {
  dataMap: List[];
  type: 'list' | 'workflows';
  sourceShopId: string;
  targetShopId: string;
  refetch: () => void;
};

const ListAndWorkflowsTable: FunctionComponent<Props> = ({
  dataMap,
  type,
  sourceShopId,
  targetShopId,
  refetch,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const accessToken = localStorage.getItem('accessToken');

  const createListAndWorkflows = async (type: string, name: string) => {
    let url = '';
    let params = {};
    if (type === 'list') {
      url = CREATE_LIST_API_URL;
      params = {
        sourceShopId,
        targetShopId,
        list: name,
      };
    } else {
      url = CREATE_WORKFLOW_API_URL;
      params = {
        sourceShopId,
        targetShopId,
        workflow: name,
      };
    }

    try {
      const response = await axiosInstance.post(url, params, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });

      if (response.data.success) {
        enqueueSnackbar(response.data.message, {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(response.data.message, {
          variant: 'error',
        });
      }
      refetch();
    } catch (error: any) {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

  const mapPages = (data: List[]) => {
    const rows: ReactNode[] = [];
    data.forEach((row, index) => {
      rows.push(
        <ListAndWorkflowTableRow
          key={index}
          data={row}
          type={type}
          createListAndWorkflows={createListAndWorkflows}
        />
      );
    });

    return rows;
  };

  const contentLoad = dataMap?.length ? (
    <TableBody>{mapPages(dataMap)}</TableBody>
  ) : (
    <TableBody>
      <TableNoData isNotFound={true} Message={t(type)} />
    </TableBody>
  );

  return (
    <Table sx={{ minWidth: 800 }}>
      <TableHead>
        <TableRow>
          <TableCell align='left' width='90%'>
            {type === 'list' ? t('lists_details') : t('workflow_details')}
          </TableCell>
          <TableCell align='center' width='10%'>
            {t('status')}
          </TableCell>
        </TableRow>
      </TableHead>
      {contentLoad}
    </Table>
  );
};

export default ListAndWorkflowsTable;
