<markdown>
# Validator
</markdown>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(0),
      validator: (x: number) => x > 0
    }
  }
})
</script>

<template>
  <n-input-number v-model:value="value" :validator="validator" />
</template>
