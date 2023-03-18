<template>
  <div class="expandHeader">
    <v-container>
      <!--
    =====================================================================================
        Layout Title
    =====================================================================================
    -->
      <the-layout-header
        :title="$t('home.create-wallet.title')"
        :subtitle-line-one="$t('home.create-wallet.subtitle-one')"
        :subtitle-line-two="$t('home.create-wallet.subtitle-two')"
        :route-obj="titleRoute"
        has-link
      />
      <!--
    =====================================================================================
        Options
    =====================================================================================
    -->
      <div style="max-width: 400px" class="mx-auto">
        <mew-button
          class="mb-5"
          color-theme="white"
          style="height: 160px; min-width: 400px"
          @click.native="openSoftwareModule"
        >
          <div class="px-2 textDark--text text-left d-flex align-center">
            <div>
              <div class="mb-2 d-flex align-center">
                <div class="mew-heading-2">Software</div>
                <v-icon dense color="greenPrimary" class="ml-1">
                  mdi-shield-check
                </v-icon>
              </div>
              <!-- <div class="break-word">Mnemonic phrase, Private key</div> -->
            </div>
          </div>
        </mew-button>
      </div>
    </v-container>
    <div class="spacer-y-medium" />
    <mew-toast
      ref="toast"
      can-close
      :link-obj="toastLink"
      text="Did you know? Hardware wallets offer the highest security for accessing your crypto."
      toast-type="info"
    />
    <!--
    =====================================================================================
      Create Wallet with Software Overlay - activates on Create Software Button click
    =====================================================================================
    -->
    <module-create-wallet-software
      :open="showSoftwareModule"
      :wallet-type="type"
      :close="closeSoftwareModule"
    />
  </div>
</template>

<script>
import ModuleCreateWalletSoftware from '@/modules/create-wallet/ModuleCreateWalletSoftware';
import { Toast, ERROR } from '@/modules/toast/handler/handlerToast';
import TheLayoutHeader from '../components-default/TheLayoutHeader';
import { ROUTES_HOME } from '@/core/configs/configRoutes';

export default {
  name: 'TheCreateWalletLayout',
  components: {
    ModuleCreateWalletSoftware,
    TheLayoutHeader
  },
  props: {
    showSoftwareModule: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'overview'
    }
  },
  data: () => ({
    toastLink: {
      title: 'Buy a hardware wallet',
      url: ''
    },
    titleRoute: {
      text: 'Access Wallet',
      routeName: 'AccessWallet'
    }
  }),
  methods: {
    openSoftwareModule() {
      try {
        this.$router.push({
          name: ROUTES_HOME.CREATE_WALLET.NAME,
          params: { overlay: 'software' },
          query: { type: 'overview' }
        });
      } catch (e) {
        Toast(e, {}, ERROR);
      }
    },
    closeSoftwareModule() {
      try {
        this.$router.push({
          name: ROUTES_HOME.HOME.NAME
        });
      } catch (e) {
        Toast(e, {}, ERROR);
      }
    }
  }
};
</script>

<style lang="scss"></style>
