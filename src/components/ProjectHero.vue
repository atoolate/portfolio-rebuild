<template>
  <header class="project-hero">
    <div class="hero-content">
      <div class="project-meta">
        <span class="project-category">{{ projectData.category }}</span>
        <span class="divider">•</span>
        <span class="project-year">{{ projectData.year }}</span>
        <span class="divider">•</span>
        <span class="status-indicator" :class="projectData.status.toLowerCase().replace(' ', '-')">
          {{ projectData.status }}
        </span>
      </div>
      
      <h1 class="project-title">{{ projectData.title }}</h1>
      <p class="project-subtitle">{{ projectData.subtitle }}</p>
      
      <!-- Action Links -->
      <div class="project-actions">
        <a 
          v-if="projectData.liveUrl" 
          :href="projectData.liveUrl" 
          target="_blank"
          class="action-button primary"
        >
          <span>View Live</span>
          <span class="arrow">↗</span>
        </a>
        <a 
          v-if="projectData.githubUrl"
          :href="projectData.githubUrl" 
          target="_blank" 
          class="action-button secondary"
        >
          <span>View Code</span>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  projectData: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Project Hero */
.project-hero {
  padding: 40px 0 60px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
}

.hero-content {
  max-width: 800px;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  opacity: 0.7;
}

.project-category {
  color: var(--primary-color);
  font-weight: 500;
}

.divider {
  opacity: 0.5;
}

.status-indicator {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-indicator.live {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.status-indicator.development {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
}

.status-indicator.coming-soon {
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
}

.project-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.project-subtitle {
  font-size: 1.25rem;
  opacity: 0.8;
  margin: 0 0 32px 0;
  font-weight: 400;
}

.project-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  font-family: inherit;
}

.action-button.primary {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.action-button.primary:hover {
  background: transparent;
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 103, 77, 0.3);
}

.action-button.secondary {
  background: transparent;
  color: var(--text-color);
  border: 2px solid rgba(0, 0, 0, 0.2);
}

.action-button.secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-title {
    font-size: 2.5rem;
  }
  
  .project-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 2rem;
  }
  
  .project-meta {
    flex-wrap: wrap;
  }
  
  .action-button {
    flex: 1;
    justify-content: center;
  }
}
</style>
