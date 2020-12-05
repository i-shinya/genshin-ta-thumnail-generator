<template>
  <div class="thumnail-canvas">
    <v-row class="text-center">
      <v-col class="mb-1">
        <div class="canvas-area">
          <canvas id="canvas" />
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-1">
        <a
          id="download_link"
          ref="downloadLink"
          href=""
          @click="generatImageUrl"
        >
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
import { Charactor } from '@/components/parts/SelectCharactor.vue'
import { Content } from '@/components/parts/SelectContent.vue'
import { Color } from '@/components/parts/ColorPicker.vue'

@Component({
  data() {
    return {
    }
  }
})
export default class ThumnailCanvas extends Vue {

  private canvas: fabric.Canvas
  // 選択色
  @Prop()
  private pickColor1: Color
  @Prop()
  private pickColor2: Color
  // 選択キャラ
  @Prop()
  private charactor1: Charactor
  @Prop()
  private charactor2: Charactor
  @Prop()
  private charactor3: Charactor
  @Prop()
  private charactor4: Charactor
  // コンテンツ
  @Prop()
  private content: Content
  @Prop()
  private contentTextColor: Color
  // タイム
  @Prop()
  private timeText: string
  @Prop()
  private timeTextColor: Color

  // 表示オブジェクト
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private taTextObject: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private timeTextObject: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private contentTextObject: any

  public mounted(): void {
    this.canvas = new fabric.Canvas('canvas')
    this.canvas.setWidth(960)
    this.canvas.setHeight(540)
    this.changeProperties()
  }

  private setGradient(): void {
    const gradient: fabric.Gradient = new fabric.Gradient({
      type: 'linear',
      coords: { x1: 0, y1: 0, x2: 0, y2: 900 },
      colorStops:
        [
          { color: this.pickColor1.hex, offset: '0' },
          { color: this.pickColor2.hex, offset: '1' },
        ]
    })
    this.canvas.setBackgroundColor(
      gradient, () => { return }
    )
    this.canvas.renderAll()
  }

  private generatImageUrl(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const downloadLink: any = this.$refs.downloadLink
    downloadLink.href = this.canvas.toDataURL()
    downloadLink.download = 'genshin_ta_thumnail.jpg'
  }

  // TAのテキストを追加する
  private addTaText(): void {
    const taText = new fabric.Textbox('TA', {
      top: 200,
      left: 200,
      fontSize: 125,
    })
    taText.set({ fill: this.timeTextColor.hex })
    taText.set({ left: (this.canvas.width!! - (taText.width + this.timeTextObject.width)) / 2 - 8 } )
    this.canvas.add(taText)
    this.taTextObject = taText
    this.canvas.renderAll()
  }

  // コンテンツのテキストを追加する
  private addContentText(): void {
    const contentText = new fabric.Textbox(this.content.ja, {
      top: 64,
      left: 36,
      fontSize: 130,
    })
    contentText.set({ fill: this.contentTextColor.hex })
    contentText.set({ left: (this.canvas.width!! - contentText.width!!) / 2} )
    
    this.canvas.add(contentText)
    this.contentTextObject = contentText
    this.canvas.renderAll()
  }

  // タイムのテキストを追加する
  private addTimeText(): void {
    const timeText = new fabric.Textbox(this.timeText, {
      top: 200,
      fontSize: 125,
    })
    timeText.set({ fill: this.timeTextColor.hex })
    timeText.set({ left: (this.canvas.width!! - (this.taTextObject.width + timeText.width)) / 2 + this.taTextObject.width + 8 })
    this.canvas.add(timeText)
    this.timeTextObject = timeText
    this.canvas.renderAll()
  }

  // キャラクター画像を追加する
  private addImage(charactor: Charactor, num: number): void {
    // eslint-disable-next-line
    const imagePath = require(`../assets/charactor/image/${charactor.tag}_ja.png`)
    fabric.Image.fromURL(imagePath, (img: fabric.Image) => {
      img.scaleToHeight(140)
      const topBase = 220
      if (num === 1) {
        img.set('top', topBase + 135)
        img.set('left', (this.canvas.width!! / 2 - img.width!! * 2) - 30)
      } else if (num === 2) {
        img.set('top', topBase + 135)
        img.set('left', (this.canvas.width!! / 2 - img.width!! * 1) - 10)
      } else if (num === 3) {
        img.set('top', topBase + 135)
        img.set('left', (this.canvas.width!! / 2) + 10)
      } else if (num === 4) {
        img.set('top', topBase + 135)
        img.set('left', (this.canvas.width!! / 2 + img.width!!) + 30)
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
  @Watch('content', { deep: true, immediate: false })
  @Watch('contentTextColor', { deep: true, immediate: false })
  @Watch('pickColor1', { deep: true, immediate: false })
  @Watch('pickColor2', { deep: true, immediate: false })
  @Watch('timeText', { deep: true, immediate: false })
  @Watch('timeTextColor', { deep: true, immediate: false })
  private changeProperties(): void {
    if (!this.canvas) {
      return
    }
    this.canvas.clear()

    // this.canvas.backgroundColor = this.pickColor1.hex
    this.setGradient()
    // タイムテキストで配置箇所を計算するために仮に追加
    this.taTextObject = new fabric.Textbox('TA', {
      fontSize: 120,
    })
    
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
    if (this.content && this.contentTextColor) {
      this.addContentText()
    }
    if (this.timeText && this.timeTextColor) {
      this.addTimeText()
    }
    this.addTaText()
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
