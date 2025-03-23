import { useLanguage } from '../context/LanguageContext';
import translations from '../languagues/translations';

export default function useTranslation(componentKey) {
  const { language } = useLanguage();

  const currentTranslations =
    translations[language] && translations[language][componentKey]
      ? translations[language][componentKey]
      : translations['en'][componentKey];

  return currentTranslations;
}