<template>
  <div class="SelectCharactor">
    <v-select
      v-model="selectedCharactor"
      :items="charactrorList"
      item-text="ja"
      item-value="tag"
      label="Standard"
    ></v-select>
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
        { tag: 'amber', ja: 'アンバー', en: 'amber'},
        { tag: 'beidou', ja: '北斗', en: 'beidou'},
        { tag: 'bennett', ja: 'ベネット', en: 'bennett'},
        { tag: 'berbara', ja: 'バーバラ', en: 'berbara'},
        { tag: 'chongyun', ja: '重雲', en: 'chongyun'},
        { tag: 'diluc', ja: 'ディルック', en: 'diluc'},
        { tag: 'diona', ja: 'ディオナ', en: 'diona'},
        { tag: 'fischl', ja: 'フィッシュル', en: 'fischl'},
        { tag: 'jean', ja: 'ジン', en: 'jean'},
        { tag: 'kaeya', ja: 'ガイア', en: 'kaeya'},
        { tag: 'keqing', ja: 'アンバー', en: 'keqing'},
        { tag: 'klee', ja: 'クレー', en: 'klee'},
        { tag: 'lisa', ja: 'リサ', en: 'lisa'},
        { tag: 'mona', ja: 'モナ', en: 'mona'},
        { tag: 'ningguang', ja: '凝光', en: 'ningguang'},
        { tag: 'noelle', ja: 'ノエル', en: 'noelle'},
        { tag: 'qiqi', ja: '七七', en: 'qiqi'},
        { tag: 'razor', ja: 'レザー', en: 'razor'},
        { tag: 'sucrose', ja: 'スクロース', en: 'sucrose'},
        { tag: 'tartaglia', ja: 'タルタリヤ', en: 'tartaglia'},
        { tag: 'venti', ja: 'ウェンティ', en: 'venti'},
        { tag: 'xiangling', ja: '香菱', en: 'xiangling'},
        { tag: 'xingqiu', ja: '行秋', en: 'xingqiu'}
      ],
    }
  }
})
export default class SelectCharactor extends Vue {
  @Prop()
  private value: string
  private selectedCharactor: string

  @Watch('value', { deep: true, immediate: true })
  private watchValue() {
    this.selectedCharactor = this.value
  }

  @Watch('selectedCharactor', { deep: true, immediate: true })
  private changeColor() {
    return this.$emit('input', this.selectedCharactor)
  }
}

export interface Charactor {
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
