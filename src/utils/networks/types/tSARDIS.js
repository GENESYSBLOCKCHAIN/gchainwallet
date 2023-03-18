import tokens from '@/_generated/tokens/tokens-gsys-testnet.json';
import sardis from '@/assets/images/networks/sardis.svg';

export default {
  name: 'tGSYS',
  name_long: 'Genesys Testnet',
  homePage: 'https://testnet-gchainexplorer.genesys.network/',
  blockExplorerTX:
    'https://testnet-gchainexplorer.genesys.network/tx/[[txHash]]',
  blockExplorerAddr:
    'https://testnet-gchainexplorer.genesys.network/address/[[address]]',
  chainID: 42440,
  tokens: tokens,
  contracts: [],
  icon: sardis,
  currencyName: 'tGSYS',
  isTestNetwork: true,
  isEthVMSupported: {
    supported: false,
    url: null,
    websocket: null
  },
  gasPriceMultiplier: 1,
  canBuy: false,
  coingeckoID: null
};
