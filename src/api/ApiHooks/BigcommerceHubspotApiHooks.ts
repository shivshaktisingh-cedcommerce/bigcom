import { useMutation, useQuery, UseQueryResult } from 'react-query';
import {
  CREATE_HUBSPOT_ACCOUNT_REDIRECT_API_URL,
  GET_PIPELINE_MAPPING_DETAILS_API_URL,
  GET_GROUPS_AND_PROPERTIES_API_URL,
  CREATE_GROUPS_AND_PROPERTIES_REQUEST_API_URL,
  IMPORT_CUSTOMERS_API_URL,
  GET_LISTS_API_URL,
  GET_WORKFLOWS_API_URL,
  GET_ALL_CUSTOMERS_API_URL,
  GET_CONFIGURATIONS_API_URL,
  SAVE_CONFIGURATIONS_API_URL,
  IMPORT_PRODUCTS_API_URL,
  GET_ALL_PRODUCTS_API_URL,
  GET_PRODUCTS_COUNT_API_URL,
  GET_ALL_ORDERS_API_URL,
  EXPORT_PRODUCTS_API_URL,
  EXPORT_CUSTOMERS_API_URL,
  IMPORT_ORDER_API_URL,
  EXPORT_ORDER_API_URL,
  ONGOING_ACTIVITIES_API_URL,
  COMPLETED_ACTIVITIES_API_URL,
  GET_LOGS_DATA_API_URL,
  COMPLETE_ONBOARDING_API_URL,
  GET_SYNC_DATA_SUMMARY_API_URL,
  CLEAR_NOTIFICATION_API_URL,
  CONNECTED_APPS_API_URL,
  REFETCH_INTERVAL,
} from '../ApiConstants/BigcommerceHubspotApiConstants';
import {
  CreateAccountType,
  PipelineMappingType,
  CreateGroupPropertiesListsWorkflowsType,
  GetGroupsPropertiesType,
  GroupPropertiesRequestPostParamsType,
  ImportCustomersType,
  ListType,
  WorkFlowType,
  CustomersListType,
  ConfigurationsType,
  ConfigurationFormValuesProps,
  ImportProductsType,
  ProductsListType,
  ProductsCountType,
  OrdersListType,
  ImportOrderType,
  ExportProductsType,
  ExportCustomersType,
  ExportOrderType,
  ActivitiesType,
  DataLogDataType,
  SyncDataSummaryType,
} from 'containers/common/user/ConnectHubspot/BigcommerceHubspotType';
import { ConnectedAppsDataType } from 'contexts/ConnectedAppsContext';
import axiosInstance from 'utils/axios';

const requestCreateAccountUrl = async (): Promise<CreateAccountType> => {
  const { data } = await axiosInstance.get<CreateAccountType>(
    `${CREATE_HUBSPOT_ACCOUNT_REDIRECT_API_URL}`
  );

  return data;
};

export const useCreateAccountUrl = (
  onSuccess: (data: CreateAccountType) => void,
  onError: () => void
) => {
  return useMutation(() => requestCreateAccountUrl(), {
    onSuccess,
    onError,
  });
};

export const requestCreateGroupsPropertiesListsWorkflows = async (
  step: number,
  targetShopId: string,
  sourceShopId: string,
  url: string
): Promise<CreateGroupPropertiesListsWorkflowsType> => {
  const { data } =
    await axiosInstance.post<CreateGroupPropertiesListsWorkflowsType>(url, {
      step,
      targetShopId,
      sourceShopId,
    });

  return data;
};

export const useCreatePipeLine = (
  sourceShopId: string,
  targetShopId: string
): UseQueryResult<PipelineMappingType> => {
  return useQuery(
    [GET_PIPELINE_MAPPING_DETAILS_API_URL],
    () => requestCreatePipeline(sourceShopId, targetShopId),
    {
      refetchOnWindowFocus: false,
    }
  );
};

const requestCreatePipeline = async (
  sourceShopId: string,
  targetShopId: string
): Promise<PipelineMappingType> => {
  const { data } = await axiosInstance.get<PipelineMappingType>(
    `${GET_PIPELINE_MAPPING_DETAILS_API_URL}`,
    {
      params: {
        sourceShopId,
        targetShopId,
      },
    }
  );

  return data;
};

export const useGetGroupsProperties = (
  sourceShopId: string,
  targetShopId: string
): UseQueryResult<GetGroupsPropertiesType> => {
  return useQuery(
    [GET_GROUPS_AND_PROPERTIES_API_URL],
    () => requestGetGroupsProperties(sourceShopId, targetShopId),
    {
      refetchOnWindowFocus: false,
    }
  );
};

