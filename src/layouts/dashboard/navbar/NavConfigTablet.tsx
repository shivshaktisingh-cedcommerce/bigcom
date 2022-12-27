import { NavListProps } from 'components/nav-section/type';
import { BIGCOMMERCE_NAVIGATION, PATH_PAGE, PATH_USER } from 'routes/paths';
import Iconify from 'components/Iconify';
import { t } from 'i18next';
import SvgIconStyle from 'components/SvgIconStyle';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const getIcon = (name: string) => (
  <SvgIconStyle src={`images/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  hubspotIcon: getIcon('hubspot_icon'),
  hubProperties: getIcon('ic_menu'),
  activities: getIcon('ic_activities'),
};

const navConfigTablet = () => {
  const navConfigArr: {
    items: NavListProps[];
  }[] = [
    {
      items: [
        {
          title: t('dashboard'),
          path: PATH_USER.dashboard,
          icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
        },
      ],
    },
    {
      items: [
        {
          title: t('hubspot'),
          path: PATH_USER.dashboard,
          icon: ICONS.hubspotIcon,
          children: [
            { title: 'Products', path: PATH_PAGE.products },
            { title: 'Orders', path: PATH_PAGE.orders },
            { title: 'Customers', path: PATH_PAGE.customers },
            { title: 'Import/Expot', path: PATH_PAGE.importExport },
          ],
        },
      ],
    },
    {
      items: [
        {
          title: t('hub_properties'),
          path: PATH_USER.dashboard,
          icon: ICONS.hubProperties,
          children: [
            { title: 'Smart Lists', path: PATH_PAGE.lists },
            { title: 'Workflow', path: PATH_PAGE.workflows },
            {
              title: 'Group & Properties',
              path: PATH_PAGE.groupsAndProperties,
            },
          ],
        },
      ],
    },
    {
      items: [
        {
          title: '',
          path: PATH_USER.dashboard,
          icon: <Iconify icon={'akar-icons:more-vertical'} {...ICON_SIZE} />,
          children: [
            {
              title: t('log_details'),
              path: PATH_PAGE.logs,
            },
            {
              title: t('configurations'),
              path: PATH_PAGE.configurations,
            },
            {
              title: t('activities'),
              path: BIGCOMMERCE_NAVIGATION.general.activity('ongoing'),
            },
            { title: 'FAQs', path: PATH_PAGE.contact },
          ],
        },
      ],
    },
  ];

  return navConfigArr;
};

export default navConfigTablet;
