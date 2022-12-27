import Page from '../components/Page';
import { useTranslation } from 'react-i18next';
import Invalid from 'components/Invalid';

export default function ContactSupport() {
  const { t } = useTranslation();

  return (
    <Page title={t('oops_error_occured')} sx={{ height: 1 }}>
      <Invalid
        detailedMessage='Some error has occurred, Please refresh the page or if it still persists contact support.'
        invalidMessage={t('oops_error_occured')}
      />
    </Page>
  );
}
