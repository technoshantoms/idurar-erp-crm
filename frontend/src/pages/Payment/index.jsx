import { Radio, Space, Table, Tag } from 'antd';
import { useDate, useMoney } from '@/settings';

import PaymentDataTableModule from '@/modules/PaymentModule/PaymentDataTableModule';
import dayjs from 'dayjs';
import useLanguage from '@/locale/useLanguage';

export default function Payment() {
  const translate = useLanguage();
  const { dateFormat } = useDate();
  const { moneyFormatter } = useMoney();
  const searchConfig = {
    entity: 'client',
    displayLabels: ['number'],
    searchFields: 'number',
    outputValue: '_id',
  };

  const deleteModalLabels = ['number'];
  const dataTableColumns = [
    {
      title: translate('Payment No.'),
      dataIndex: 'number',
    },
    {
      title: translate('Client'),
      dataIndex: ['client', 'name'],
    },
    {
      title: translate('Amount'),
      dataIndex: 'amount',
      onCell: () => {
        return {
          style: {
            textAlign: 'right',
            whiteSpace: 'nowrap',
            direction: 'ltr',
          },
        };
      },
      render: (amount, record) =>
        moneyFormatter({ amount: amount, currency_code: record.currency }),
    },
    {
      title: translate('Date'),
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format(dateFormat);
      },
    },
    {
      title: translate('INV. No.'),
      dataIndex: ['invoice', 'number'],
      render: (invoice, record) => (
        <span>
          {record.invoice.map((tag) => {
            console.log('tag._id', tag._id);
            return (
              <Tag color={'green'} key={tag._id}>
                {tag.number}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: translate('year'),
      dataIndex: ['invoice', 'year'],
    },
    {
      title: translate('Payment Mode'),
      dataIndex: ['paymentMode', 'name'],
    },
  ];

  const entity = 'payment';

  const Labels = {
    PANEL_TITLE: translate('payment'),
    DATATABLE_TITLE: translate('payment_list'),
    ADD_NEW_ENTITY: translate('add_new_payment'),
    ENTITY_NAME: translate('payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    disableAdd: false,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return <PaymentDataTableModule config={config} />;
}
