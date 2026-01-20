<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click="handleBackgroundClick"
    >
      <div class="absolute inset-0 bg-cv-primary bg-opacity-90"></div>

      <div class="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center">
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 text-white hover:text-cv-accent transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="project.image"
          :alt="project.title"
          class="max-w-full max-h-full object-contain"
          @click.stop
        />

        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cv-primary to-transparent p-6">
          <h3 class="text-2xl font-semibold text-white mb-2">{{ project.title }}</h3>
          <p class="text-cv-accent text-sm mb-1">{{ project.category }}</p>
          <p class="text-cv-accent text-sm italic">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const handleBackgroundClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
