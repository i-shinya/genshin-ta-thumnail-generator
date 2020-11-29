<template>
  <div class="thumnail-canvas">
    <v-row class="text-center">
      <v-col class="mb-4">
        <div class="canvas-area">
          <canvas id="canvas"></canvas>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <a id="download_link" ref="downloadLink" href="" @click="generatImageUrl">
          <v-btn color="success">
            サムネイルを生成する
          </v-btn>
        </a>
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
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator"
import { fabric } from "fabric"
import ColorPicker from '@/components/parts/ColorPicker.vue'
import SelectCharactor, { Charactor } from '@/components/parts/SelectCharactor.vue'

@Component({
  components: {
    ColorPicker,
    SelectCharactor
  },
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
  }
})
export default class ThumnailCanvas extends Vue {

  private canvas: fabric.Canvas
  // 選択色
  private pickColor1: any
  private pickColor2: any
  // 選択キャラ
  private charactor1: string
  private charactor2: string
  private charactor3: string
  private charactor4: string

  public mounted() {
    this.canvas = new fabric.Canvas("canvas")
    this.canvas.setWidth(960)
    this.canvas.setHeight(540)
    const color: string = "#4A4A4A"
    // const gradientOptions = {
    //   type: 'linear',
    //   coords: {
    //     x1: "50%", y1: "0%", x2: "50%", y2: "100%"
    //   },
    //   colorStops: [
    //     {
    //       color: this.pickColor1.hex, offset: 0
    //     },
    //     {
    //       color: this.pickColor2.hex, offset: 1
    //     }
    //   ]
    // }

    // {
    //     colorStops: [
    //       {
    //         offset: "0",
    //         color: this.pickColor1.hex,
    //       },
    //       {
    //         offset: "0.5",
    //         color: this.pickColor2.hex,
    //       }
    //     ]
    //   }
    // const gradient: fabric.Gradient = new fabric.Gradient(gradientOptions)
    // this.canvas.setBackgroundColor(gradient, () => {})
    this.canvas.backgroundColor = this.pickColor1.hex

    this.canvas.renderAll()
  }

  private generatImageUrl() {
    const downloadLink: any = this.$refs.downloadLink
    downloadLink.href = this.canvas.toDataURL()
    downloadLink.download = 'genshin_ta_thumnail.jpg'
  }

  private addImage(charactor: string, num: number) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imagePath = require(`../assets/charactor/image/${charactor}_ja.png`)
    fabric.Image.fromURL(imagePath, (img: fabric.Image) => {
      img.scaleToHeight(120)
      if (num === 1) {
        img.set('top', 260)
        img.set('left', 50)
      } else if (num === 2) {
        img.set('top', 260)
        img.set('left', 180)
      } else if (num === 3) {
        img.set('top', 405)
        img.set('left', 50)
      } else if (num === 4) {
        img.set('top', 405)
        img.set('left', 180)
      }
      this.canvas.add(img)
      this.canvas.renderAll()
    })
  }

  @Watch('charactor1', { deep: true, immediate: false })
  @Watch('charactor2', { deep: true, immediate: false })
  @Watch('charactor3', { deep: true, immediate: false })
  @Watch('charactor4', { deep: true, immediate: false })
  private changeCharactor(newValue: string, oldValue: string) {
    this.changeProperties()
  }

  @Watch('pickColor1', { deep: true, immediate: false })
  @Watch('pickColor2', { deep: true, immediate: false })
  private updateColor() {
    this.changeProperties()
  }

  private changeProperties() {
    if (!this.canvas) {
      return
    }
    this.canvas.backgroundColor = this.pickColor1.hex
    if (this.charactor1) {
      this.addImage(this.charactor1, 1)
    }
    if (this.charactor2) {
      this.addImage(this.charactor2, 2)
    }
    if (this.charactor3) {
      this.addImage(this.charactor3, 3)
    }
    if (this.charactor4) {
      this.addImage(this.charactor4, 4)
    }

    this.canvas.renderAll()
  }
}
</script>

<style scoped lang="scss">
.thumnail-canvas {
  max-width: 1080px;
  margin: 0 auto;

  .canvas-area {
    width: 960px;
    margin: 0 auto;
  }
}
</style>
