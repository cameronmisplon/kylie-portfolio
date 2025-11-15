<template>
  <section id="experience" class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <SectionTitle>Experience</SectionTitle>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <ExperienceItem
          v-for="(exp, index) in experience"
          :key="index"
          :experience="exp"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import ExperienceItem from '../features/ExperienceItem.vue'

defineProps({
  experience: {
    type: Array,
    required: true
  }
})
</script>

