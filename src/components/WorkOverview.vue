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
      title="work/3d-sneakershop"
      coverImage="https://placehold.co/600x300"
      projectId="project-1"
      description="A Threejs 3D sneaker configurator, Nodejs API and real-time admin dashboard with live updates."
    />
    <Folder
      title="work/social-study-app"
      coverImage="https://placehold.co/600x300"
      projectId="project-2"
      description="A React Native app helping students stay focused using science, gamification and social features."
    />
    <Folder
        title="work/ai-coldemail-generator"
        coverImage="https://placehold.co/600x300"
        projectId="project-3"
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
}
.folder {
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .folder {
    flex: 1 1 calc(50% - 20px);
  }
}
@media (max-width: 480px) {
  .folder {
    flex: 1 1 100%;
  }
}
</style>