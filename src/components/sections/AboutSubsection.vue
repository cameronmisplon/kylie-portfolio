<template>
  <div class="mb-6">
    <h4 class="text-xl font-semibold text-cv-text mb-3">{{ title }}</h4>
    <div class="text-cv-text-secondary">
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

