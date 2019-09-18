import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  Layout,
  Menu
} from "antd"

import AddWalletPage from "./views/AddWallet";
import WalletDetailsPage from "./views/WalletDetails";
import WalletListPage from "./views/WalletsList";

const { Header, Content, Footer } = Layout;


const App = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key={1}>List all tracked wallets</Menu.Item>
        <Menu.Item key={2}>Add new wallet to tracker</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Router>
        <Route path='/' exact component={WalletListPage} />
        <Route path='/details/:id' component={WalletDetailsPage} />
        <Route path='/add-wallet' component={AddWalletPage} />
      </Router>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Created by Piotr Moszkowicz
    </Footer>
  </Layout>
);

export default App;
