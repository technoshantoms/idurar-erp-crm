import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/idurar-crm-erp.svg';
import useLanguage from '@/locale/useLanguage';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="IDURAR ERP CRM"
          style={{ margin: '0 auto 40px', display: 'block' }}
          height={140}
          width={330}
        />
         <div className="space40"></div>
        <Title level={3}>Homepesa (CLOUD HOSTED) is open for use by companies, churches, & and SACCOs</Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>{translate('All-in-one tool')}</Text>

              <Text>This multi-currency paymeny,erp, & crm software is mainatined by: www.saltiam.com  
              </Text>
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
        </div>
      </div>
    </Content>
  );
}
