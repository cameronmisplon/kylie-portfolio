<template>
  <button
    :type="type"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cv-bg'
  const variantClasses = {
    primary: 'bg-cv-primary text-white hover:bg-cv-primary/90 focus:ring-cv-primary',
    secondary: 'bg-cv-accent text-cv-text hover:bg-cv-accent/80 focus:ring-cv-accent',
    outline: 'border-2 border-cv-primary text-cv-primary hover:bg-cv-primary hover:text-white focus:ring-cv-primary'
  }
  const widthClass = props.fullWidth ? 'w-full' : ''

  return `${baseClasses} ${variantClasses[props.variant]} ${widthClass}`
})
</script>

