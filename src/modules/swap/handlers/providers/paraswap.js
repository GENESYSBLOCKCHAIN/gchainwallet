import MEWPClass from './mew-provider-class';
import { SARDIS } from '@/utils/networks/types';
class ParaSwap {
  constructor(web3, chain) {
    return new MEWPClass(
      MEWPClass.supportedDexes.PARASWAP,
      web3,
      [SARDIS.name],
      chain
    );
  }
}
export default ParaSwap;
