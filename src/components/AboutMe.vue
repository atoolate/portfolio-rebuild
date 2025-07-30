<template>
  <section class="about-section">
    
    <div class="terminal-container">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <div class="terminal-button close"></div>
          <div class="terminal-button minimize"></div>
          <div class="terminal-button maximize"></div>
        </div>
        <div class="terminal-title">journey.log</div>
      </div>
      
      <div class="terminal-content">
        <div class="terminal-prompt">
          <span class="prompt-symbol">$</span>
          <span class="prompt-command">cat journey.log</span>
        </div>
        
        <div v-for="(line, index) in journey" :key="index" class="log-entry">
          <span class="timestamp">[{{ line.date }}]</span>
          <span class="arrow">→</span>
          <span class="message">{{ line.message }}</span>
        </div>
        
        <div class="terminal-prompt current">
          <span class="prompt-symbol">$</span>
          <span class="cursor">_</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const journey = [
  { date: '2018–2021', message: 'Completed BA in Media & Entertainment Business' },
  { date: '2022-2023', message: 'Worked as sales consultant for multiple startups and scale-ups' },
  { date: '2023-2025', message: 'Launched Outbound Unicorns (cold email GTM agency for startups)' },
  { date: '2023-2025', message: 'Completed BA in Information Management - Digital Experience Design' },
  { date: '2023', message: 'Started building and shipping fullstack projects' },
  { date: 'Now', message: 'Looking to join a great team fulltime and keep building cool stuff' },
];
</script>

<style scoped>
.about-section {
    margin-bottom: var(--section-spacing);
}

.terminal-container {
  max-width: 900px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.terminal-header {
  background: #2d2d2d;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.terminal-button.close {
  background: #ff5f57;
}

.terminal-button.minimize {
  background: #ffbd2e;
}

.terminal-button.maximize {
  background: #28ca42;
}

.terminal-title {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  color: #e0e0e0;
  font-weight: 500;
}

.terminal-content {
  padding: 20px;
  background: #1a1a1a;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.terminal-prompt {
  color: #e0e0e0;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.terminal-prompt.current {
  margin-bottom: 0;
  margin-top: 16px;
}

.prompt-symbol {
  color: var(--primary-color);
  font-weight: 600;
}

.prompt-command {
  color: #a0a0a0;
}

.cursor {
  color: var(--primary-color);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.log-entry {
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 0;
  transition: all 0.2s ease;
}

.log-entry:hover {
  background: rgba(255, 103, 77, 0.05);
  border-radius: 4px;
  padding-left: 8px;
  margin-left: -8px;
  margin-right: -8px;
}

.timestamp {
  color: #888;
  font-weight: 500;
  flex-shrink: 0;
  min-width: 100px;
}

.arrow {
  color: var(--primary-color);
  font-weight: 600;
  flex-shrink: 0;
}

.message {
  color: #e0e0e0;
  flex: 1;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .terminal-container {
    margin: 0 1rem;
  }
  
  .terminal-content {
    padding: 16px;
    font-size: 13px;
  }
  
  .log-entry {
    flex-direction: column;
    gap: 4px;
  }
  
  .timestamp {
    min-width: auto;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .terminal-content {
    padding: 12px;
    font-size: 12px;
  }
  
  .terminal-header {
    padding: 10px 12px;
  }
  
  .terminal-title {
    font-size: 0.8rem;
  }
}
</style>
