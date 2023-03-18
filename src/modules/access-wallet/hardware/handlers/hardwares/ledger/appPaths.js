import { SARDIS } from '@/utils/networks/types';
import {
  // ledgerEthereum,
  // ledgerLiveEthereum,
  // ledgerEthereumClassic,
  // ledgerLiveEthereumClassic,
  ropsten
  // goChain
} from '@/modules/access-wallet/hardware/handlers/configs/configPaths';
const appList = [
  // {
  //   network: ETH,
  //   paths: [ledgerEthereum, ledgerLiveEthereum]
  // },
  // {
  //   network: ETC,
  //   paths: [ledgerEthereumClassic, ledgerLiveEthereumClassic]
  // },
  {
    network: SARDIS,
    paths: [ropsten]
  }
  // {
  //   network: GO,
  //   paths: [goChain]
  // }
];
export default appList;
