<template>
  <div class="ColorPicker">
    <div>{{ label }}</div>
    <v-dialog
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="colorStyle"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ colorName }}
        </v-btn>
      </template>

      <v-color-picker
        v-model="color"
        dot-size="15"
        swatches-max-height="200"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  name: 'ColorPicker',
  data() {
    return {
      color: null
    }
  }
})
export default class ColorPicker extends Vue {
  @Prop()
  private value: any
  @Prop()
  private label: string

  private color: any

  get colorName(): string {
    if(this.color && this.color.hex) {
      return this.color.hex
    } else {
      return '未選択'
    }
  }

  get colorStyle() {
    if(this.color && this.color.hex) {
      return this.color.hex
    } else {
      return 'gray'
    }
  }

  @Watch('value', { deep: true, immediate: true })
  private watchValue() {
    this.color = this.value
  }

  @Watch('color', { deep: true, immediate: true })
  private changeColor() {
    return this.$emit('input', this.color)
  }
}
</script>

<style scoped lang="scss">
.ColorPicker {
  button {
    width: 100px;
  }
}
</style>
