import { useState, useEffect } from 'react';

import { ConfigProvider, theme } from 'antd';

import { useSelector } from 'react-redux';

import { selectLangState } from '@/redux/translate/selectors';
import PageLoader from '@/components/PageLoader';

import antdLocale from './antdLocale';

export default function Localization({ children }) {
  const { langCode, langDirection } = useSelector(selectLangState);

  const [locale, setLocal] = useState();
  // const [direction, setDirection] = useState();

  useEffect(() => {
    const lang = antdLocale[langCode];
    // setDirection(langDirection);
    setLocal(lang);
  }, [langCode]);

  if (locale) {
    return (
      <ConfigProvider
        locale={locale}
        theme={{
          // algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#287208',
            colorLink: '#87208',
            borderRadius: 8,
          },
        }}
      >
        {children}
      </ConfigProvider>
    );
  } else {
    return <PageLoader />;
  }
}
