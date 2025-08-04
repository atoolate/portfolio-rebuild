<script setup>
import Folder from './Folder.vue';
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="work-overview">
    <!-- Section Header -->
    <div class="section-header">
      <h2 class="section-title">
        <span class="path-prefix">alex/</span>
        <span class="path-main">work</span>
        <span class="path-slash">/</span>
      </h2>
    </div>

    <div class="projects-grid">
      <Folder
        title="3d-sneakershop"
        coverImage="src/assets/work/sneakershop.png"
        projectId="project-1"
        description="A Threejs 3D sneaker configurator, Nodejs API and real-time admin dashboard with live updates."
        :techStack="['Three.js', 'Node.js', 'MongoDB']"
      />
      <Folder
        title="social-study-app"
        coverImage="https://placehold.co/600x300"
        projectId="project-2"
        description="A React Native app helping students stay focused using science, gamification and social features."
        :techStack="['React Native', 'PostgreSQL', 'Expo Go']"
      />
      <Folder
        title="vuejs-portfolio"
        coverImage="https://placehold.co/600x300"
        projectId="project-3"
        description="A Vuejs portfolio website with attention to design and UI/UX to showcase my work and skills."
        :techStack="['Vue.js', 'Vite', 'CSS3']"
      />
      <Folder
        title="ai-coldemail-generator"
        coverImage="https://placehold.co/600x300"
        projectId="project-4"
        description="An AI webapp using Langchain AI agents to generate personalized cold emails based on campaign goals and uploaded lead list."
        :techStack="['LangChain', 'Next.js', 'OpenAPI']"
        :comingSoon="true"
      />
    </div>
  </div>
</template>

<style scoped>
.work-overview {
  padding: 40px 20px;
  background: var(--background-color);
}

/* Section Header */
.section-header {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 12px 0;
  color: var(--text-color);
  letter-spacing: -0.02em;
}

.path-prefix {
  color: var(--text-color);
  opacity: 0.5;
  font-weight: 300;
}

.path-main {
  color: var(--primary-color);
  font-weight: 500;
}

.path-slash {
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 300;
}

.section-subtitle {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

/* Finder-like styling */
.projects-grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 16px;
  }
}

@media (max-width: 768px) {
  .work-overview {
    padding: 30px 16px;
  }
  
  .section-header {
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 24px;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 8px;
  }
}
</style>