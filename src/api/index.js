import axios from "./axiosWrapper";
import endpoints from "./endpoints";

export function getWallets() {
  return axios.get(endpoints.get.wallets());
}

export function getWallet(id) {
  return axios.get(endpoints.get.wallet(id));
}

export function addWallet(walletObject) {
  return axios.post(endpoints.post.wallet(), walletObject);
}
