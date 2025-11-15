<template>
  <section id="about" class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <SectionTitle>About</SectionTitle>
      
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div class="w-full md:w-1/3">
            <img
              :src="image"
              :alt="name"
              class="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div class="w-full md:w-2/3">
            <h3 class="text-2xl font-semibold text-white mb-4">{{ name }}</h3>
            
            <AboutSubsection
              v-if="bio"
              title="Bio"
            >
              {{ bio }}
            </AboutSubsection>

            <AboutSubsection
              v-if="skills && skills.length > 0"
              title="Skills"
            >
              <div class="flex flex-wrap gap-2">
                <SkillBadge
                  v-for="(skill, index) in skills"
                  :key="index"
                >
                  {{ skill }}
                </SkillBadge>
              </div>
            </AboutSubsection>

            <AboutSubsection
              v-if="location"
              title="Location"
            >
              {{ location }}
            </AboutSubsection>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import SkillBadge from '../ui/SkillBadge.vue'
import AboutSubsection from './AboutSubsection.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ''
  },
  skills: {
    type: Array,
    default: () => []
  },
  location: {
    type: String,
    default: ''
  }
})
</script>

