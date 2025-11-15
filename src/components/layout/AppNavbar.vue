<template>
  <nav class="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-white">{{ logo }}</div>
        <div class="hidden md:flex space-x-8">
          <NavLink
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            @click="handleNavClick(link.id)"
          >
            {{ link.label }}
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavLink from '../ui/NavLink.vue'

const props = defineProps({
  logo: {
    type: String,
    default: 'KB'
  },
  navLinks: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['nav-click'])

const handleNavClick = (sectionId) => {
  emit('nav-click', sectionId)
}
</script>