const requestGetGroupsProperties = async (
  sourceShopId: string,
  targetShopId: string
): Promise<GetGroupsPropertiesType> => {
  const { data } = await axiosInstance.get<GetGroupsPropertiesType>(
    `${GET_GROUPS_AND_PROPERTIES_API_URL}`,
    {
      params: {
        sourceShopId,
        targetShopId,
      },
    }
  );

  return data;
};

export const groupsPropertiesRequestCreate = (
  data: GroupPropertiesRequestPostParamsType
) => {
  return axiosInstance.post(CREATE_GROUPS_AND_PROPERTIES_REQUEST_API_URL, data);
};

export const customersImport = (data: ImportCustomersType) => {
  return axiosInstance.post(IMPORT_CUSTOMERS_API_URL, data);
};

export const customersExport = (data: ExportCustomersType) => {
  return axiosInstance.post(EXPORT_CUSTOMERS_API_URL, data);
};

export const productsImport = (data: ImportProductsType) => {
  return axiosInstance.post(IMPORT_PRODUCTS_API_URL, data);
};

export const productsExport = (data: ExportProductsType) => {
  return axiosInstance.post(EXPORT_PRODUCTS_API_URL, data);
};

export const orderImport = (data: ImportOrderType) => {
  return axiosInstance.post(IMPORT_ORDER_API_URL, data);
};

export const orderExport = (data: ExportOrderType) => {
  return axiosInstance.post(EXPORT_ORDER_API_URL, data);
};

export const useLists = (
  sourceShopId: string,
  targetShopId: string
): UseQueryResult<ListType> => {
  return useQuery(
    [GET_LISTS_API_URL],
    () => requestgetLists(sourceShopId, targetShopId),
    {
      refetchOnWindowFocus: false,
    }
  );
};

const requestgetLists = async (
  sourceShopId: string,
  targetShopId: string
): Promise<ListType> => {
  const { data } = await axiosInstance.get<ListType>(`${GET_LISTS_API_URL}`, {
    params: {
      sourceShopId,
      targetShopId,
    },
  });

  return data;
};

const getWorkflows = async (
  sourceShopId: string,
  targetShopId: string
): Promise<WorkFlowType> => {
  const { data } = await axiosInstance.get<WorkFlowType>(
    `${GET_WORKFLOWS_API_URL}`,
    {
      params: {
        sourceShopId,
        targetShopId,
      },
    }
  );

  return data;
};

