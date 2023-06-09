import Configs from '../configs';
import { toWei } from 'web3-utils';
import nodeList from '@/utils/networks';
import { gasPriceTypes } from '@/core/helpers/gasPriceHelper';
const defaultNetwork = nodeList['GSYS'].find(item => {
  return item.service === 'bankcex.com-ws';
});

const state = {
  localStore: true,
  consentToTrack: false,
  displayedTrackingPopup: false,
  Errors: {},
  online: true,
  linkQuery: {},
  locale: 'en_US',
  stateVersion: Configs.VERSION.global,
  gasLimitWarning: 100,
  baseGasPrice: toWei('41', 'gwei'),
  gasPriceType: gasPriceTypes.ECONOMY,
  currentNetwork: defaultNetwork
    ? Object.assign({}, defaultNetwork)
    : Object.assign({}, nodeList['GSYS'][0]),
  preferredCurrency: 'USD',
  localContracts: {},
  eip1559: {
    baseFeePerGas: '0',
    maxPriorityFeePerGas: '0'
  },
  showedBanner: false,
  showWalletPromo: true,
  promoOver: false,
  testing: false
};
state.currentNetwork.type = {
  name: state.currentNetwork.type.name
};

export default state;
