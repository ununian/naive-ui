<markdown>
# 自定义标记

可以使用 `marks` 插槽自定义刻度。

</markdown>

<template>
  <n-space style="height: 300px; justify-content: space-evenly">
    <n-slider v-model:value="value" :marks="marks" vertical range />
    <n-slider v-model:value="value" :marks="customMarks" vertical range />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import Temperature16Regular from '@vicons/fluent/Temperature16Regular'
import { NIcon } from '../../../icon'
import { NFlex } from '../../../flex'

export default defineComponent({
  setup () {
    const renderMark = (value: number, color: string) => {
      return h(
        NFlex,
        { style: { width: '120px' } },
        {
          default: () => [
            h(NIcon, { size: 24, color, component: Temperature16Regular }),
            h('span', { style: { color } }, `${value}°C`)
          ]
        }
      )
    }

    return {
      value: ref([20, 70]),
      marks: {
        0: '0°C',
        20: '20°C',
        60: '60°C',
        100: '100°C'
      },
      customMarks: {
        0: () => renderMark(0, '#0048BA'),
        20: () => renderMark(20, '#00BFFF'),
        60: () => renderMark(60, '#FFA500'),
        100: () => renderMark(100, '#FF4500')
      }
    }
  }
})
</script>
