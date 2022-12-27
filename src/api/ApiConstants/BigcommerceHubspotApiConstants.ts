import { HOST_API } from 'config';
export const LOGIN_API = HOST_API + '/user/login';
export const REGISTER_API = HOST_API + '/user/create';
export const VERIFY_EMAIL_TOKEN = HOST_API + '/user/verifyuser/';
export const USER_DETAILS_API_URL =
  HOST_API + '/bigcommercehome/request/getUserDetails';
export const FORGOT_PASSWORD_API_URL = HOST_API + '/user/forgot';
export const FORGOT_RESET_PASSWORD_API_URL = HOST_API + '/user/forgotreset';
export const UPDATE_PROFILE_API_URL = HOST_API + '/user/updateProfile';
export const RESET_PASSWORD_API_URL = HOST_API + '/user/resetpassword';
export const RESEND_VERIFICATION_MAIL_URL =
  HOST_API + '/user/resendConfirmation';
export const CONNECT_TO_HUBSPOT_API_URL =
  HOST_API + '/connector/get/installationForm';
export const CREATE_HUBSPOT_ACCOUNT_REDIRECT_API_URL =
  HOST_API + '/hubspothome/onboard/createHubspotAccountRedirect';
export const CREATE_GROUPS_AND_PROPERTIES_API_URL =
  HOST_API + '/hubspothome/onboard/createGroupsAndProperties';
export const CREATE_LISTS_API_URL =
  HOST_API + '/hubspothome/onboard/createSmartLists';
export const CREATE_WORKFLOWS_API_URL =
  HOST_API + '/hubspothome/onboard/createWorkflow';
export const SAVE_MAPPING_DATA_API_URL =
  HOST_API + '/hubspothome/onboard/saveMappingData';
export const GET_PIPELINE_MAPPING_DETAILS_API_URL =
  HOST_API + '/hubspothome/onboard/getPipelineMapping';
export const INITIAL_SYNC_API_URL =
  HOST_API + '/hubspothome/onboard/triggerInitialSync';
export const GET_GROUPS_AND_PROPERTIES_API_URL =
  HOST_API + '/hubspothome/request/getGroupsAndProperties';
export const CREATE_GROUPS_AND_PROPERTIES_REQUEST_API_URL =
  HOST_API + '/hubspothome/request/createGroupsAndProperties';
export const COMPLETE_ONBOARDING_API_URL =
  HOST_API + '/hubspothome/onboard/CompleteOnboarding';
export const IMPORT_CUSTOMERS_API_URL = HOST_API + '/connector/customer/import';
export const EXPORT_CUSTOMERS_API_URL =
  HOST_API + '/hubspothome/upload/uploadCustomer';
export const IMPORT_PRODUCTS_API_URL = HOST_API + '/connector/product/import';
export const EXPORT_PRODUCTS_API_URL =
  HOST_API + '/hubspothome/upload/uploadProduct';
export const IMPORT_ORDER_API_URL = HOST_API + '/connector/order/import';
export const EXPORT_ORDER_API_URL =
  HOST_API + '/hubspothome/upload/uploadOrder';
export const GET_LISTS_API_URL = HOST_API + '/hubspothome/request/getLists';
export const GET_WORKFLOWS_API_URL =
  HOST_API + '/hubspothome/request/getWorkflows';
export const CREATE_LIST_API_URL = HOST_API + '/hubspothome/request/createList';
export const CREATE_WORKFLOW_API_URL =
  HOST_API + '/hubspothome/request/createWorkflow';
export const GET_ALL_CUSTOMERS_API_URL =
  HOST_API + '/connector/customer/getAllCustomers';
export const GET_ALL_PRODUCTS_API_URL =
  HOST_API + '/connector/product/getProducts';
export const GET_ALL_ORDERS_API_URL =
  HOST_API + '/connector/order/getAllOrders';
export const GET_PRODUCTS_COUNT_API_URL =
  HOST_API + '/connector/product/getProductsCount';
export const GET_CONFIGURATIONS_API_URL =
  HOST_API + '/hubspothome/setting/getConfigurations';
export const SAVE_CONFIGURATIONS_API_URL =
  HOST_API + '/hubspothome/setting/saveConfigurations';
export const UPLOAD_SINGLE_PRODUCT_API_URL =
  HOST_API + '/hubspothome/upload/uploadSingleProduct';
export const UPLOAD_SINGLE_ORDER_API_URL =
  HOST_API + '/hubspothome/upload/uploadSingleOrder';
export const UPLOAD_SINGLE_CUSTOMER_API_URL =
  HOST_API + '/hubspothome/upload/uploadSingleCustomer';
export const CONNECTED_APPS_API_URL = HOST_API + '/connector/get/all';
export const ONGOING_ACTIVITIES_API_URL =
  HOST_API + '/connector/get/allQueuedTasks';
export const COMPLETED_ACTIVITIES_API_URL =
  HOST_API + '/connector/get/allNotifications';
export const GET_LOGS_DATA_API_URL = HOST_API + '/hubspothome/request/getLogs';
export const GET_SYNC_DATA_SUMMARY_API_URL =
  HOST_API + '/bigcommercehome/dashboard/syncDataSummary';
export const CLEAR_NOTIFICATION_API_URL =
  HOST_API + '/connector/get/clearNotifications';
export const REFETCH_INTERVAL = 1 * 60 * 1000;
