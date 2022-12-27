// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Dashboard',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
    slug: 'dashboard',
  },
  {
    title: 'HubSpot',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    slug: 'hubspot',
    children: [
      {
        items: [
          { title: 'Products', path: PATH_PAGE.about },
          { title: 'Orders', path: PATH_PAGE.contact },
          { title: 'Customers', path: PATH_PAGE.faqs },
          { title: 'Import/Expot', path: PATH_PAGE.pricing },
        ],
      },
    ],
  },
  {
    title: 'Hub Properties',
    icon: <Iconify icon={'akar-icons:text-align-right'} {...ICON_SIZE} />,
    path: '/hub-properties',
    slug: 'hub-properties',
  },
  {
    title: 'Log Details',
    icon: <Iconify icon={'akar-icons:text-align-right'} {...ICON_SIZE} />,
    path: '/log-details',
    slug: 'log-details',
  },
  {
    title: 'Configurations',
    icon: <Iconify icon={'eva:settings-2-fill'} {...ICON_SIZE} />,
    path: '/configurations',
    slug: 'configurations',
  },
  {
    title: 'Plans',
    icon: <Iconify icon={'ant-design:dollar-outlined'} {...ICON_SIZE} />,
    path: '/plans',
    slug: 'plans',
  },
  {
    title: 'Activities',
    icon: <Iconify icon={'eva:settings-2-fill'} {...ICON_SIZE} />,
    path: '/activities',
    slug: 'activities',
  },
  {
    title: 'more',
    icon: <Iconify icon={'eva:settings-2-fill'} {...ICON_SIZE} />,
    path: '',
    slug: 'more',
  },
];

export default menuConfig;
