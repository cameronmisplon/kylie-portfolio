<template>
  <div class="dark">
    <div class="min-h-screen bg-gray-900">
      <AppNavbar
        :logo="logo"
        :nav-links="navLinks"
        @nav-click="handleNavClick"
      />

      <HeroSection
        :name="heroData.name"
        :title="heroData.title"
      />

      <AboutSection
        :name="aboutData.name"
        :image="aboutData.image"
        :bio="aboutData.bio"
        :skills="aboutData.skills"
        :location="aboutData.location"
      />

      <ProjectsSection
        :projects="projects"
        @project-click="handleProjectClick"
      />

      <EducationSection :education="education" />

      <ContactSection @submit="handleContactSubmit" />

      <AppFooter
        :nav-links="navLinks"
        copyright-name="Kylie"
        @nav-click="handleNavClick"
      />

      <ImageModal
        :is-open="!!selectedProject"
        :project="selectedProject"
        @close="selectedProject = null"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollTo } from './composables/useScrollTo'
import { projects } from './data/projects'
import { education } from './data/education'
import { navLinks } from './data/navigation'
import { aboutData } from './data/about'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import ImageModal from './components/ui/ImageModal.vue'

const { scrollTo } = useScrollTo()

const logo = 'KB'

const heroData = {
  name: 'Kylie Bosman',
  title: 'Candidate Architectural Student'
}

const selectedProject = ref(null)

const handleNavClick = (sectionId) => {
  scrollTo(sectionId)
}

const handleProjectClick = (project) => {
  if (project.type === 'pdf') {
    // Trigger PDF download
    const link = document.createElement('a')
    link.href = project.file
    link.download = `${project.title}.pdf`
    link.click()
  } else {
    // Open image in modal
    selectedProject.value = project
  }
}

const handleContactSubmit = (formData) => {
  console.log('Form submitted:', formData)
  alert('Thank you for your message! I will get back to you soon.')
}
</script>
