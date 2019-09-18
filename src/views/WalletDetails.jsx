import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { getWallet } from "../api";

import { Statistic, Row, Col, List } from "antd";
import TransactionListItem from "../components/TransactionListItem";

const WalletDetailsPage = ({ match }) => {
  const [wallet, setWallet] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const wallet = await getWallet(parseInt(match.params.id, 10));
        console.log(wallet);
        setWallet(wallet.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return wallet ? (
    <Row gutter={16}>
      <Col span={6}>
        <Statistic title="Wallet address" value={wallet.address} />
      </Col>
      <Col span={18}>
        <List
          size="large"
          bordered
          grid={{ gutter: 16, column: 1 }}
          dataSource={wallet.blockchainTransactions}
          renderItem={transaction => (<TransactionListItem item={transaction} />)}
        />
      </Col>
    </Row>
  ) : <div>Loading...</div>
};

export default withRouter(WalletDetailsPage);
