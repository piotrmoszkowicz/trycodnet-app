import React from "react";
import { Link } from "react-router-dom";

import { List } from "antd";

const WalletListItem = ({ item }) => (
  <List.Item actions={[<Link to={"/details/" + item.id} >details</Link>]}>
    {item.address}
  </List.Item>
);

export default WalletListItem;
