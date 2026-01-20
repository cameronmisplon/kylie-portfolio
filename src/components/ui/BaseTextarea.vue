<template>
  <div>
    <label
      v-if="label"
      :for="textareaId"
      class="block text-sm font-medium text-cv-text mb-2"
    >
      {{ label }}
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :class="textareaClasses"
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
  rows: {
    type: Number,
    default: 6
  },
  id: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])

const textareaId = computed(() => props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`)

const textareaClasses = 'w-full px-4 py-2 border border-cv-border rounded-lg bg-cv-card text-cv-text placeholder-cv-text-secondary focus:ring-2 focus:ring-cv-primary focus:border-transparent transition resize-none'
</script>

