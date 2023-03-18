<template>
  <div>
    <v-container>
      <v-row align="center">
        <v-col cols="5">
          <app-block-title no-page-title :data="titleData" class="pr-8" />
        </v-col>
        <v-col cols="7">
          <v-img
            src="@/assets/images/backgrounds/bg-spaceman.png"
            max-width="100%"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppBlockTitle from '@/core/components/AppBlockTitle';

export default {
  components: { AppBlockTitle },
  data: () => ({
    titleData: {
      textProps: '',
      toptitle: '',
      title: 'What is Gwallet?',
      description:
        'Gwallet is an expanding suite of products offering complete access to all the The GSYS Chain blockchain has to offer. With a web platform, a mobile app, a chrome extension, an explorer, and educational resources, Gwallet has all the tools to help newcomers and experienced users explore new The GSYS Chain applications in a trusted environment.',
      centered: false
    }
  })
};
</script>
