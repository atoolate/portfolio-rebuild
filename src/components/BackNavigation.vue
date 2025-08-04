<template>
  <nav class="back-nav">
    <button @click="goBack" class="back-button">
      <span class="back-arrow">←</span>
      <span>Back to Work</span>
    </button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
/* Back Navigation */
.back-nav {
  padding: 0px 0 0px 0;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
}

.back-button:hover {
  opacity: 1;
  transform: translateX(-4px);
}

.back-arrow {
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.back-button:hover .back-arrow {
  transform: translateX(-2px);
}
</style>
