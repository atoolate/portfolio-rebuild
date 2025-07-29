<script setup>
import { defineProps } from 'vue'

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
  },
  description: {
    type: String,
    default: ''
  },
  comingSoon: {
    type: Boolean,
    default: false
  }
})

const navigateToWork = () => {
  // Navigate to work detail page - you can implement router logic here
  console.log('Navigate to work:', props.projectId)
}
</script>

<template>
  <div class="folder" :class="{ 'coming-soon': comingSoon }" :title="description">
    <!-- Coming Soon Tag -->
    <div v-if="comingSoon" class="coming-soon-tag">Coming Soon</div>
    
    <div class="folder-tab">
      <span class="folder-title">{{ title }}</span>
    </div>
    <div class="folder-content">
      <div class="cover-image">
        <img :src="coverImage" :alt="title" />
      </div>
      <button class="view-button" @click="navigateToWork">
        View<span class="arrow"> →</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.folder {
  width: 280px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
  position: relative;
}

.folder:hover {
  transform: translateY(-2px);
}

.folder-tab {
  background-color: var(--background-color);
  border: 1px solid #E5E5E5;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  padding: 8px 16px;
  width: fit-content;
  min-width: 120px;
}

.folder-title {
  font-family: 'Ubuntu', sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  color: var(--text-color);
}

.folder-content {
  background-color: var(--background-color);
  border: 1px solid #E5E5E5;
  border-radius: 0 8px 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cover-image {
  width: 100%;
  height: 200px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.view-button {
  background-color: var(--text-color);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 0.85em;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;
  overflow: hidden;
}

.view-button .arrow {
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.2s ease;
  display: inline-block;
  width: 0;
}

.view-button:hover {
  background-color: var(--primary-color);
  transform: translateY(-1px);
  padding: 8px 24px;
}

.view-button:hover .arrow {
  opacity: 1;
  transform: translateX(0);
  width: auto;
}
.view-button:hover span {
  padding-left: 5px;
}

/* Coming Soon Styles */
.folder.coming-soon {
  opacity: 0.5;
  pointer-events: none;
  filter: grayscale(50%);
}

.coming-soon-tag {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 0.7em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>