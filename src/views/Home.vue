<template>
  <div class="home">
    <ThumnailCanvas
      :pick-color1="pickColor1"
      :pick-color2="pickColor2"
      :charactor1="charactor1"
      :charactor2="charactor2"
      :charactor3="charactor3"
      :charactor4="charactor4"
    />
    <v-row class="text-center" align="center">
      <v-col class="mb-4">
        <span style="vertical-align: middle;">背景色選択</span>
      </v-col>
      <v-col class="mb-4">
        <ColorPicker v-model="pickColor1" label="カラー1"/>
        <span>
          常に選択
        </span>
      </v-col>
      <v-col class="mb-4">
        <ColorPicker v-model="pickColor2" label="カラー2"/>
        <span>
          グラデーション選択時のみ
        </span>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4">
        <span>
          キャラ選択
        </span>
      </v-col>
      <v-col class="mb-4">
        <SelectCharactor v-model="charactor1"/>
      </v-col>
      <v-col class="mb-4">
        <SelectCharactor v-model="charactor2"/>
      </v-col>
      <v-col class="mb-4">
        <SelectCharactor v-model="charactor3"/>
      </v-col>
      <v-col class="mb-4">
        <SelectCharactor v-model="charactor4"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator"
import ThumnailCanvas from "@/components/ThumnailCanvas.vue";
import ColorPicker from '@/components/parts/ColorPicker.vue'
import SelectCharactor, { Charactor } from '@/components/parts/SelectCharactor.vue'

@Component({
  data() {
    return {
      charactor1: null,
      charactor2: null,
      charactor3: null,
      charactor4: null,
      // デフォルトカラー定義
      pickColor1: {
        alpha: 0.291319580078125,
        hex: "#051851",
        hexa: "#0518514A",
        hsla: {
          h: 0.291319580078125,
          s: 224.8597596339792,
          l: 0.16923935226982253,
          a: 0.8789143451566647
        },
        hsva: {
          h: 0.291319580078125,
          s: 224.8597596339792,
          v: 0.9355555216471354,
          a: 0.3179862467447917
        },
        hue: 224.8597596339792,
        rgba: {
          r: 0.291319580078125,
          g: 81,
          b: 24,
          a: 5
        }
      },
      pickColor2: {
        alpha: 1,
        hex: "#4A4A4A",
        hexa: "#4A4A4AFF",
        hsla: {
          h: 1,
          s: 0,
          l: 0.291319580078125,
          a: 0
        },
        hsva: {
          h: 1,
          s: 0,
          v: 0,
          a: 0.291319580078125
        },
        hue: 0,
        rgba: {
          r: 1,
          g: 74,
          b: 74,
          a: 74
        }
      },
    }
  },
  components: {
    ColorPicker,
    ThumnailCanvas,
    SelectCharactor
  }
})
export default class Home extends Vue {}
</script>
