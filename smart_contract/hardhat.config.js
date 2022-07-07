// https://eth-ropsten.alchemyapi.io/v2/w1BXIxUm7jNw8Qq61l60IbIn39L-4TMg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/w1BXIxUm7jNw8Qq61l60IbIn39L-4TMg',
      accounts: ['f02ae9ba7e056ea60b7935bec56f35cb05d2777090603a2444e07388dadc9690']
    }
  }
}