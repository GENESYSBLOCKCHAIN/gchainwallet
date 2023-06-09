import { ROUTES_WALLET } from '@/core/configs/configRoutes';
import { SARDIS } from '@/utils/networks/types';
import layout from './TheStakedLayout';
import { stakedRouterGuard } from '@/core/router/helpers';
export default {
  title: 'Stake on Loops2',
  subtitle: 'Stake your GSYS on The GSYS Chain 2.0 and watch your rewards grow',
  tag: '#DeFi',
  rightIconType: 'mew',
  rightIcon: 'stake',
  name: ROUTES_WALLET.STAKED.NAME,
  path: ROUTES_WALLET.STAKED.PATH,
  networks: [SARDIS],
  layout,
  release: '07/09/2021',
  meta: {
    noAuth: false
  },
  children: [
    {
      path: ROUTES_WALLET.STAKED_1.PATH,
      name: ROUTES_WALLET.STAKED_1.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_2.PATH,
      name: ROUTES_WALLET.STAKED_2.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_3.PATH,
      name: ROUTES_WALLET.STAKED_3.NAME,
      beforeEnter: stakedRouterGuard
    },
    {
      path: ROUTES_WALLET.STAKED_4.PATH,
      name: ROUTES_WALLET.STAKED_4.NAME,
      beforeEnter: stakedRouterGuard
    }
  ]
};
