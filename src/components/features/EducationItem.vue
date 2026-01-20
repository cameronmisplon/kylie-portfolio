<template>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="md:w-1/3">
      <h3 class="text-xl font-semibold text-white mb-1">{{ education.company }}</h3>
      <p class="text-gray-400 mb-1">{{ education.role }}</p>
      <p class="text-sm text-gray-500">{{ education.period }}</p>
    </div>
    <div class="md:w-2/3 border-l-2 border-gray-700 pl-6">
      <p class="text-gray-400">{{ education.description }}</p>
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

