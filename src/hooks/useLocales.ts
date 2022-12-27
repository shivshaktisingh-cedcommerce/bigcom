import { useTranslation } from 'react-i18next';
import { enUS, frFR } from '@mui/material/locale';

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: frFR,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_fr.svg',
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang =
    LANGS.find(_lang => _lang.value === langStorage) || LANGS[0];

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
    window.location.reload();
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
