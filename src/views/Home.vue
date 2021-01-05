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
      :regulation="regulation"
      :regulation-text-color="regulationTextColor"
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
        <div>
          キャラ選択
        </div>
        <div>
          (パーティ1)
        </div>
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
      v-show="content&&content.numberOfParty!=1"
    >
      <v-col>
        <div>
          キャラ選択
        </div>
        <div>
          (パーティ2)
        </div>
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor5" />
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor6" />
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor7" />
      </v-col>
      <v-col>
        <SelectCharactor v-model="charactor8" />
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
          レギュレーション
        </span>
      </v-col>
      <v-col>
        <SelectRegulation v-model="regulation" />
      </v-col>
      <v-col>
        <span>
          文字色
        </span>
      </v-col>
      <v-col>
        <ColorPicker v-model="regulationTextColor" />
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
import { Component, Vue } from 'vue-property-decorator'
import ThumnailCanvas from '@/components/ThumnailCanvas.vue';
import ColorPicker from '@/components/parts/ColorPicker.vue'
import SelectCharactor from '@/components/parts/SelectCharactor.vue'
import SelectContent from '@/components/parts/SelectContent.vue'
import SelectRegulation from '@/components/parts/SelectRegulation.vue'

@Component({
  data() {
    return {
      timeText: '1min 23sec',
      charactor1: { tag: 'amber', ja: 'アンバー', en: 'amber' },
      charactor2: { tag: 'beidou', ja: '北斗', en: 'beidou' },
      charactor3: { tag: 'bennett', ja: 'ベネット', en: 'bennett' },
      charactor4: { tag: 'berbara', ja: 'バーバラ', en: 'berbara' },
      charactor5: { tag: 'chongyun', ja: '重雲', en: 'chongyun' },
      charactor6: { tag: 'diluc', ja: 'ディルック', en: 'diluc' },
      charactor7: { tag: 'diona', ja: 'ディオナ', en: 'diona' },
      charactor8: { tag: 'fischl', ja: 'フィッシュル', en: 'fischl' },
      content: { tag: 'spiralAbyss1', numberOfParty: 1, ja: '深境螺旋1層', en: 'Spiral Abyss Floor1' },
      regulation : { tag: 'ta', ja: 'TA', en: 'TA' },
      // デフォルトカラー定義
      pickColor1: {
        alpha: 0.291319580078125,
        hex: '#051024',
        hexa: '#05102451',
        hsla: {
          h: 217.94481526964088,
          s: 0.7572404118103201,
          l: 0.08063202910299103,
          a: 0.3179862467447917
        },
        hsva: {
          h: 217.94481526964088,
          s: 0.861851806640625,
          v: 0.14168986002604167,
          a: 0.3179862467447917
        },
        hue: 217.94481526964088,
        rgba: {
          r: 5,
          g: 16,
          b: 36,
          a: 0.3179862467447917
        }
      },
      pickColor2: {
        alpha: 0.05,
        hex: '#EDBC3D',
        hexa: '#EDBC3D0D',
        hsla: {
          h: 43.48314606741573,
          s: 0.8277780242883032,
          l: 0.5840050434259076,
          a: 0.05
        },
        hsva: {
          h: 43.48314606741573,
          s: 0.741851806640625,
          v: 0.9283565266927083,
          a: 0.05
        },
        hue: 43.48314606741573,
        rgba: {
          r: 237,
          g: 188,
          b: 61,
          a: 0.05
        }
      },
      contentTextColor: {
        alpha: 0.291319580078125,
        hex: '#FFFFFF',
        hexa: '#FFFFFF4A',
        hsla: {
          h: 224.8597596339792,
          s: 0,
          l: 1,
          a: 0.291319580078125
        },
        hsva: {
          h: 224.8597596339792,
          s: 0,
          v: 1,
          a: 0.291319580078125
        },
        hue: 224.8597596339792,
        rgba: {
          r: 255,
          g: 255,
          b: 255,
          a: 0.291319580078125
        }
      },
      timeTextColor: {
        alpha: 1,
        hex: '#F4FF00',
        hexa: '#F4FF00FF',
        hsla: {
          h: 62.63786076736754,
          s: 1,
          l: 0.5,
          a: 1
        },
        hsva: {
          h: 62.63786076736754,
          s: 1,
          v: 1,
          a: 1
        },
        hue: 62.63786076736754,
        rgba: {
          r: 244,
          g: 255,
          b: 0,
          a: 1
        }
      },
      regulationTextColor: {
        alpha: 1,
        hex: '#F4FF00',
        hexa: '#F4FF00FF',
        hsla: {
          h: 62.63786076736754,
          s: 1,
          l: 0.5,
          a: 1
        },
        hsva: {
          h: 62.63786076736754,
          s: 1,
          v: 1,
          a: 1
        },
        hue: 62.63786076736754,
        rgba: {
          r: 244,
          g: 255,
          b: 0,
          a: 1
        }
      },
    }
  },
  components: {
    ColorPicker,
    ThumnailCanvas,
    SelectCharactor,
    SelectContent,
    SelectRegulation
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