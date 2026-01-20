<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-20 bg-cv-accent">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-7xl font-bold text-cv-primary mb-4">
        {{ name }}
      </h1>
      <p class="text-2xl md:text-3xl text-cv-text-secondary italic">
        {{ title }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

