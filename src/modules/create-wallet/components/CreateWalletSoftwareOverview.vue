<template>
  <div class="mew-overview pt-5">
    <div style="max-width: 4000px; width: 100%" class="mx-auto">
      <!--
      =====================================================================================
        Mnemonic Phrase Button
      =====================================================================================
      -->
      <div class="mb-5">
        <mew-button
          has-full-width
          color-theme="greyMedium"
          btn-style="outline"
          style="height: 160px"
          @click.native="selectWalletType(walletTypes.MNEMONIC)"
        >
          <div
            class="text-left d-flex align-center justify-space-between px-2"
            style="width: 100%"
          >
            <div>
              <div class="mew-heading-2 textDark--text mb-2">
                Mnemonic Phrase
              </div>
            </div>
            <img
              width="80"
              class="mx-4 d-none d-sm-block"
              src="@/assets/images/icons/icon-mnemonic.svg"
            />
          </div>
        </mew-button>
      </div>
    </div>
  </div>
</template>

<script>
import WALLET_TYPES from '@/modules/access-wallet/common/walletTypes';
export default {
  name: 'CreateWalletSoftwareOverview',
  data: () => ({
    walletTypes: WALLET_TYPES
    // linkToLearnMore: {
    //   url: 'https://help.myetherwallet.com/en/articles/5377921-mew-says-not-recommended-when-i-access-my-wallet-why',
    //   title: 'Learn more'
    // }
  }),

  methods: {
    /**
     * Emit wallet type creation.
     * @type - is part of WALLET_TYPES
     * function is void
     */
    selectWalletType(type) {
      this.$emit('typeSelect', type);
    }
  }
};
</script>

<style lang="scss">
.mew-overview {
  max-width: 400px;
}
</style>
