import MEWPClass from './mew-provider-class';
import { SARDIS } from '@/utils/networks/types';
class OneInch {
  constructor(web3, chain) {
    return new MEWPClass(
      MEWPClass.supportedDexes.ONE_INCH,
      web3,
      [SARDIS.name],
      chain
    );
  }
}
export default OneInch;
