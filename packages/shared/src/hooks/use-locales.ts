import { useTranslation } from 'react-i18next';
import { useSettings } from './use-settings';
// config
import { allLangs, defaultLang } from '../config';

// ----------------------------------------------------------------------

export const useLocales = () => {
  const { i18n, t: translate } = useTranslation();
  const { onChangeDirectionByLang, onChangeLanguage } = useSettings();

  const langStorage =
    typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : '';

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
    onChangeDirectionByLang(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: any, options?: any) => translate(text, options),
    currentLang,
    allLangs,
  };
};
