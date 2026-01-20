<template>
  <a
    :href="href"
    :class="linkClasses"
    @click.prevent="$emit('click')"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  }
})

defineEmits(['click'])

const linkClasses = 'text-cv-accent hover:text-white transition'
</script>