export const useWorkFlows = (
  sourceShopId: string,
  targetShopId: string
): UseQueryResult<WorkFlowType> => {
  return useQuery(
    [GET_WORKFLOWS_API_URL],
    () => getWorkflows(sourceShopId, targetShopId),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const requestgetAllCustomers = async (
  count: number,
  activePage: number,
  filterName: string
): Promise<CustomersListType> => {
  const { data } = await axiosInstance.get<CustomersListType>(
    `${GET_ALL_CUSTOMERS_API_URL}`,
    {
      params: {
        count,
        activePage,
        'filter[email][3]': filterName,
      },
    }
  );

  return data;
};

export const getAllProducts = async (
  count: number,
  activePage: number,
  bigcommerceSourceShopId: string,
  filterName: string
): Promise<ProductsListType> => {
  const { data } = await axiosInstance.get<ProductsListType>(
    `${GET_ALL_PRODUCTS_API_URL}`,
    {
      params: {
        count,
        activePage,
        'filter[type][3]': 'simple',
        ...(filterName ? { 'filter[title][3]': filterName } : {}),
      },
      headers: {
        'Ced-Source-Id': bigcommerceSourceShopId,
      },
    }
  );

  return data;
};

export const getAllOrders = async (
  count: number,
  activePage: number,
  bigcommerceSourceShopId: string,
  filterName: string
): Promise<OrdersListType> => {
  const { data } = await axiosInstance.get<OrdersListType>(
    `${GET_ALL_ORDERS_API_URL}`,
    {
      params: {
        count,
        activePage,
        'filter[object_type][1]': 'source_order',
        ...(filterName
          ? { 'filter[marketplace_reference_id][3]': filterName }
          : {}),
      },
      headers: {
        'Ced-Source-Id': bigcommerceSourceShopId,
      },
    }
  );

  return data;
};

export const getProductsCount = async (
  bigcommerceSourceShopId: string,
  filterName: string
): Promise<ProductsCountType> => {
  const { data } = await axiosInstance.get<ProductsCountType>(
    `${GET_PRODUCTS_COUNT_API_URL}`,
    {
      params: {
        product_count_type: 'productCount',
        'filter[type][3]': 'simple',
        ...(filterName ? { 'filter[source_product_id][3]': filterName } : {}),
      },
      headers: {
        'Ced-Source-Id': bigcommerceSourceShopId,
      },
    }
  );

  return data;
};

export const requestgetConfigurations = async (
  targetShopId: string,
  sourceShopId: string
): Promise<ConfigurationsType> => {
  const { data } = await axiosInstance.get<ConfigurationsType>(
    `${GET_CONFIGURATIONS_API_URL}`,
    {
      params: {
        targetShopId,
        sourceShopId,
      },
    }
  );

  return data;
};

export const updateConfigurations = (
  data: ConfigurationFormValuesProps,
  targetShopId: string,
  sourceShopId: string
) => {
  return axiosInstance.post(SAVE_CONFIGURATIONS_API_URL, {
    sourceShopId,
    targetShopId,
    abandoncart_sync: data.abandoncartSync,
    contact_sync: data.contactSync,
    deal_sync: data.dealSync,
    product_sync: data.productSync,
    calculate_roi: data.calculateRoi,
    rfm_setting: {
      score_5: data.score5,
      score_4: data.score4,
      score_3: data.score3,
      score_2: data.score2,
      score_1: data.score1,
    },
  });
};

export const useOngoingActivities = (
  data: any
): UseQueryResult<ActivitiesType> => {
  return useQuery(
    [ONGOING_ACTIVITIES_API_URL],
    () => requestGetOngoingActivities(data),
    {
      refetchOnWindowFocus: false,
      refetchInterval: REFETCH_INTERVAL,
    }
  );
};

const requestGetOngoingActivities = async (
  reqData: any
): Promise<ActivitiesType> => {
  const { data } = await axiosInstance.post<ActivitiesType>(
    ONGOING_ACTIVITIES_API_URL,
    reqData
  );

  return data;
};

export const useCompletedActivities = (
  data: any
): UseQueryResult<ActivitiesType> => {
  return useQuery(
    [COMPLETED_ACTIVITIES_API_URL],
    () => requestGetCompletedActivities(data),
    {
      refetchOnWindowFocus: false,
      refetchInterval: REFETCH_INTERVAL,
    }
  );
};

const requestGetCompletedActivities = async (
  reqData: any
): Promise<ActivitiesType> => {
  const { data } = await axiosInstance.post<ActivitiesType>(
    COMPLETED_ACTIVITIES_API_URL,
    reqData
  );

  return data;
};
export const getLogsData = async (
  targetShopId: string,
  limit: number,
  skip: number,
  object: string
): Promise<DataLogDataType> => {
  const { data } = await axiosInstance.get<DataLogDataType>(
    `${GET_LOGS_DATA_API_URL}`,
    {
      params: {
        targetShopId,
        limit,
        skip,
        ...(object && object !== 'all' ? { object } : {}),
      },
    }
  );

  return data;
};

export const completeOnboarding = (
  targetShopId: string,
  sourceShopId: string
) => {
  return axiosInstance.post(COMPLETE_ONBOARDING_API_URL, {
    targetShopId,
    sourceShopId,
  });
};

export const getSyncDataSummary = async (
  bigcommerceSourceShopId: string,
  hubspotTargetShopId: string
): Promise<SyncDataSummaryType> => {
  const { data } = await axiosInstance.get<SyncDataSummaryType>(
    `${GET_SYNC_DATA_SUMMARY_API_URL}`,
    {
      params: {
        source_shop_id: bigcommerceSourceShopId,
        target_shop_id: hubspotTargetShopId,
      },
      headers: {
        'Ced-Source-Id': bigcommerceSourceShopId,
      },
    }
  );

  return data;
};

export const useGetConfigurations = (
  hubspotTargetShopId: string,
  bigcommerceSourceShopId: string
): UseQueryResult<ConfigurationsType> => {
  return useQuery<ConfigurationsType>(
    [GET_CONFIGURATIONS_API_URL],
    () =>
      requestgetConfigurations(hubspotTargetShopId, bigcommerceSourceShopId),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const clearNotifications = (
  hubspotTargetShopId: string,
  bigcommerceSourceShopId: string
) => {
  return axiosInstance.post(
    CLEAR_NOTIFICATION_API_URL,
    {
      target: {
        marketplace: 'hubspot',
        shopId: hubspotTargetShopId,
      },
      source: {
        marketplace: 'shopline',
        shopId: bigcommerceSourceShopId,
      },
    },
    {
      headers: {
        'Ced-Source-Id': bigcommerceSourceShopId,
        'Ced-Target-Id': hubspotTargetShopId,
      },
    }
  );
};

export const getAllConnectedAppsData = async (
  token: string
): Promise<ConnectedAppsDataType> => {
  const { data } = await axiosInstance.get<ConnectedAppsDataType>(
    CONNECTED_APPS_API_URL,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return data;
};
