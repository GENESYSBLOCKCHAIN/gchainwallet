<template>
  <the-wrapper-wallet>
    <template #leftColItem1>
      <module-contract-deploy />
    </template>
  </the-wrapper-wallet>
</template>

<script>
import TheWrapperWallet from '@/core/components/TheWrapperWallet';
// import ModuleSwapRates from '@/modules/swap/ModuleSwapRates.vue';
import ModuleContractDeploy from '@/modules/contract/ModuleContractDeploy.vue';

export default {
  name: 'TheDeployContractLayout',
  components: {
    TheWrapperWallet,
    // ModuleSwapRates,
    ModuleContractDeploy
  }
};
</script>

<style lang="scss"></style>
