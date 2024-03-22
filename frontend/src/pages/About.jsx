import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Satia Technologies'}
      subTitle={translate('Do you need an app? or erp/crm/ integrated with payment?')}
      extra={
        <>
          <p>
            Website : <a href="https://www.saltiam.com">www.saltiam.com</a>{' '}
          </p>
         
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.saltiam.com/`);
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
