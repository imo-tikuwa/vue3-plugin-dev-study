<template>
  <button type="button" class="btn" :class="[btnSizeClass, btnColorClass]" :disabled="disabled">
    <template v-if="label">{{ label }}</template>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '../types'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  outline: false,
  color: 'primary',
  disabled: false
})

const btnSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'btn-sm'
    case 'large':
      return 'btn-lg'
    default:
      return null
  }
})
const btnColorClass = computed(() => `btn-${props.outline ? 'outline-' : ''}${props.color}`)
</script>
