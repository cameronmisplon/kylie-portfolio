<template>
  <div
    class="bg-cv-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border border-cv-border"
    @click="$emit('click')"
  >
    <div class="relative h-64 overflow-hidden bg-cv-accent flex items-center justify-center">
      <img
        v-if="project.type !== 'pdf'"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
      />
      <div v-else class="flex flex-col items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-cv-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <p class="text-cv-text text-lg font-semibold">PDF Document</p>
        <p class="text-cv-text-secondary text-sm">Click to Download</p>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-cv-text mb-2">{{ project.title }}</h3>
      <p class="text-cv-text-secondary text-sm mb-2">{{ project.category }}</p>
      <p class="text-cv-text-secondary text-sm italic">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return project.id && project.title
    }
  }
})

defineEmits(['click'])
</script>

