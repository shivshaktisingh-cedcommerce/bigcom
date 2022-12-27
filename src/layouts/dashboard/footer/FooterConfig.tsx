import { NavListProps } from 'components/nav-section/type';
import { PATH_PAGE, PATH_USER } from 'routes/paths';
import Iconify from 'components/Iconify';
import { t } from 'i18next';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const footerConfig = () => {
  const footerConfigArr: {
    items: NavListProps[];
  }[] = [
    {
      items: [
        {
          title: t('help_and_support'),
          path: PATH_USER.dashboard,
          icon: <Iconify icon={'bxs:user'} {...ICON_SIZE} />,
        },
      ],
    },
    {
      items: [
        {
          title: t('documentation'),
          path: PATH_USER.dashboard,
          icon: <Iconify icon={'ant-design:file-pdf-filled'} {...ICON_SIZE} />,
        },
      ],
    },
    {
      items: [
        {
          title: t('contact_us'),
          path: PATH_USER.dashboard,
          icon: (
            <Iconify
              icon={'icon-park-twotone:phone-telephone'}
              {...ICON_SIZE}
            />
          ),
        },
      ],
    },
  ];

  return footerConfigArr;
};

export default footerConfig;
