import tokens from '@/_generated/tokens/tokens-gsys.json';
import sardis from '@/assets/images/networks/sardis.svg';

export default {
  name: 'GSYS',
  name_long: 'Genesys',
  homePage: 'https://gchainexplorer.genesys.network/',
  blockExplorerTX: 'https://gchainexplorer.genesys.network/tx/[[txHash]]',
  blockExplorerAddr:
    'https://gchainexplorer.genesys.network/address/[[address]]',
  chainID: 16507,
  tokens: tokens,
  contracts: [],
  icon: sardis,
  currencyName: 'GSYS',
  isTestNetwork: false,
  isEthVMSupported: {
    supported: false,
    url: null,
    websocket: null
  },
  gasPriceMultiplier: 1,
  canBuy: false,
  coingeckoID: null
};
