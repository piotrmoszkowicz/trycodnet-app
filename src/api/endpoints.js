export default {
  get: {
    wallets: () => `/wallets`,
    wallet: id => `/wallets/${id}`
  },
  post: {
    wallet: () => `/wallets`
  }
}
