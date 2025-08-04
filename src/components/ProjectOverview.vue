<template>
  <section class="project-overview">
    <div class="section-container">
      <h2 class="section-title">Project Overview</h2>
      <p class="project-description">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Section Containers */
.section-container {
  margin-bottom: 80px;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 32px 0;
  color: var(--text-color);
}

/* Project Overview */
.project-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-color);
  opacity: 0.8;
  max-width: 800px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
