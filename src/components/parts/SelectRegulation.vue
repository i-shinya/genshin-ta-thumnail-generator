<template>
  <div class="SelectRegulation">
    <v-select
      class="SelectRegulation-regulationSelect"
      v-model="selectedRegulation"
      :items="regulationList"
      item-text="regulation.ja"
      item-value="regulation"
      label="Standard"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  name: 'SelectRegulation',
  data() {
    return {
      selectedRegulation: null,
      regulationList: [
        { regulation : { tag: 'ta', ja: 'TA', en: 'TA' } },
        { regulation : { tag: 'no-buf', ja: 'no-buf', en: 'no-buf' } },
      ],
    }
  }
})
export default class SelectRegulation extends Vue {
  @Prop()
  private value: Regulation
  private selectedRegulation: Regulation

  @Watch('value', { deep: true, immediate: true })
  private watchValue() {
    this.selectedRegulation = this.value
  }

  @Watch('selectedRegulation', { deep: true, immediate: true })
  private changeRegulation() {
    return this.$emit('input', this.selectedRegulation)
  }
}

export interface Regulation {
  tag: string
  ja: string
  en: string
}
</script>

<style scoped lang="scss">
.SelectRegulation {
  button {
    width: 100px;
  }
}
</style>
