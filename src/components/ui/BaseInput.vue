<template>
  <div>
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-cv-text mb-2"
    >
      {{ label }}
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :class="inputClasses"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`)

const inputClasses = 'w-full px-4 py-2 border border-cv-border rounded-lg bg-cv-card text-cv-text placeholder-cv-text-secondary focus:ring-2 focus:ring-cv-primary focus:border-transparent transition'
</script>

