<template>
  <section class="tech-stack">
    <div class="section-container">
      <h2 class="section-title">Technology Stack</h2>
      <div class="tech-grid">
        <div 
          v-for="tech in techStack" 
          :key="tech"
          class="tech-item"
        >
          <span class="tech-name">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  techStack: {
    type: Array,
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

/* Technology Stack */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.tech-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  background: rgba(255, 103, 77, 0.05);
  border: 1px solid rgba(255, 103, 77, 0.15);
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.tech-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.tech-item:hover::before {
  transform: translateX(0);
}

.tech-item:hover {
  background: rgba(255, 103, 77, 0.1);
  border-color: rgba(255, 103, 77, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 103, 77, 0.1);
}

.tech-name {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
