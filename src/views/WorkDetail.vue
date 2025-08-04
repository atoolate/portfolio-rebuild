<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Contact from '../components/Contact.vue'
import BackNavigation from '../components/BackNavigation.vue'
import ProjectHero from '../components/ProjectHero.vue'
import ProjectMockup from '../components/ProjectMockup.vue'
import ProjectOverview from '../components/ProjectOverview.vue'
import KeyFeatures from '../components/KeyFeatures.vue'
import TechStack from '../components/TechStack.vue'

// Import mockup images
import sneakerMockup from '../assets/work/sneakermockup.png'
import fynkMockup from '../assets/work/fynk-mockup.png'
import portfolioMockup from '../assets/work/portfoliomockup.png'

const router = useRouter()
const props = defineProps(['projectId'])

// Comprehensive project data
const projectData = computed(() => {
  const projects = {
    'project-1': {
      title: '3D Sneaker Shop',
      subtitle: 'Interactive E-commerce Platform',
      description: 'A fullstack e-commerce platform featuring a Three.js 3D sneaker configurator, and a real-time admin dashboard. Users can customize sneakers in 3D space with live material updates, while administrators monitor live sales updates and manage orders and inventory through a real-time dashboard.',
      status: 'Live',
      year: '2024',
      category: 'Full-Stack Development',
      githubUrl: 'https://github.com/atoolate/node-api-backend-v1',
      liveUrl: 'https://three-js-sneaker-store.vercel.app/',
      mockupImage: sneakerMockup,
      techStack: ['Three.js', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'Passport.js'],
      keyFeatures: [
        'Real-time 3D sneaker customization with material and color options',
        'Interactive camera controls and lighting effects',
        'Admin dashboard with order overview and edit functionality',
        'Live order tracking using websockets',
      ]
    },
    'project-2': {
      title: 'Social Study App',
      subtitle: 'Gamified Learning Platform',
      description: 'A React Native mobile application designed to enhance student focus and productivity through science-backed study techniques, gamification elements, and social collaboration features. The app combines Pomodoro techniques with social accountability and progress tracking.',
      status: 'Live',
      year: '2024',
      category: 'Mobile Development',
      githubUrl: 'https://github.com/atoolate/fynk-backend',
      liveUrl: null,
      mockupImage: fynkMockup,
      techStack: ['React Native', 'Javascript', 'Express', 'Node.js', 'PostgreSQL', 'Expo Go', 'Figma'],
      keyFeatures: [
        'Different Pomodoro timers with focus tracking and break reminders',
        'Gamification system with achievements, streaks, and level system',
        'PostgreSQL database for user data and progress tracking',
        'Social features mimicking Strava but for productivity',
        'Progress analytics and productivity insights',
      ]
    },
    'project-3': {
      title: 'Vue.js Portfolio',
      subtitle: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built from scratch with Vue 3 and Vite. Started with wireframes and design concepts, then developed iteratively using component-based architecture. Features a terminal-inspired design aesthetic with Finder-like project grid, detailed work pages, and smooth navigation. Built with performance and accessibility in mind.',
      status: 'Live',
      year: '2025',
      category: 'Frontend Development',
      githubUrl: 'https://github.com/atoolate/portfolio-rebuild',
      liveUrl: 'https://alexdl.be',
      mockupImage: portfolioMockup,
      techStack: ['Vue 3', 'Vite', 'JavaScript', 'CSS3', 'Vue Router', 'Responsive Design'],
      keyFeatures: [
        'Terminal-inspired design with dev/coding aesthetic throughout',
        'Finder-like project grid with folder icons and tech stack previews',
        'Comprehensive work detail pages with hero sections and feature breakdowns',
        'Responsive design system using CSS custom properties and clamp() functions',
        'Smooth page transitions with scroll-to-top navigation behavior',
        'Interactive terminal component showing career journey timeline'
      ]
    },
    'project-4': {
      title: 'AI Cold Email Generator',
      subtitle: 'Intelligent Email Automation',
      description: 'An AI-powered web application using LangChain and OpenAI to generate highly personalized cold emails. The system analyzes campaign goals, lead data, and company information to create contextually relevant outreach messages with high conversion potential.',
      status: 'Coming Soon',
      year: '2025',
      category: 'AI/ML Development',
      githubUrl: 'https://github.com/username/ai-email-generator',
      liveUrl: null,
      mockupImage: 'https://placehold.co/800x400/8b5cf6/ffffff?text=AI+Email+Generator',
      techStack: ['LangChain', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      keyFeatures: [
        'AI-powered email personalization using GPT models',
        'Lead data analysis and company research integration',
        'Campaign goal optimization with A/B testing capabilities',
        'Bulk email generation with personalization at scale',
        'Analytics dashboard for tracking open rates and responses',
        'Template management system with industry-specific variations'
      ]
    }
  }
  
  return projects[props.projectId] || projects['project-3']
})
</script>

<template>
  <div class="work-detail">
    <Navbar class="navbar-detail" />
    
    <main class="main-content">
      <BackNavigation />
      <ProjectHero :projectData="projectData" />
      <ProjectMockup 
        :mockupImage="projectData.mockupImage" 
        :title="projectData.title" 
      />
      <ProjectOverview :description="projectData.description" />
      <KeyFeatures :features="projectData.keyFeatures" />
      <TechStack :techStack="projectData.techStack" />
    </main>

    <Contact />
  </div>
</template>

<style scoped>
.work-detail {
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-color);
}

.main-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
</style>
