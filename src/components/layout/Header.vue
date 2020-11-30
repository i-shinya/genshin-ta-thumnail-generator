<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/genshin_logo.png"
        transition="scale-transition"
        width="64"
      />

      <span class="header-text">原神サムネイルジェネレーター</span>
      <!-- <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      /> -->
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/i-shinya/genshin-ta-thumnail-generator"
      target="_blank"
      text
    >
      <span class="mr-2">To github</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  name: 'Header',
  data() {
    return {
      color: null
    }
  }
})
export default class Header extends Vue {}
</script>
