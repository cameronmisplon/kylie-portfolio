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
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900'
  const variantClasses = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-white',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white'
  }
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return `${baseClasses} ${variantClasses[props.variant]} ${widthClass}`
})
</script>

