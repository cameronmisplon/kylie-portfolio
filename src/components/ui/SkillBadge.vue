<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup>
const badgeClasses = 'px-3 py-1 bg-cv-accent text-cv-text rounded-full text-sm'
</script>

