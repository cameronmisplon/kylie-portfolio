<template>
  <h2 :class="titleClasses">
    <slot />
  </h2>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  align: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})

const titleClasses = computed(() => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  }
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  return `font-bold text-cv-text mb-12 ${sizeClasses[props.size]} ${alignClasses[props.align]}`
})
</script>

