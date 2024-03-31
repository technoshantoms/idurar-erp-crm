import { Form, Input, InputNumber } from 'antd';
import { useDate, useMoney } from '@/settings';

import { DatePicker } from 'antd';
import React from 'react';
import SelectAsync from '@/components/SelectAsync';
import dayjs from 'dayjs';
import useLanguage from '@/locale/useLanguage';
import { generatePaymentId } from '@/utils/helpers';

export default function PaymentForm({ maxAmount = null, isUpdateForm = false }) {
  const translate = useLanguage();
  const { TextArea } = Input;
  const money = useMoney();
  const { dateFormat } = useDate();

  return (
    <>
      <Form.Item
        label={translate('Payment No.')}
        name="number"
        initialValue={generatePaymentId()}
        rules={[
          {
            required: true,
          },
        ]}
        style={{ width: '50%', float: 'left', paddingRight: '20px' }}
      >
        <Input style={{ width: '100%' }} disabled />
      </Form.Item>
      <Form.Item
        name="date"
        label={translate('date')}
        rules={[
          {
            required: true,
            type: 'object',
          },
        ]}
        initialValue={dayjs().add(30, 'days')}
        style={{ width: '100%' }}
      >
        <DatePicker format={dateFormat} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label={translate('amount')} name="amount" rules={[{ required: true }]}>
        <InputNumber
          className="moneyInput"
          min={0}
          controls={false}
          max={maxAmount}
          addonAfter={money.currency_position === 'after' ? money.currency_symbol : undefined}
          addonBefore={money.currency_position === 'before' ? money.currency_symbol : undefined}
        />
      </Form.Item>
      <Form.Item
        label={translate('payment Mode')}
        name="paymentMode"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <SelectAsync
          entity={'paymentMode'}
          displayLabels={['name']}
          withRedirect={true}
          urlToRedirect="/payment/mode"
          redirectLabel="Add Payment Mode"
        ></SelectAsync>
      </Form.Item>
      <Form.Item label={translate('Reference Cheque Number')} name="ref">
        <Input />
      </Form.Item>
      <Form.Item label={translate('Bank Details')} name="description">
        <TextArea />
      </Form.Item>
    </>
  );
}
