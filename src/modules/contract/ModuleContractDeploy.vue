<template>
  <mew-module
    class="d-flex flex-grow-1 pt-6"
    :has-elevation="true"
    :has-indicator="true"
    title="Deploy contract"
  >
    <template #moduleBody>
      <div>
        <!-- <v-textarea
          v-model="byteCode"
          outlined
          label="Bytecode"
          placeholder=" "
          :rules="[
            value => {
              return isValidByteCodeInput(value);
            }
          ]"
        />
        <v-textarea
          v-model="abiInterface"
          outlined
          name="input-7-4"
          label="ABI/JSON Interface"
          value=""
          placeholder=" "
          :rules="[
            value => {
              return isValidABI(value);
            }
          ]"
        ></v-textarea> -->
        <!-- <mew-input
          v-model="contractName"
          label="Contract name"
          placeholder=" "
        /> -->
        <mew-input
          v-model="nameoftoken"
          label="Name of token"
          placeholder=" "
        />
        <mew-input v-model="tokensymbol" label="Token symbol" placeholder=" " />
        <mew-input v-model="totalsupply" label="Total supply" placeholder=" " />
        <!-- <mew-input v-model="burnable" label="Burnable" placeholder=" " /> -->
        <v-select
          v-model="burnable"
          label="Burnable"
          :items="listBurnable"
          outlined
        />
        <mew-input v-model="decimals" label="Decimals" placeholder=" " />
        <mew-input
          v-model="purposeoftoken"
          label="Purpose of token"
          placeholder=" "
        />
        <mew-input v-model="yourname" label="Your name" placeholder=" " />
        <mew-input v-model="youremail" label="Your email" placeholder=" " />
        <div v-show="constructorInputs.length">
          <div class="mb-10">Constructor Inputs</div>
          <div
            v-for="(input, idx) in constructorInputs"
            :key="input.name + idx"
            class="input-item-container"
          >
            <mew-input
              v-if="getType(input.type).type !== 'radio'"
              v-model="input.value"
              :label="`${input.name} (${input.type})`"
              class="non-bool-input"
              :rules="[
                value => {
                  return isValidInput(value, getType(input.type).solidityType);
                }
              ]"
              @input="valueInput(idx, $event)"
            />
            <div
              v-if="getType(input.type).type === 'radio'"
              class="bool-input-container"
            >
              <div class="bool-items">
                <mew-checkbox
                  v-model="input.value"
                  :value="true"
                  :label="`${input.name} (${input.type})`"
                  type="radio"
                  checked
                />
              </div>
            </div>
          </div>
          <mew-input
            v-if="isContructorPayable"
            v-model="ethAmount"
            :rules="[
              value => {
                return isETHValue(value);
              }
            ]"
            :label="`value (ETH)`"
            class="non-bool-input"
          />
        </div>
        <div class="text-center mt-3">
          <mew-button
            title="Submit"
            :has-full-width="false"
            btn-size="xlarge"
            :disabled="!canDeploy"
            @click.native="sendEmail"
          />
        </div>
        <div class="text-center mt-4">
          <mew-button
            title="Clear all"
            :has-full-width="false"
            btn-size="small"
            btn-style="transparent"
            @click.native="resetDefaults()"
          />
        </div>
        <!-- <v-row v-if="isSuccess" class="mt-0">
          <v-col cols="12" class="pb-md-16 mb-md-16">
            <mew-alert
              title="Success"
              description="Submit Successfull!"
              theme="info"
              has-white-background
              hide-close-icon
            />
          </v-col>
        </v-row> -->
      </div>
    </template>
  </mew-module>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';
// import sanitizeHex from '@/core/helpers/sanitizeHex';
// import validateHexString from '@/core/helpers/validateHexString';
import {
  parseJSON,
  parseABI,
  getType as getInputType,
  isContractArgValid
} from './handlers/common';
// import { stringToArray } from '@/core/helpers/common';
import { toWei } from 'web3-utils';
// import { toWei, toBN, toHex } from 'web3-utils';
import axios from 'axios';
import { SUCCESS, Toast, ERROR } from '@/modules/toast/handler/handlerToast';

