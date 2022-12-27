function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
const ROOTS_SETUP = '/setup';
const ROOTS_AUTH = '/auth';
export const ERROR = '/error';
const DASHBOARD = '/';
const ROOTS_BIGCOMMERCE_HOME = '';

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact:
    'https://makewebbetter.com/contact-us/?utm_source=mwbappsm&utm_medium=mwb&utm_campaign=CTA',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
  groupsAndProperties: '/groups-properties',
  importExport: '/import-export',
  lists: '/lists',
  workflows: '/workflows',
  customers: '/customers',
  products: '/products',
  orders: '/orders',
  logs: '/logs',
  configurations: '/configurations',
};

export const PATH_SETUP = {
  root: ROOTS_SETUP,
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verifyEmail: path(ROOTS_AUTH, '/verify-email'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  changePassword: path(ROOTS_AUTH, '/change-password'),
  resendEmail: path(ROOTS_AUTH, '/resend-mail'),
};

export const PATH_USER = {
  dashboard: DASHBOARD,
};

export const BIGCOMMERCE_NAVIGATION = {
  root: ROOTS_BIGCOMMERCE_HOME,
  general: {
    activity: (tabIndex: string) =>
      path(ROOTS_BIGCOMMERCE_HOME, '/activities/' + tabIndex),
  },
};
export const SUPPORT_URL =
  'https://makewebbetter.com/contact-us/?utm_source=mwbappsm&utm_medium=mwb&utm_campaign=CTA';

export const TERMS_AND_CONDITIONS_URL =
  'https://makewebbetter.com/terms-and-conditions/?utm_source=mwbapps&utm_medium=mwb&utm_campaign=CTA';

export const PRIVACY_POLICY_URL =
  'https://makewebbetter.com/privacy-policy/?utm_source=mwbapps&utm_medium=mwb&utm_campaign=CTA';

export const SCHEDULE_NOW_MEETING_URL =
  'https://meetings.hubspot.com/makewebbetter/free-hubspot-consultation?utm_source=mwbapps&utm_medium=mwb&utm_campaign=CTA';

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';

export const TUTORIAL_URL =
  'https://docs.makewebbetter.com/formpay-hubspot-integration/?utm_source=app&utm_medium=mwb&utm_campaign=formpay';

export const MANAGE_HUBSPOT_URL = (portalId: string) =>
  'https://app.hubspot.com/forms/' + portalId;
