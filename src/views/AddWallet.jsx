import React from "react";
import { withRouter } from 'react-router-dom';

import { addWallet } from "../api";

import { message } from "antd";

import WrappedAddWalletFrom from "../components/AddWalletForm";

const AddWalletPage = (props) => {

  const handlerSubmit = async e => {
    e.preventDefault();
    const walletAddress = e.target[0].value;

    const data = {
      walletAddress
    };

    try {
      const response = await addWallet(data);
      if (response.status !== 201) {
        throw new Error();
      }
      message.success("Wallet has been added!");
    } catch (e) {
      message.error("Error while adding message");
      console.error(e);
    }

    props.history.push("/");
  };

  return (
    <WrappedAddWalletFrom handler={handlerSubmit}/>
  )
};


export default withRouter(AddWalletPage);