export default {
  name: 'ModuleContractDeploy',
  data() {
    return {
      nameoftoken: '',
      tokensymbol: '',
      totalsupply: '',
      burnable: 'Yes',
      decimals: '',
      purposeoftoken: '',
      yourname: '',
      youremail: '',
      byteCode: '',
      byteCodeHex: '',
      abiInterface: '',
      inputsValid: false,
      ethAmount: '0',
      listBurnable: ['Yes', 'No']
    };
  },
  computed: {
    ...mapState('wallet', ['address', 'web3']),
    ...mapState('global', ['currentNetwork']),
    ...mapGetters('global', ['gasPrice']),
    canDeploy() {
      return (
        // this.byteCodeHex !== '' &&
        // this.isValidByteCodeInput(this.byteCodeHex) &&
        // this.isValidABI(this.abiInterface) &&
        // (this.getConstructor(JSON.parse(this.abiInterface)).inputs.length ===
        //   0 ||
        //   this.inputsValid) &&
        // (this.isContructorPayable === false || this.isETHValue(this.ethAmount))
        this.nameoftoken !== '' ||
        this.tokensymbol !== '' ||
        this.totalsupply !== '' ||
        this.burnable !== '' ||
        this.decimals !== '' ||
        this.purposeoftoken !== '' ||
        this.yourname !== '' ||
        this.youremail !== ''
      );
    },
    constructorInputs() {
      if (this.isValidABI(this.abiInterface)) {
        return this.getConstructor(JSON.parse(this.abiInterface)).inputs;
      }
      return [];
    },
    isContructorPayable() {
      if (this.isValidABI(this.abiInterface)) {
        return (
          this.getConstructor(JSON.parse(this.abiInterface)).stateMutability ===
          'payable'
        );
      }
      return false;
    }
  },
  watch: {
    abiInterface() {
      this.constructorInputs.forEach((i, idx) => {
        this.constructorInputs[idx].value = '';
        Vue.set(this.constructorInputs, idx, this.constructorInputs[idx]);
      });
    }
  },
  methods: {
    ...mapActions('global', ['addLocalContract']),
    resetDefaults() {
      this.contractName = '';
      this.nameoftoken = '';
      this.tokensymbol = '';
      this.totalsupply = '';
      this.burnable = '';
      this.decimals = '';
      this.purposeoftoken = '';
      this.yourname = '';
      this.youremail = '';
      this.byteCode = '';
      this.byteCodeHex = '';
      this.abiInterface = '';
      this.inputsValid = false;
      this.ethAmount = '0';
    },
    sendEmail() {
      const message = `<div>Hello<br><br>Please help me to create a contract with the following information:<br><br>Name of token: ${this.nameoftoken}<br>Token symbol: ${this.tokensymbol}<br>Total supply: ${this.totalsupply}<br>Burnable: ${this.burnable}<br>Decimals: ${this.decimals}<br>Purpose of token: ${this.purposeoftoken}<br>Name: ${this.yourname}<br>Email: ${this.youremail}<br><br>Thanks for your support.<br>Regards,</div>`;
      const title = 'Request to create a contract on My Loop Wallet';
      const form = new FormData();
      form.append('email_body', message);
      form.append('email_subject', title);
      // return;
      axios({
        method: 'post',
        url: 'https://kyc.sardisnetwork.com/index.php?route=api/wallet/sendEmail',
        // url: 'http://192.168.1.34/sardis_kyc/index.php?route=api/wallet/sendEmail',
        data: form,
        headers: {
          Authorization:
            '9SBUCVDXFYGZJ3K4M6P7Q8RATBUCWEXFYH2J3K5N6P7R9SATCVDWEYGZH2'
          // Authorization: 'f7dd72801c14473fba4bf89ed35a25e2910'
        }
      })
        .then(response => {
          if (response.data.success == false) {
            Toast(response.data.error_message, {}, ERROR);
          } else {
            Toast('Submit Successfull!', {}, SUCCESS);
          }
        })
        .catch(error => Toast(error, {}, ERROR));
    },
    // isValidByteCodeInput(val) {
    //   if (validateHexString(val)) {
    //     this.byteCodeHex = sanitizeHex(val);
    //     return true;
    //   }
    //   if (validateHexString('0x' + val)) {
    //     this.byteCodeHex = '0x' + val;
    //     return true;
    //   }
    //   try {
    //     const parsed = JSON.parse(val);
    //     if (validateHexString('0x' + parsed.object)) {
    //       this.byteCodeHex = '0x' + parsed.object;
    //       return true;
    //     }
    //     return false;
    //   } catch (e) {
    //     return false;
    //   }
    // },
    isValidABI(val) {
      return !!parseJSON(val) && !!parseABI(parseJSON(val));
    },
    getConstructor(abi) {
      for (const method of abi) {
        if (method.type === 'constructor') return method;
      }
      return { inputs: [] };
    },
    // deploy() {
    //   const contract = new this.web3.eth.Contract(
    //     JSON.parse(this.abiInterface)
    //   );
    //   const params = [];
    //   let details = {};
    //   for (const _input of this.constructorInputs) {
    //     if (_input.type.includes('[]') && _input.value)
    //       params.push(stringToArray(_input.value));
    //     else params.push(_input.value);
    //   }
    //   contract
    //     .deploy({
    //       data: this.byteCodeHex,
    //       arguments: params
    //     })
    //     .send({
    //       from: this.address,
    //       value: this.isContructorPayable
    //         ? toHex(toBN(toWei(this.ethAmount)))
    //         : '0x00'
    //     })
    //     .on('transactionHash', () => {
    //       details = {
    //         name: this.contractName,
    //         abi: JSON.stringify(JSON.parse(this.abiInterface))
    //       };
    //       this.resetDefaults();
    //     })
    //     .on('receipt', result => {
    //       details.address = result.contractAddress;
    //       if (details.name === '') {
    //         details.name = result.contractAddress;
    //       }
    //       this.addLocalContract(details);
    //     });
    // },
    valueInput(idx, value) {
      if (idx && value) {
        this.constructorInputs[idx].value = value;
      }
      this.inputsValid = true;
      for (const _input of this.constructorInputs) {
        if (
          !this.isValidInput(
            _input.value,
            this.getType(_input.type).solidityType
          )
        )
          this.inputsValid = false;
      }
    },
    isETHValue(val) {
      try {
        toWei(val, 'ether');
        return true;
      } catch (e) {
        return false;
      }
    },
    getType(type) {
      return getInputType(type);
    },
    isValidInput(value, sType) {
      return isContractArgValid(value, sType);
    }
  }
};
</script>
