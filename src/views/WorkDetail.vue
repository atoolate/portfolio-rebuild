<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Contact from '../components/Contact.vue'

const router = useRouter()
const props = defineProps(['projectId'])

// Project data based on projectId
const projectData = computed(() => {
  const projects = {
    'vuejs-portfolio': {
      title: 'Vue Portfolio',
      subtitle: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio built with Vue 3 and Vite. Features clean design, smooth animations, and optimized performance across all devices.',
      status: 'Live',
      year: '2024',
      githubUrl: 'https://github.com/atoolate/vue-portfolio',
      liveUrl: 'https://alexdelaet.dev',
      techStack: ['Vue 3', 'Vite', 'JavaScript', 'CSS3', 'Responsive Design'],
      features: [
        'Component-based architecture',
        'Responsive grid system', 
        'Smooth page transitions',
        'Optimized performance',
        'Clean, minimal design',
        'Accessibility focused'
      ]
    },
    'project-1': {
      title: '3D Sneaker Shop',
      subtitle: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform with Three.js 3D configurator and real-time admin dashboard.',
      status: 'Live',
      year: '2024',
      githubUrl: 'https://github.com/atoolate/3d-sneaker-shop',
      liveUrl: 'https://sneaker-config.demo',
      techStack: ['Three.js', 'Node.js', 'React', 'MongoDB'],
      features: [
        '3D sneaker visualization and customization',
        'Real-time inventory management',
        'Admin dashboard with analytics',
        'Payment integration and checkout flow'
      ]
    },
    'project-2': {
      title: 'Social Study App',
      subtitle: 'Mobile Application',
      description: 'React Native app helping students focus using gamification and social features.',
      status: 'Development',
      year: '2024',
      githubUrl: 'https://github.com/atoolate/study-app',
      liveUrl: null,
      techStack: ['React Native', 'Node.js', 'PostgreSQL', 'WebSocket'],
      features: [
        'Pomodoro timer with focus tracking',
        'Social study groups and leaderboards',
        'Achievement system and progress analytics',
        'Real-time study session collaboration'
      ]
    }
  }
  
  return projects[props.projectId] || projects['vuejs-portfolio']
})


const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="work-detail">
    <Navbar />
    
    <main class="main-content">
      <!-- Back Navigation -->
      <nav class="back-nav">
        <button @click="goBack" class="back-button">
          <span class="back-arrow">←</span>
          <span>Back</span>
        </button>
      </nav>

      <!-- Project Header -->
      <header class="project-header">
        <div class="project-status">
          <span class="status-indicator" :class="projectData.status.toLowerCase()"></span>
          <span class="status-text">{{ projectData.status }}</span>
          <span class="divider">•</span>
          <span class="project-year">{{ projectData.year }}</span>
        </div>
        
        <h1 class="project-title">{{ projectData.title }}</h1>
        <p class="project-subtitle">{{ projectData.subtitle }}</p>
        
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
      </header>

      <!-- Project Overview -->
      <section class="project-overview">
        <div class="overview-content">
          <h2>Overview</h2>
          <p class="description">{{ projectData.description }}</p>
        </div>
      </section>

      <!-- Project Details -->
      <section class="project-details">
        <div class="details-container">
          <div class="detail-section">
            <h3>Technology</h3>
            <div class="tech-stack">
              <span 
                v-for="tech in projectData.techStack" 
                :key="tech"
                class="tech-item"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="detail-section">
            <h3>Features</h3>
            <ul class="features-list">
              <li v-for="feature in projectData.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <Contact />
  </div>
</template>

<style scoped>
.work-detail {
  min-height: 100vh;
  background: var(--background-color);
}

.main-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Back Navigation */
.back-nav {
  padding: 1rem 0;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-color);
  font-family: var(--font-family-heading);
  font-size: 0.95rem;
  font-weight: 400;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.back-button:hover {
  opacity: 1;
  color: var(--primary-color);
}

.back-arrow {
  transition: transform 0.3s ease;
}

.back-button:hover .back-arrow {
  transform: translateX(-3px);
}

/* Project Header */
.project-header {
  padding: 2rem 0 var(--section-spacing) 0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.project-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  opacity: 0.8;
  font-family: var(--font-family-heading);
  font-weight: 300;
  font-size: 0.9rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-indicator.live {
  background: #22c55e;
}

.status-indicator.development {
  background: #f59e0b;
}

.status-indicator.archived {
  background: #6b7280;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.divider {
  color: var(--primary-color);
}

.project-title {
  font-family: var(--font-family-heading);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 300;
  margin: 0 0 0.5rem 0;
  color: var(--text-color);
  line-height: 1.1;
}

.project-subtitle {
  font-size: 1.125rem;
  color: var(--text-color);
  opacity: 0.7;
  margin: 0 0 2.5rem 0;
  font-weight: 300;
}

.project-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: var(--font-family-heading);
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-button.primary {
  background: var(--primary-color);
  color: white;
}

.action-button.primary:hover {
  background: #e55a42;
  transform: translateY(-2px);
}

.action-button.secondary {
  background: transparent;
  color: var(--text-color);
  border: 1px solid rgba(20, 8, 14, 0.2);
}

.action-button.secondary:hover {
  background: rgba(20, 8, 14, 0.05);
  border-color: rgba(20, 8, 14, 0.3);
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.action-button:hover .arrow {
  transform: translate(2px, -2px);
}

/* Project Overview */
.project-overview {
  padding: var(--section-spacing) 0;
  border-top: 1px solid rgba(20, 8, 14, 0.1);
}

.overview-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.overview-content h2 {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  color: var(--text-color);
}

.description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-color);
  opacity: 0.8;
  margin: 0;
}

/* Project Details */
.project-details {
  padding: var(--section-spacing) 0;
}

.details-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.detail-section h3 {
  font-family: var(--font-family-heading);
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  color: var(--text-color);
  position: relative;
}

.detail-section h3::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 2rem;
  height: 2px;
  background: var(--primary-color);
  border-radius: 1px;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-item {
  background: var(--box-background-color);
  color: var(--text-color);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(20, 8, 14, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.tech-item:hover {
  background: rgba(255, 103, 77, 0.1);
  border-color: rgba(255, 103, 77, 0.2);
  color: var(--primary-color);
  transform: translateY(-2px);
}

/* Features List */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.features-list li {
  padding: 1rem;
  background: var(--box-background-color);
  border-radius: 6px;
  border: 1px solid rgba(20, 8, 14, 0.1);
  color: var(--text-color);
  font-weight: 400;
  position: relative;
  padding-left: 2.5rem;
  transition: all 0.3s ease;
}

.features-list li:hover {
  background: rgba(255, 103, 77, 0.05);
  border-color: rgba(255, 103, 77, 0.15);
  transform: translateX(4px);
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .action-button {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .details-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .project-status {
    flex-wrap: wrap;
    gap: 0.25rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .tech-stack {
    justify-content: center;
  }
  
  .detail-section {
    text-align: center;
  }
  
  .detail-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .features-list li {
    text-align: left;
  }
}
</style>
