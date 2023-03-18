<template>
  <app-user-msg-block
    v-if="toTokenType && toTokenType.toLowerCase() == 'bitcoin'"
    class="mt-5"
    :message="message"
  >
    <div class="border-top mt-3">
      <v-expansion-panels flat class="expansion-panels--remove-paddings">
        <v-expansion-panel>
          <v-expansion-panel-header color="greyLight" class="textMedium--text">
            How can I get wrapped Bitcoin?
          </v-expansion-panel-header>
          <v-expansion-panel-content color="greyLight" class="pa-0">
            <div class="textMedium--text mb-2">
              When you swap to Bitcoin, it is moved to the Bitcoin blockchain, &
              requires a Bitcoin wallet. In order to keep Bitcoin in
              GenesysWallet, you can swap to wrapped Bitcoin instead. Wrapped
              Bitcoin is an The GSYS Chain token, with a value approximately equal to
              BTC. Wrapped Bitcoins can be stored in Gwallet, and can be used as any
              any other The GSYS Chain asset: you can swap it to other tokens, use it
              collateral in DeFi apps, etc. There are multiple kinds of wrapped
              wrapped Bitcoins, but they roughly do the same thing.
              <a
                href="https://help.myetherwallet.com/en/articles/5461528-move-your-btc-to-the-ethereum-blockchain-with-mew-swap"
                target="_blank"
              >
                Learn more about Wrapped Bitcoin.
              </a>
            </div>
            <v-row class="mt-6">
              <v-col cols="12" md="4">
                <mew-button
                  btn-size="small"
                  btn-style="outline"
                  title="Swap to renBTC"
                  :has-full-width="true"
                />
              </v-col>
              <v-col cols="12" md="4">
                <mew-button
                  btn-size="small"
                  btn-style="outline"
                  title="Swap to wBTC"
                  :has-full-width="true"
                />
              </v-col>
              <v-col cols="12" md="4">
                <mew-button
                  btn-size="small"
                  btn-style="outline"
                  title="Swap to PBTC"
                  :has-full-width="true"
                />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </app-user-msg-block>
</template>

<script>
import AppUserMsgBlock from '@/core/components/AppUserMsgBlock';

export default {
  components: {
    AppUserMsgBlock
  },
  props: {
    message: {
      type: Object,
      default: () => {
        return {};
      }
    },
    toTokenType: {
      type: String,
      default: ''
    }
  }
};
</script>

<style></style>
