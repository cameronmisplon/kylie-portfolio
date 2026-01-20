<template>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="md:w-1/3">
      <h3 class="text-xl font-semibold text-cv-text mb-1">{{ education.company }}</h3>
      <p class="text-cv-text-secondary mb-1">{{ education.role }}</p>
      <p class="text-sm text-cv-text-secondary">{{ education.period }}</p>
    </div>
    <div class="md:w-2/3 border-l-2 border-cv-border pl-6">
      <p class="text-cv-text-secondary">{{ education.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
    validator: (exp) => {
      return exp.company && exp.role && exp.period && exp.description
    }
  }
})
</script>

