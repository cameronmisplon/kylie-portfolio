<template>
  <div class="mb-6">
    <h4 class="text-xl font-semibold text-gray-200 mb-3">{{ title }}</h4>
    <div class="text-white">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

