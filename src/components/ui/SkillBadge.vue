<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup>
const badgeClasses = 'px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm'
</script>

