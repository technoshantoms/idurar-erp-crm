import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const Subscription = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Salesforce CRM/ERP application'}
      subTitle={translate('2,000.00 ZAR')}
      extra={
        <>
          <p>
            SAAS Subscription: <a href=" https://www.peachpayments.com/">Powered by Peach-payment solution</a>{' '}
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://sandbox-l.ppay.io/9f70422dd065ecc9`);
            }}
          >
            {translate('Subscribe')}
          </Button>
        </>
      }
    />
  );
};

export default Subscription;
