<template>
  <div class="SelectContent">
    <v-select
      class="SelectContent-contentSelect"
      v-model="selectedContent"
      :items="contentList"
      item-text="content.ja"
      item-value="content"
      label="Standard"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  name: 'SelectContent',
  data() {
    return {
      selectedContent: null,
      contentList: [
        { header: '●深境螺旋'},
        { content : { tag: 'spiralAbyss1', numberOfParty: 1, ja: '深境螺旋1層', en: 'Spiral Abyss Floor1' } },
        { content : { tag: 'spiralAbyss2', numberOfParty: 1, ja: '深境螺旋2層', en: 'Spiral Abyss Floor2' } },
        { content : { tag: 'spiralAbyss3', numberOfParty: 1, ja: '深境螺旋3層', en: 'Spiral Abyss Floor3' } },
        { content : { tag: 'spiralAbyss4', numberOfParty: 1, ja: '深境螺旋4層', en: 'Spiral Abyss Floor4' } },
        { content : { tag: 'spiralAbyss5', numberOfParty: 2, ja: '深境螺旋5層', en: 'Spiral Abyss Floor5' } },
        { content : { tag: 'spiralAbyss6', numberOfParty: 2, ja: '深境螺旋6層', en: 'Spiral Abyss Floor6' } },
        { content : { tag: 'spiralAbyss7', numberOfParty: 2, ja: '深境螺旋7層', en: 'Spiral Abyss Floor7' } },
        { content : { tag: 'spiralAbyss8', numberOfParty: 2, ja: '深境螺旋8層', en: 'Spiral Abyss Floor8' } },
        { content : { tag: 'spiralAbyss9', numberOfParty: 2, ja: '深境螺旋9層', en: 'Spiral Abyss Floor9' } },
        { content : { tag: 'spiralAbyss10', numberOfParty: 2, ja: '深境螺旋10層', en: 'Spiral Abyss Floor10' } },
        { content : { tag: 'spiralAbyss11', numberOfParty: 2, ja: '深境螺旋11層', en: 'Spiral Abyss Floor11' } },
        { content : { tag: 'spiralAbyss12', numberOfParty: 2, ja: '深境螺旋12層', en: 'Spiral Abyss Floor12' } },
        // TODO 英語名を修正
        { header: '●フィールドボス'},
        { content : { tag: 'thumder', numberOfParty: 1, ja: '無相の雷アレフ', en: 'thumder' } },
        { header: '●秘境'},
        { content : { tag: 'unexploredRegion1', numberOfParty: 1, ja: '秘境１', en: 'unexploredRegion1' } },
        { header: '●イベント'},
        { content : { tag: 'frostbornMiracle', numberOfParty: 1, ja: '霜に覆われた奇跡の樹', en: 'Frostborn Miracle' } },
      ],
    }
  }
})
export default class SelectContent extends Vue {
  @Prop()
  private value: Content
  private selectedContent: Content

  @Watch('value', { deep: true, immediate: true })
  private watchValue() {
    this.selectedContent = this.value
  }

  @Watch('selectedContent', { deep: true, immediate: true })
  private changeContent() {
    return this.$emit('input', this.selectedContent)
  }
}

export interface Content {
  tag: string
  numberOfParty: number
  ja: string
  en: string
}
</script>

<style scoped lang="scss">
.SelectContent {
  button {
    width: 100px;
  }
}
</style>
