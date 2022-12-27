export interface ApiType {
  success: boolean;
}

export interface CreateAccountType {
  success: boolean;
  data: string;
  ip: string;
}

export interface Pipelines {
  id: string;
  label: string;
  selected: boolean;
  stages: any;
}

interface MappingPipeline {
  mapping: string[];
  pipeline: string;
}

export interface PipelineMappingType {
  success: true;
  default?: MappingPipeline;
  saved?: MappingPipeline;
  source: string[];
  target: { [key: string]: string };
  pipelines: Pipelines[];
}

export interface GetGroupsPropertiesType {
  data: GroupPropertiesRequestType[];
  success: true;
  default: string[];
  source: string[];
  target: { [key: string]: string };
  ip: string;
}

export interface CreateGroupPropertiesListsWorkflowsType {
  success: boolean;
  message?: string;
  code?: string;
  ip?: string;
  totalSteps: number;
  currentStep: number;
}

export interface SetupCardType {
  enableProgessBar: boolean;
  step: number;
  progressValue: number;
  totalSteps: number;
}

export interface GroupPropertiesRequestType {
  name: string;
  label: string;
  objectType: string;
  created: boolean;
  properties: GroupPropertiesRequestPropertiesType[];
}

export interface GroupPropertiesRequestPropertiesType {
  groupName: string;
  name: string;
  label: string;
  type: string;
  fieldType: string;
  formField: boolean;
  created: boolean;
}

export interface GroupPropertiesRequestPostParamsType {
  targetShopId: string;
  sourceShopId: string;
  group: string;
}

interface CommonExportBodyType {
  limit: number;
  filter?: {
    created_at: {
      '7': {
        from: string;
        to: string;
      };
    };
  };
  user_id: string;
}

interface CommonImportExportBodyType {
  target: {
    marketplace: string;
    shopId: string;
  };
  source: {
    marketplace: string;
    shopId: string;
  };
}

interface ImportExportDateDataType {
  data?: {
    'date_created:min': string;
    'date_created:max': string;
  };
}

export interface ImportCustomersType
  extends ImportExportDateDataType,
    CommonImportExportBodyType {
  marketplace: string;
  source: {
    marketplace: string;
    shopId: string;
    data: {
      isPrimeIntented: boolean;
    };
  };
}

export interface ExportCustomersType
  extends CommonExportBodyType,
    CommonImportExportBodyType {
  marketplace: string;
}

export interface ImportOrderType extends CommonImportExportBodyType {
  marketplace: string;
  data?: { min_date_created: string; max_date_created: string };
}

export interface ExportOrderType
  extends CommonExportBodyType,
    CommonImportExportBodyType {
  marketplace: string;
}

export interface ImportProductsType
  extends CommonImportExportBodyType,
    ImportExportDateDataType {}

export interface ExportProductsType
  extends CommonImportExportBodyType,
    CommonExportBodyType {}

export interface ListType extends ApiType {
  data: List[];
}

export interface List {
  onboarding: boolean;
  name: string;
  dynamic: boolean;
  desc: string;
  created: boolean;
  listId: number;
}

export interface WorkFlowType extends ApiType {
  data: List[];
}

export interface Workflow {
  onboarding: boolean;
  name: string;
  desc: string;
  created: boolean;
  workflowId: number;
}

export interface CustomersListType extends ApiType {
  data: {
    count: number;
    rows: CustomersList[];
  };
}

export interface CustomerMarketplaceType {
  shop_id: string;
  source_customer_id: number;
  source_marketplace?: string;
  status?: string;
  target_marketplace?: string;
  target_customer_id?: string;
  errors?: Array<string>;
}

export interface CustomersList {
  id: string;
  _id: string;
  address_count: number;
  addresses: Array<string>;
  app_code: string;
  company: string;
  email: string;
  feed_id: string;
  first_name: string;
  last_name: string;
  phone: string;
  source_customer_id: string;
  source_marketplace: string;
  source_shop_id: string;
  store_hash: string;
  user_id: string;
  marketplace: CustomerMarketplaceType[];
}

