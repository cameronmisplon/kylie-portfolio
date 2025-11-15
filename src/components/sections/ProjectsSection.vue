<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-4">
      <SectionTitle>Projects</SectionTitle>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @click="handleProjectClick(project)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import ProjectCard from '../features/ProjectCard.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['project-click'])

const handleProjectClick = (project) => {
  emit('project-click', project)
}
</script>

