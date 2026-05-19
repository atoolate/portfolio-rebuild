<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Contact from '../components/Contact.vue'
import BackNavigation from '../components/BackNavigation.vue'
import ProjectHero from '../components/ProjectHero.vue'
import ProjectMockup from '../components/ProjectMockup.vue'
import MobileScreenshots from '../components/MobileScreenshots.vue'
import ProjectOverview from '../components/ProjectOverview.vue'
import KeyFeatures from '../components/KeyFeatures.vue'
import TechStack from '../components/TechStack.vue'

// Import mockup images
import sneakerMockup from '../assets/work/sneakermockup.png'
import fynkMockup from '../assets/work/fynk-mockup.png'
import portfolioMockup from '../assets/work/portfoliomockup.png'

// Import World Cup screenshots
import worldcupToday from '../assets/work/worldcup/today.png'
import worldcupMatches from '../assets/work/worldcup/matches.png'
import worldcupBets from '../assets/work/worldcup/bets.png'
import worldcupGroups from '../assets/work/worldcup/groups.png'
import worldcupRankings from '../assets/work/worldcup/rankings.png'

const router = useRouter()
const props = defineProps(['projectId'])

// Comprehensive project data
const projectData = computed(() => {
  const projects = {
    'project-5': {
      title: 'World Cup Predictions',
      subtitle: 'Private prediction league for World Cup 2026',
      description: 'A production-ready MVP for a private World Cup 2026 prediction league. Friends predict exact scores for every match, predictions lock at kickoff, and scores update automatically from a football API. Built for low infrastructure cost and clean architecture from day one — provider abstraction over football-data.org, server actions for predictions and chat, normalized Postgres schema with RLS, and tournament simulation tests so the scoring engine actually holds up under a full bracket.',
      status: 'In progress',
      year: '2025',
      category: 'AI-Assisted Full-Stack',
      githubUrl: 'https://github.com/atoolate/world-cup-predictions',
      liveUrl: null,
      mockupImage: 'https://placehold.co/800x400/14080E/FF674D?text=World+Cup+Predictions',
      screenshots: [
        { src: worldcupToday, label: 'Today' },
        { src: worldcupMatches, label: 'Matches' },
        { src: worldcupBets, label: 'Open bets' },
        { src: worldcupGroups, label: 'Groups' },
        { src: worldcupRankings, label: 'Rankings' },
      ],
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'football-data.org', 'Vercel'],
      keyFeatures: [
        'Exact-score scoring engine (5/3/2/0 pts) with covering tests',
        'Predictions lock at kickoff; hidden from peers until the whistle',
        'Realtime standings, match chat, and activity feed via Supabase realtime',
        'Provider abstraction over football-data.org so the API can be swapped',
        'Normalized Postgres schema with row-level security and server-side actions',
        'Tournament simulation harness to validate group + knockout flows end-to-end'
      ]
    },
    'project-1': {
      title: '3D Sneaker Shop',
      subtitle: 'Interactive e-commerce with a 3D configurator',
      description: 'A fullstack e-commerce platform built around a Three.js 3D sneaker configurator and a realtime admin dashboard. Customers customize materials and colors live in 3D; the admin side watches orders stream in over websockets and edits inventory in place. Everything is wired end-to-end — frontend, API, database, auth, sockets — by one person.',
      status: 'Live',
      year: '2024',
      category: 'Full-stack',
      githubUrl: 'https://github.com/atoolate/node-api-backend-v1',
      liveUrl: 'https://three-js-sneaker-store.vercel.app/',
      mockupImage: sneakerMockup,
      techStack: ['Three.js', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'Passport.js'],
      keyFeatures: [
        'Realtime 3D sneaker configurator — material and color live updates',
        'Camera controls and lighting that make the product feel handlable',
        'Admin dashboard with order overview and inline edit',
        'Live order tracking over websockets',
      ]
    },
    'project-2': {
      title: 'Social Study App',
      subtitle: 'Productivity meets Strava for studying',
      description: 'A React Native app that turns studying into a social, gamified loop. Pomodoro timers + streaks + a friends feed, so the dopamine that usually goes to Instagram goes to deep work instead. Built end-to-end — UI, Postgres schema, Node API, gamification system — with focus on one-handed mobile UX.',
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
      subtitle: 'This site',
      description: 'Built from scratch with Vue 3 and Vite — no template, no Tailwind, no shortcut. Wireframed first, then iterated component by component. Terminal-inspired aesthetic with a Finder-style project grid and dedicated work detail pages. The point isn\'t that it uses Vue; the point is that the type, spacing, and motion choices are mine.',
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
      subtitle: 'Built for the problem I lived for two years',
      description: 'A LangChain-powered tool that generates personalized cold outreach from campaign goals, lead data, and company context. The novelty isn\'t the AI — it\'s that the prompt structure, the personalization angles, and the guardrails come from two years running an outbound agency for US seed-stage founders. I know exactly which emails got replies and which ones got marked as spam.',
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
  
  return projects[props.projectId] || projects['project-5']
})
</script>

<template>
  <div class="work-detail">
    <Navbar class="navbar-detail" />
    
    <main class="main-content">
      <BackNavigation />
      <ProjectHero :projectData="projectData" />
      <MobileScreenshots
        v-if="projectData.screenshots"
        :screenshots="projectData.screenshots"
      />
      <ProjectMockup
        v-else
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
