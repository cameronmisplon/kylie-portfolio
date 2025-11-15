<template>
  <div
    class="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    @click="$emit('click')"
  >
    <div class="relative h-64 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
      <p class="text-gray-400 text-sm mb-2">{{ project.category }}</p>
      <p class="text-gray-500 text-sm italic">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return project.id && project.title && project.image
    }
  }
})

defineEmits(['click'])
</script>

