<template>
  <section id="education" class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <SectionTitle>Education</SectionTitle>

      <div class="max-w-3xl mx-auto space-y-8">
        <EducationItem
          v-for="(item, index) in education"
          :key="index"
          :education="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import EducationItem from '../features/EducationItem.vue'

defineProps({
  education: {
    type: Array,
    required: true
  }
})
</script>

