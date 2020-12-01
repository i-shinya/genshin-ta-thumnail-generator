<template>
  <div class="home">
    <ThumnailCanvas
      :pick-color1="pickColor1"
      :pick-color2="pickColor2"
      :charactor1="charactor1"
      :charactor2="charactor2"
      :charactor3="charactor3"
      :charactor4="charactor4"
      :content="content"
      :content-text-color="contentTextColor"
      :time-text="timeText"
      :time-text-color="timeTextColor"
    />
    <v-row
      class="text-center"
      align="center"
    >
      <v-col>
        <span style="vertical-align: middle;">背景色選択</span>
      </v-col>
      <v-col>
        <ColorPicker
          v-model="pickColor1"
          label="カラー1"
        />
        <span>
          常に選択
        </span>
      </v-col>
      <v-col>
        <ColorPicker
          v-model="pickColor2"
          label="カラー2"
        />
        <span>
          グラデーション選択時のみ
        </span>
      </v-col>
    </v-row>
    <v-row
      class="text-center"
      align="center"
    >
      <v-col>
        <span>
          キャラ選択
        </span>
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor1" />
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor2" />
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor3" />
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor4" />
      </v-col>
    </v-row>
    <v-row
      class="text-center"
      align="center"
    >
      <v-col>
        <span>
          コンテンツ
        </span>
      </v-col>
      <v-col>
        <SelectContent v-model="content" />
      </v-col>
      <v-col>
        <span>
          文字色
        </span>
      </v-col>
      <v-col>
        <ColorPicker v-model="contentTextColor" />
        <span />
      </v-col>
    </v-row>
    <v-row
      class="text-center"
      align="center"
    >
      <v-col>
        <span>
          タイム
        </span>
      </v-col>
      <v-col>
        <v-text-field
          v-model="timeText"
          label="Main input"
          hide-details="auto"
        />
      </v-col>
      <v-col>
        <span>
          文字色
        </span>
      </v-col>
      <v-col>
        <ColorPicker v-model="timeTextColor" />
        <span />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ThumnailCanvas from "@/components/ThumnailCanvas.vue";
import ColorPicker from '@/components/parts/ColorPicker.vue'
import SelectCharactor, { Charactor } from '@/components/parts/SelectCharactor.vue'
import SelectContent from '@/components/parts/SelectContent.vue'

@Component({
  data() {
    return {
      timeText: '12\'34\'\'56',
      charactor1: { tag: 'amber', ja: 'アンバー', en: 'amber' },
      charactor2: { tag: 'beidou', ja: '北斗', en: 'beidou' },
      charactor3: { tag: 'bennett', ja: 'ベネット', en: 'bennett' },
      charactor4: { tag: 'berbara', ja: 'バーバラ', en: 'berbara' },
      content: { tag: 'spiralAbyss1', ja: '深境螺旋1層', en: 'Spiral Abyss Floor1' },
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
      contentTextColor: {
        alpha: 0.291319580078125,
        hex: "#FFFFFF",
        hexa: "#FFFFFF4A",
        hsla: {
          h: 0.291319580078125,
          s: 224.8597596339792,
          l: 1,
          a: 0
        },
        hsva: {
          h: 0.291319580078125,
          s: 224.8597596339792,
          v: 0,
          a: 1
        },
        hue: 224.8597596339792,
        rgba: {
          r: 0.291319580078125,
          g: 255,
          b: 255,
          a: 255
        }
      },
      timeTextColor: {
        alpha: 1,
        hex: "#F4FF00",
        hexa: "#F4FF00FF",
        hsla: {
          h: 1,
          s: 62.63786076736754,
          l: 0.5,
          a: 1
        },
        hsva: {
          h: 1,
          s: 62.63786076736754,
          v: 1,
          a: 1
        },
        hue: 62.63786076736754,
        rgba: {
          r: 1,
          g: 0,
          b: 255,
          a: 244
        }
      },
    }
  },
  components: {
    ColorPicker,
    ThumnailCanvas,
    SelectCharactor,
    SelectContent
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1080px;
  margin: 0 auto;
}
</style>