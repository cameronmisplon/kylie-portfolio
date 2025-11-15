<template>
  <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4 text-center">
      <div class="flex flex-wrap justify-center gap-4 mb-4">
        <NavLink
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          @click="handleNavClick(link.id)"
        >
          {{ link.label }}
        </NavLink>
      </div>
      <p class="text-gray-400 text-sm">
        © {{ currentYear }} {{ copyrightName }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import NavLink from '../ui/NavLink.vue'

const props = defineProps({
  navLinks: {
    type: Array,
    required: true
  },
  copyrightName: {
    type: String,
    default: 'Kylie'
  }
})

const emit = defineEmits(['nav-click'])

const currentYear = computed(() => new Date().getFullYear())

const handleNavClick = (sectionId) => {
  emit('nav-click', sectionId)
}
</script>

