<template>
  <div>
    <label
      v-if="label"
      :for="textareaId"
      class="block text-sm font-medium text-gray-300 mb-2"
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

const textareaClasses = 'w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition resize-none'
</script>

