<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <BaseInput
      id="name"
      v-model="form.name"
      label="Name"
      placeholder="Your name"
      required
    />
    
    <BaseInput
      id="email"
      v-model="form.email"
      type="email"
      label="Email"
      placeholder="your.email@example.com"
      required
    />
    
    <BaseTextarea
      id="message"
      v-model="form.message"
      label="Message"
      placeholder="Your message"
      required
    />
    
    <BaseButton
      type="submit"
      variant="primary"
      full-width
    >
      Submit
    </BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '../ui/BaseInput.vue'
import BaseTextarea from '../ui/BaseTextarea.vue'
import BaseButton from '../ui/BaseButton.vue'

const emit = defineEmits(['submit'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  emit('submit', { ...form.value })
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

