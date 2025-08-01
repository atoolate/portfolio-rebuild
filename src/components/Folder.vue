<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  },
  techStack: {
    type: Array,
    default: () => []
  }
})

const navigateToWork = () => {
  if (!props.comingSoon) {
    router.push(`/work/${props.projectId}`)
    }
}
</script>

<template>
  <div class="project-folder" :class="{ 'coming-soon': comingSoon }" @click="navigateToWork">
    <div class="folder-icon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
      </svg>
    </div>
    <div class="folder-info">
      <div class="folder-name">{{ title }}</div>
      <div class="folder-meta">
        <span v-if="techStack.length > 0" class="tech-stack">
          {{ techStack.slice(0, 3).join(', ') }}<span v-if="techStack.length > 3">...</span>
        </span>
        <span v-if="comingSoon" class="coming-soon-badge">WIP</span>
      </div>
    </div>
    <div class="folder-actions">
      <button class="action-btn" @click.stop="navigateToWork" :disabled="comingSoon">
        <span v-if="comingSoon">Coming Soon</span>
        <span v-else>Open →</span>
      </button>
    </div>
  </div>
</template>
 
<style scoped>
.project-folder {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;
  background: var(--background-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.project-folder:hover {
  background: rgba(255, 103, 77, 0.05);
  border-color: rgba(255, 103, 77, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project-folder.coming-soon {
  opacity: 0.6;
  cursor: default;
}

.project-folder.coming-soon:hover {
  background: transparent;
  transform: none;
}

/* Folder Icon */
.folder-icon {
  width: 24px;
  height: 24px;
  margin-right: 16px;
  color: var(--primary-color);
  flex-shrink: 0;
  opacity: 0.8;
}

.folder-icon svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Folder Info */
.folder-info {
  flex: 1;
  min-width: 0;
}

.folder-name {
  color: var(--text-color);
  font-weight: 500;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.folder-meta {
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--text-color);
  opacity: 0.7;
  align-items: center;
}

.tech-count {
  color: var(--primary-color);
  font-weight: 500;
}

.tech-stack {
  color: var(--text-color);
  opacity: 0.8;
  font-style: italic;
}

.coming-soon-badge {
  background: rgba(255, 189, 46, 0.2);
  color: #ffbd2e;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Folder Actions */
.folder-actions {
  margin-left: 20px;
  flex-shrink: 0;
}

.action-btn {
  background: rgba(255, 103, 77, 0.1);
  border: 1px solid rgba(255, 103, 77, 0.3);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  backdrop-filter: blur(10px);
}

.action-btn:hover:not(:disabled) {
  background: rgba(255, 103, 77, 0.2);
  border-color: rgba(255, 103, 77, 0.6);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(255, 103, 77, 0.2);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: rgba(255, 189, 46, 0.3);
  color: #ffbd2e;
}

/* Responsive */
@media (max-width: 768px) {
  .project-folder {
    padding: 12px;
  }
  
  .folder-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  
  .folder-meta {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
  
  .folder-actions {
    margin-left: 16px;
  }
  
  .action-btn {
    padding: 6px 12px;
    font-size: 0.75rem;
  }
}
</style>