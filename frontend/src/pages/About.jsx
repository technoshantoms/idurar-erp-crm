import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'SATIA LTD'}
      subTitle={translate('Do you need help concerning this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.homepesa.com">www.homepesa.com</a>{' '}
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.homepesa.com/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