export interface ProductsMarketplaceType {
  shop_id: string;
  status?: string;
  target_marketplace?: string;
  target_product_id?: string;
  errors?: Array<string>;
}

export interface ProductsList {
  _id: string;
  image_url: string;
  title: string;
  inventory_level: number;
  sku: string;
  weight: number;
  source_product_id: string;
  price?: number;
  marketplace: ProductsMarketplaceType[];
}

export interface ProductsListType extends ApiType {
  data: {
    totalPageRead: string;
    current_count: number;
    next: string | null;
    prev: string | null;
    rows: ProductsList[];
  };
}

interface OrderAttributes {
  key: string;
  value: number;
}

export interface OrdersTargetsType {
  shop_id: string;
  status?: string;
  target_marketplace?: string;
  target_order_id?: string;
  errors?: Array<string>;
}

export interface OrdersList {
  _id: {
    $oid: string;
  };
  marketplace_reference_id: string;
  customer: {
    email: string;
  };
  source_created_at: string;
  currency: string;
  total: {
    price: number;
  };
  tax: {
    price: string;
  };
  attributes: OrderAttributes[];
  object_type: string;
  targets: OrdersTargetsType[];
}

export interface OrdersListType extends ApiType {
  data: {
    count: number;
    rows: OrdersList[];
  };
}

export interface ProductsCountType extends ApiType {
  data: {
    count: number;
  };
}

export interface ConfigurationsType extends ApiType {
  data: ConfigurationsDataType;
}

export interface OrderStatusType {
  label: string;
  value: number;
}

export interface ConfigurationsDataType {
  abandoncart_setting: {
    abandoncart_sync: boolean;
  };
  automatic_sync: {
    contact_sync: boolean;
    deal_sync: boolean;
    product_sync: boolean;
  };
  pipeline_mapping: PipelineMappingType;
  roi_calculation_setting: {
    calculate_roi: number;
    order_status: OrderStatusType[];
  };
  rfm_setting: {
    score_5: number[];
    score_4: {
      from: number[];
      to: number[];
    };
    score_3: {
      from: number[];
      to: number[];
    };
    score_2: {
      from: number[];
      to: number[];
    };
    score_1: number[];
  };
}

export interface ConfigurationFormValuesProps {
  abandoncartSync: boolean;
  contactSync: boolean;
  dealSync: boolean;
  productSync: boolean;
  calculateRoi: number;
  score5: number[];
  score4: {
    from: number[];
    to: number[];
  };
  score3: {
    from: number[];
    to: number[];
  };
  score2: {
    from: number[];
    to: number[];
  };
  score1: number[];
  afterSubmit?: string;
}

export interface ActivitiesType {
  success: boolean;
  data: {
    rows: Activities[];
  };
}

export interface Activities {
  _id: {
    $oid: string;
  };
  user_id: string;
  shop_id: string;
  marketplace: string;
  appTag: string;
  process_code: string;
  progress: number;
  created_at: string;
  message: string;
  tag: string;
  updated_at: string;
  severity?: string;
}

export interface DataLogType {
  _id: string;
  objectType: string;
  request: string;
  response: string;
  operation: string;
  action: string;
  externalObjectId: string;
  internalObjectId: string;
  created_at: string;
}

export interface DataLogDataType {
  count: number;
  totalCount: number;
  skip: number;
  hasMore: boolean;
  data: DataLogType[];
}

export interface SyncDataSummaryType {
  customers: {
    total: number;
    synced: number;
    last_synced: string;
  };
  products: {
    total: number;
    synced: number;
    last_synced: string;
  };
  orders: {
    total: number;
    synced: number;
    last_synced: string;
  };
}

export interface UserDetailsDataType extends ApiType {
  data: {
    name: string;
    email: string;
    user_id: string;
    user_status: string;
    username: string;
    _id: {
      $oid: string;
    };
  };
  message?: string;
}
