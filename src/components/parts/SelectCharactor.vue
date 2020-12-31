<template>
  <div class="SelectCharactor">
    <v-select
      v-model="selectedCharactor"
      :items="charactrorList"
      item-text="charactor.ja"
      item-value="charactor"
      label="Standard"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator"

@Component({
  name: 'SelectCharactor',
  data() {
    return {
      selectedCharactor: null,
      charactrorList: [
        { header: '★5'},
        { charactor: { tag: 'albedo', ja: 'アルベド', en: 'albedo' } },
        { charactor: { tag: 'diluc', ja: 'ディルック', en: 'diluc' } },
        { charactor: { tag: 'jean', ja: 'ジン', en: 'jean' } },
        { charactor: { tag: 'keqing', ja: '刻晴', en: 'keqing' } },
        { charactor: { tag: 'klee', ja: 'クレー', en: 'klee' } },
        { charactor: { tag: 'mona', ja: 'モナ', en: 'mona' } },
        { charactor: { tag: 'qiqi', ja: '七七', en: 'qiqi' } },
        { charactor: { tag: 'tartaglia', ja: 'タルタリヤ', en: 'tartaglia' } },
        { charactor: { tag: 'venti', ja: 'ウェンティ', en: 'venti' } },
        { charactor: { tag: 'zhongli', ja: '鐘離', en: 'zhongli' } },
        { header: '★4'},
        { charactor: { tag: 'amber', ja: 'アンバー', en: 'amber' } },
        { charactor: { tag: 'beidou', ja: '北斗', en: 'beidou' } },
        { charactor: { tag: 'bennett', ja: 'ベネット', en: 'bennett' } },
        { charactor: { tag: 'berbara', ja: 'バーバラ', en: 'berbara' } },
        { charactor: { tag: 'chongyun', ja: '重雲', en: 'chongyun' } },
        { charactor: { tag: 'diona', ja: 'ディオナ', en: 'diona' } },
        { charactor: { tag: 'fischl', ja: 'フィッシュル', en: 'fischl' } },
        { charactor: { tag: 'kaeya', ja: 'ガイア', en: 'kaeya' } },
        { charactor: { tag: 'lisa', ja: 'リサ', en: 'lisa' } },
        { charactor: { tag: 'ningguang', ja: '凝光', en: 'ningguang' } },
        { charactor: { tag: 'noelle', ja: 'ノエル', en: 'noelle' } },
        { charactor: { tag: 'razor', ja: 'レザー', en: 'razor' } },
        { charactor: { tag: 'sucrose', ja: 'スクロース', en: 'sucrose' } },
        { charactor: { tag: 'xiangling', ja: '香菱', en: 'xiangling' } },
        { charactor: { tag: 'xingqiu', ja: '行秋', en: 'xingqiu' } },
        { charactor: { tag: 'xinyan', ja: '辛炎', en: 'xinyan' } },
      ],
    }
  }
})
export default class SelectCharactor extends Vue {
  @Prop()
  private value: Charactor
  private selectedCharactor: Charactor

  @Watch('value', { deep: true, immediate: true })
  private watchValue() {
    this.selectedCharactor = this.value
  }

  @Watch('selectedCharactor', { deep: true, immediate: true })
  private changeCharactor() {
    return this.$emit('input', this.selectedCharactor)
  }
}

export interface Charactor {
  tag: string,
  ja: string,
  en: string
}
</script>

<style scoped lang="scss">
.SelectCharactor {
  button {
    width: 100px;
  }
}
</style>
