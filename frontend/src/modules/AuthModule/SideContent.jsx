import { Divider, Layout, Space, Typography } from 'antd';

import logo from '@/style/images/Cigniti-New-Logo.png';
import useLanguage from '@/locale/useLanguage';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  return (
    <Content
      style={{
        padding: '10px 20px 20px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="CIGNITI ERP CRM"
          style={{ margin: '0 auto 40px', display: 'block' }}
          height={170}
          width={250}
        />
        <div className="space40"></div>
        <Title level={3}>Homepesa (CLOUD HOSTED) is open for use by Entities such as SACCOs [e.g.Homepesa SACCO], companies, Churches, & sole-proprietors:</Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>{translate('All-in-one tool')}</Text>

              <Text>This multi-currency paymeny,erp, & crm software is mainatined by: www.saltiam.com</Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>{translate('Easily add and manage your services')}</Text>
              <Text>{translate('It brings together your invoice clients and leads')}</Text>
            </Space>
          </li>
        </ul>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* <img
            src={logo1}
            alt="Logo1"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo2}
            alt="Logo2"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo3}
            alt="Logo3"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo4}
            alt="Logo4"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          /> */}
        </div>
      </div>
    </Content>
  );
}
