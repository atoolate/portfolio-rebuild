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
    <Folder
      title="3d-sneakershop"
      coverImage="https://placehold.co/600x300"
      projectId="project-1"
      description="A Threejs 3D sneaker configurator, Nodejs API and real-time admin dashboard with live updates."
    />
    <Folder
      title="social-study-app"
      coverImage="https://placehold.co/600x300"
      projectId="project-2"
      description="A React Native app helping students stay focused using science, gamification and social features."
    />
    <Folder
      title="vuejs-portfolio"
      coverImage="https://placehold.co/600x300"
      projectId="project-3"
      description="A Vuejs portfolio website with attention to design and UI/UX to showcase my work and skills."
    />
    <Folder
        title="ai-coldemail-generator"
        coverImage="https://placehold.co/600x300"
        projectId="project-4"
        description="An AI webapp using Langchain AI agents to generate personalized cold emails based on campaign goals and uploaded lead list."
        :comingSoon="true"
    />
  </div>
</template>

<style scoped>
.work-overview {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin-bottom: var(--section-spacing);
  justify-content: center;
}

.folder {
  flex: 1 1 calc(33.333% - 20px);
  max-width: 350px;
  min-width: 280px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .folder {
    flex: 1 1 calc(50% - 20px);
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .folder {
    flex: 1 1 100%;
    max-width: 300px;
  }
}
</style>