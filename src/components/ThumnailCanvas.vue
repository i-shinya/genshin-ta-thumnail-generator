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
            <span class="button-text">サムネイルを生成する</span>
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator'
import { fabric } from 'fabric'
import SelectCharactor, { Charactor } from '@/components/parts/SelectCharactor.vue'

@Component({
  components: {
    SelectCharactor
  },
  data() {
    return {
    }
  }
})
export default class ThumnailCanvas extends Vue {

  private canvas: fabric.Canvas
  // 選択色
  @Prop()
  private pickColor1: any
  @Prop()
  private pickColor2: any
  // 選択キャラ
  @Prop()
  private charactor1: string
  @Prop()
  private charactor2: string
  @Prop()
  private charactor3: string
  @Prop()
  private charactor4: string
  // タイム
  @Prop()
  private timeText: string
  @Prop()
  private timeTextColor: any

  public mounted() {
    this.canvas = new fabric.Canvas("canvas")
    this.canvas.setWidth(960)
    this.canvas.setHeight(540)
    const color = "#4A4A4A"
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
    this.addTimeText()
    this.canvas.renderAll()
  }

  private generatImageUrl() {
    const downloadLink: any = this.$refs.downloadLink
    downloadLink.href = this.canvas.toDataURL()
    downloadLink.download = 'genshin_ta_thumnail.jpg'
  }

  // タイムのテキストを追加する
  private addTimeText() {
    const timeText = new fabric.Textbox(this.timeText, {
      width: 100,
      top: 30,
      left: 500,
      fontSize: 80,
    })
    timeText.set({ fill: this.timeTextColor.hex })
    this.canvas.add(timeText)
    this.canvas.renderAll()
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

  // 何か入力内容に変更があったら全て更新する
  @Watch('charactor1', { deep: true, immediate: false })
  @Watch('charactor2', { deep: true, immediate: false })
  @Watch('charactor3', { deep: true, immediate: false })
  @Watch('charactor4', { deep: true, immediate: false })
  @Watch('pickColor1', { deep: true, immediate: false })
  @Watch('pickColor2', { deep: true, immediate: false })
  @Watch('timeText', { deep: true, immediate: false })
  @Watch('timeTextColor', { deep: true, immediate: false })
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
    if (this.timeText && this.timeTextColor) {
      this.addTimeText()
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

  .button-text {
    text-decoration: none;
  }
}
</style>
