<template>
  <div class="ColorPicker">
    <div>{{ label }}</div>
    <v-dialog
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="btnColorStyle"
          v-bind="attrs"
          v-on="on"
          :class="textColorStyle"
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
  private value: Color
  @Prop()
  private label: string

  private color: Color

  get colorName(): string {
    if(this.color && this.color.hex) {
      return this.color.hex
    } else {
      return '未選択'
    }
  }

  get btnColorStyle() {
    if(this.color && this.color.hex) {
      return this.color.hex
    } else {
      return 'gray'
    }
  }

  get textColorStyle() {
    if(this.color && this.color.hex) {
      const hoge = this.color.rgba.r * 0.299 + this.color.rgba.g * 0.587 + this.color.rgba.b * 0.114
      if (hoge > 50) {
        return 'black--text'
      } else {
        return 'white--text'
      }
    } else {
      return 'white--text'
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

export class Color {
  alpha: number;
	hex: string;
	hexa: string;
	hsla: {
		h: number;
		s: number;
		l: number;
		a: number;
	};
	hsva: {
		h: number;
		s: number;
		v: number;
		a: number;
	};
	hue: number;
	rgba: {
		r: number;
		g: number;
		b: number;
		a: number;
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
