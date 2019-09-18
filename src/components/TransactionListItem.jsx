import React from "react";

import { List, Row, Col } from "antd";

const TransactionListItem = ({ item }) => {
  const date = new Date(item.date);

  return (
    <List.Item>
      <Row>
        <Col span={2}>
          TransactionId: <br/> {item.transactionId}
        </Col>
        <Col span={6}>
          Input Addresses: <br/>
          {item.addressesInput.reduce((acc, address) => acc + address + ",", "")}
        </Col>
        <Col span={6}>
          Output Addresses: <br/>
          {item.addressesOutput.reduce((acc, address) => acc + address + ", ", "")}
        </Col>
        <Col span={2}>
          Amount: <br/>
          {(item.transactionType) ? "+" : "-"}{item.amount}
        </Col>
        <Col span={4}>
          Date: <br/>
          {date.toLocaleDateString("pl")} {date.toLocaleTimeString("pl")}
        </Col>
        <Col span={4}>
          Number of Confirmations: <br/>
          { item.numOfConfirmations }
        </Col>
      </Row>
    </List.Item>
  )
};

export default TransactionListItem;
