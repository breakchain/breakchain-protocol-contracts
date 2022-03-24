require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
const {
  MAINNET_PRIVATE_KEY,
  TESTNET_PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  RINKEBY_ALCHEMY_API,
} = process.env;

module.exports = {
  solidity: "0.7.5",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    opera: {
      chainId: 250,
      url: "https://rpc.ftm.tools",
      accounts: [
        "0x4761422a3b72adc4021f2bc78fb51fb230b173a07e342538f299826a37df23e0",
      ]
    },
    rinkeby: {
      chainId: 4,
      url: "https://rinkeby.infura.io/v3/",
      accounts: [
        "0x4761422a3b72adc4021f2bc78fb51fb230b173a07e342538f299826a37df23e0",
      ],
    },
    ftmTestnet: {
      chainId: 80001,
      url: "https://rpc-mumbai.matic.today",
      accounts: [
        "0x4761422a3b72adc4021f2bc78fb51fb230b173a07e342538f299826a37df23e0",
      ],
    },
  },
  protocolParameters: {
    '250': {
      // NOTE: Average block time in Ethereum is ~13 seconds and
      // Olympus's treasury's blocksNeededForQueue is 6,000.
      // Fantom's average block time is ~0.9 seconds so I make it
      // 6,000 / 0.9 which is approximately 6,600 blocks.
      blocksNeededForQueue: 6600,
      epochLength: 28800, // seconds
      brick: {
        name: 'fBrick',
        symbol: 'fBRICK',
      },
      sbrick: {
        name: 'Staked fBrick',
        symbol: 'sfBRICK',
      },
      wsbrick: {
        name: 'Wrapped sfBRICK',
        symbol: 'wsfBRICK',
      },
    },
    '4': {
      blocksNeededForQueue: 0,
      epochLength: 28800, // seconds
      wrappedToken: {
        name: 'Wrapped Ether',
        symbol: 'WETH',
      },
      brick: {
        name: 'Brick',
        symbol: 'BRICK',
      },
      sbrick: {
        name: 'Staked Brick',
        symbol: 'sBRICK',
      },
      wsbrick: {
        name: 'Wrapped sBRICK',
        symbol: 'wsBRICK',
      },
    },
    '80001': {
      blocksNeededForQueue: 0,
      epochLength: 28800, // seconds
      wrappedToken: {
        name: 'Wrapped Matic',
        symbol: 'WFTM',
      },
      brick: {
        name: 'XCHAIN',
        symbol: 'XCHAIN',
      },
      sbrick: {
        name: 'Staked XCHAIN',
        symbol: 'sXCHAIN',
      },
      wsbrick: {
        name: 'Wrapped sfXHCAIN',
        symbol: 'wsfXCHAIN',
      },
    },
    '31337': {
      blocksNeededForQueue: 0,
      epochLength: 28800, // seconds
      wrappedToken: {
        name: 'Wrapped Ether',
        symbol: 'WETH',
      },
      brick: {
        name: 'Brick',
        symbol: 'BRICK',
      },
      sbrick: {
        name: 'Staked Brick',
        symbol: 'sBRICK',
      },
      wsbrick: {
        name: 'Wrapped sBRICK',
        symbol: 'wsBRICK',
      },
    },
  },
  contractAddresses: {
    '250': {
      dao: '0x71Aa3467e12E2b562a0E792D831933998490C998',
      frax: '0xaf319E5789945197e365E7f7fbFc56B130523B33',
      wrappedToken: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // WFTM
      priceFeed: '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc',
    },
    '4': {
      dao: '0xA38F4E6718EdCF023a1d032a2193848CB932c8e3', // testnet deployer address
      priceFeed: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
      uniswapV2Factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // Uniswap V2 factory
      uniswapV2Router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap V2 router
      brickFraxUniswapV2Pair: '0x088ce658Db1AB9e8B0BD62d75964Ac8f88f27aeA',
    },
    '80001': {
      dao: '0x4a41c56e952Ac0BAf35212c1a636B3C42f651A28', // testnet deployer address
      priceFeed: '0x007A22900a3B98143368Bd5906f8E17e9867581b',
      uniswapV2Factory: '0x69004509291F4a4021fA169FafdCFc2d92aD02Aa', // SpiritSwap factory
      uniswapV2Router: '0xbdd4e5660839a088573191A9889A262c0Efc0983', // SpiritSwap router
    },
    '31337': {
      dao: '0x71Aa3467e12E2b562a0E792D831933998490C998',
      priceFeed: '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc',
    },
    zero: '0x0000000000000000000000000000000000000000',
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};




