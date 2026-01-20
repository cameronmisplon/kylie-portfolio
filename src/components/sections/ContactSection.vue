<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-4">
      <SectionTitle>Contact me</SectionTitle>
      <p class="text-center text-cv-text-secondary mb-12">
        {{ subtitle }}
      </p>
      
      <div class="max-w-2xl mx-auto">
        <ContactForm @submit="handleSubmit" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import ContactForm from '../features/ContactForm.vue'

const props = defineProps({
  subtitle: {
    type: String,
    default: 'Have a question or want to work together?'
  }
})

const emit = defineEmits(['submit'])

const handleSubmit = (formData) => {
  emit('submit', formData)
}
</script>

