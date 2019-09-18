import React from "react";
import { Form, Icon, Input, Button } from 'antd';

const AddWalletFrom = ({ handler, form }) => {
  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={handler} className="add-wallet-form">
      <Form.Item>
        {getFieldDecorator('address', {
          rules: [{ required: true, message: 'Please input wallet address!' }],
        })(
          <Input
            prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Wallet address"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="add-wallet-button">
          Add
        </Button>
      </Form.Item>
    </Form>
  )
};

const WrappedAddWalletFrom = Form.create({ name: "add_wallet" })(AddWalletFrom);

export default WrappedAddWalletFrom;
