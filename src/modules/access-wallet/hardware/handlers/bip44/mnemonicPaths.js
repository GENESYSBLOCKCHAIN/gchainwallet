import {
  ethereum,
  ethereumClassic,
  ropsten,
  singularDTV,
  expanse,
  ubiq,
  ellaism,
  etherGem,
  callisto,
  ethereumSocial,
  musicoin,
  goChain,
  eosClassic,
  akroma,
  etherSocialNetwork,
  pirl,
  ether1,
  atheios,
  tomoChain,
  mixBlockchain,
  iolite,
  rskMainnet,
  rskTestnet,
  thundercore,
  solidum,
  metadium,
  dexon,
  lightstreamsNetwork,
  mintmeComCoin,
  ethercore,
  ledgerEthereum,
  ledgerLiveEthereum
} from '../configs/configPaths';
const renamedLedger = Object.assign({}, ledgerEthereum);
renamedLedger.label = 'Ledger';

export default [
  ethereum,
  ethereumClassic,
  ropsten,
  renamedLedger,
  ledgerLiveEthereum,
  singularDTV,
  expanse,
  ubiq,
  ellaism,
  etherGem,
  callisto,
  ethereumSocial,
  musicoin,
  goChain,
  eosClassic,
  akroma,
  etherSocialNetwork,
  pirl,
  ether1,
  atheios,
  tomoChain,
  mixBlockchain,
  iolite,
  rskMainnet,
  rskTestnet,
  thundercore,
  solidum,
  metadium,
  dexon,
  lightstreamsNetwork,
  mintmeComCoin,
  ethercore
];
