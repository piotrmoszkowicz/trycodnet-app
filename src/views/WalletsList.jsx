import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { List } from "antd";

import { getWallets } from "../api";

import WalletListItem from "../components/WalletListItem";

const WalletListPage = () => {
  const [wallets, setWallets] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const wallets = await getWallets();
        setWallets(wallets.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return wallets ? (
    <div>
      <h3 style={{ margin: '16px 0' }}>Tracked wallets</h3>
      <List
        size="large"
        bordered
        dataSource={wallets}
        renderItem={wallet => (<WalletListItem item={wallet} />)}
      />
    </div>
  ) : <div>Loading...</div>
};

export default withRouter(WalletListPage);
