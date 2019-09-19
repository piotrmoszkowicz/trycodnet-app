import React from "react";

import { List, Row, Col } from "antd";

const TransactionListItem = ({ item }) => {
  const date = new Date(item.date);

  return (
    <List.Item>
      <Row>
        <Col span={24}>
          TransactionId: <br/> {item.transactionId}
        </Col>
      </Row>
      <Row>
        <Col span={7}>
          Input Addresses: <br/>
          {item.addressesInput.map(address => (
            <p>{address}</p>
          ))}
        </Col>
        <Col span={7}>
          Output Addresses: <br/>
          {item.addressesOutput.map(address => (
            <p>{address}</p>
          ))}
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
