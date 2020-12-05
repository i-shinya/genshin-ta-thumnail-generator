<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  font-family: "Noto Serif JP", serif;
}

body {
  font-family: "Noto Serif JP", serif;
}
</style>