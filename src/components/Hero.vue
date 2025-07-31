<script setup>
import Banner from './Banner.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['open-terminal'])

const openTerminal = () => {
  emit('open-terminal')
}
</script>

<template>
  <div class="hero">
    <h1>
      Full-stack web developer combining <span>modern web skills</span> with <span>startup-tested</span> grit, 
      <span>self-learning</span>, and experience taking <span>ownership</span> and delivering under pressure in <span>fast-paced</span> teams.
    </h1>
    
    <div class="hero-actions">
      <button class="terminal-trigger" @click="openTerminal">
        <span class="terminal-icon">$</span>
        View my journey
        <span class="hint">→ Click to open</span>
      </button>
    </div>
    <Banner />
  </div>
</template>

<style scoped>
.hero {
  max-width: 55vw;
  padding-right: 10vw;
}

@media screen and (max-width: 768px) {
  .hero {
    max-width: 100%;
    padding: 0 20px;
  }
  h1 {
    font-size: 1.2em;
  }
  
  .hero-actions {
    margin: 2rem 0 3rem 0; /* Increased bottom margin for mobile */
  }
}

.hero-actions {
  margin: 2rem 0;
}

/* Additional mobile spacing for when terminal is open */
@media screen and (max-width: 768px) {
  .terminal-trigger {
    margin-bottom: 2rem; /* Extra spacing below button on mobile */
  }
}

.terminal-trigger {
  background: rgba(26, 26, 26, 0.95);
  color: #e0e0e0;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.terminal-trigger:hover {
  background: rgba(26, 26, 26, 1);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.terminal-icon {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1rem;
}

.hint {
  color: #888;
  font-size: 0.8rem;
  margin-left: auto;
}

.terminal-trigger:hover .hint {
  color: #aaa;
}

h1 {
  font-size: 2em;
  color: var(--text-color);
  margin-top: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
}

span {
  font-weight: 100;
  color: var(--primary-color);
}
</style>
