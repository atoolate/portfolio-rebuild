<template>
  <section class="about-section">
    <div 
      class="terminal-container terminal-entrance"
      ref="terminalRef"
      :style="{ 
        width: `${windowSize.width}px`, 
        height: `${windowSize.height}px`,
        transform: `translate(${position.x}px, ${position.y}px)`
      }"
    >
      <div 
        class="terminal-header" 
        @mousedown="startDrag"
        :class="{ 'dragging': isDragging }"
      >
        <div class="terminal-buttons">
          <div class="terminal-button close" @click="closeWindow"></div>
          <div class="terminal-button minimize" @click="minimizeWindow"></div>
          <div class="terminal-button maximize" @click="toggleMaximize"></div>
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
      
      <!-- Resize handles -->
      <div class="resize-handle resize-se" @mousedown="startResize('se')"></div>
      <div class="resize-handle resize-s" @mousedown="startResize('s')"></div>
      <div class="resize-handle resize-e" @mousedown="startResize('e')"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineEmits } from 'vue'

const emit = defineEmits(['close-terminal'])

const journey = [
  { date: '2018–2021', message: 'Completed BA in Media & Entertainment Business' },
  { date: '2022-2023', message: 'Worked as sales consultant for multiple startups and scale-ups' },
  { date: '2023-2025', message: 'Launched Outbound Unicorns (cold email GTM agency for startups)' },
  { date: '2023-2025', message: 'Completed BA in Information Management - Digital Experience Design' },
  { date: '2023', message: 'Started building and shipping fullstack projects' },
  { date: 'Now', message: 'Looking to join a great team fulltime and keep building cool stuff' },
];

// Window state
const terminalRef = ref(null)
const isDragging = ref(false)
const isResizing = ref(false)
const resizeDirection = ref('')
const isMaximized = ref(false)

// Position and size
const position = ref({ x: 0, y: 0 })
const windowSize = ref({ width: 900, height: 400 })
const originalSize = ref({ width: 900, height: 400 })
const dragStart = ref({ x: 0, y: 0 })
const resizeStart = ref({ x: 0, y: 0, width: 0, height: 0 })

// Drag functionality
const startDrag = (e) => {
  if (isMaximized.value) return
  
  isDragging.value = true
  dragStart.value = {
    x: e.clientX - position.value.x,
    y: e.clientY - position.value.y
  }
  
  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDrag)
  e.preventDefault()
}

const drag = (e) => {
  if (!isDragging.value) return
  
  position.value = {
    x: e.clientX - dragStart.value.x,
    y: e.clientY - dragStart.value.y
  }
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
}

// Resize functionality
const startResize = (direction) => {
  if (isMaximized.value) return
  
  isResizing.value = true
  resizeDirection.value = direction
  
  const rect = terminalRef.value.getBoundingClientRect()
  resizeStart.value = {
    x: rect.left,
    y: rect.top,
    width: windowSize.value.width,
    height: windowSize.value.height
  }
  
  document.addEventListener('mousemove', resize)
  document.addEventListener('mouseup', stopResize)
}

const resize = (e) => {
  if (!isResizing.value) return
  
  const direction = resizeDirection.value
  let newWidth = windowSize.value.width
  let newHeight = windowSize.value.height
  
  if (direction.includes('e')) {
    newWidth = Math.max(400, e.clientX - resizeStart.value.x)
  }
  if (direction.includes('s')) {
    newHeight = Math.max(300, e.clientY - resizeStart.value.y)
  }
  
  windowSize.value = { width: newWidth, height: newHeight }
}

const stopResize = () => {
  isResizing.value = false
  resizeDirection.value = ''
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
}

// Window controls
const toggleMaximize = () => {
  if (isMaximized.value) {
    // Restore
    windowSize.value = { ...originalSize.value }
    position.value = { x: 0, y: 0 }
    isMaximized.value = false
  } else {
    // Maximize
    originalSize.value = { ...windowSize.value }
    windowSize.value = { 
      width: Math.min(1200, window.innerWidth - 40), 
      height: Math.min(600, window.innerHeight - 100) 
    }
    position.value = { x: 0, y: 0 }
    isMaximized.value = true
  }
}

const minimizeWindow = () => {
  emit('close-terminal')
}

const closeWindow = () => {
  emit('close-terminal')
}

// Center window on mount
onMounted(() => {
  if (terminalRef.value) {
    const containerWidth = terminalRef.value.parentElement.offsetWidth
    const centerX = Math.max(0, (containerWidth - windowSize.value.width) / 2)
    position.value.x = centerX
    
    // Remove entrance animation class after animation completes
    setTimeout(() => {
      if (terminalRef.value) {
        terminalRef.value.classList.remove('terminal-entrance')
      }
    }, 450) // Slightly longer to ensure animation is fully complete
  }
})

// Cleanup
onUnmounted(() => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
.about-section {
    position: relative;
    z-index: 10; /* Ensure it appears above other content */
}

.terminal-container {
  position: absolute;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.1);
  user-select: none;
  transition: box-shadow 0.2s ease;
}

.terminal-container:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.terminal-header {
  background: #2d2d2d;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: move;
  position: relative;
}

.terminal-header.dragging {
  cursor: grabbing;
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
  transition: all 0.2s ease;
}

.terminal-button:hover {
  transform: scale(1.1);
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
  pointer-events: none;
}

.terminal-content {
  padding: 20px;
  background: #1a1a1a;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  height: calc(100% - 49px);
  overflow-y: auto;
}

/* Resize handles */
.resize-handle {
  position: absolute;
  background: transparent;
}

.resize-handle.resize-se {
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: se-resize;
}

.resize-handle.resize-s {
  bottom: 0;
  left: 20px;
  right: 20px;
  height: 5px;
  cursor: s-resize;
}

.resize-handle.resize-e {
  top: 20px;
  right: 0;
  width: 5px;
  bottom: 20px;
  cursor: e-resize;
}

/* Add visual indicator for resize corner */
.resize-handle.resize-se::after {
  content: '';
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 8px 8px;
  border-color: transparent transparent #555 transparent;
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

/* Mobile responsiveness - disable dragging/resizing on mobile */
@media (max-width: 768px) {
  .about-section {
    min-height: auto;
    padding-top: 2rem; /* Add top padding on mobile */
  }
  
  .terminal-container {
    position: relative !important;
    width: calc(100% - 2rem) !important;
    height: auto !important;
    transform: none !important;
    margin: 1.5rem 1rem 0 1rem; /* Added top margin for mobile */
  }
  
  .terminal-header {
    cursor: default;
  }
  
  .resize-handle {
    display: none;
  }
  
  .terminal-content {
    padding: 16px;
    font-size: 13px;
    height: auto;
  }
  
  .log-entry {
    flex-direction: column;
    gap: 4px;
  }
  
  .timestamp {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding-top: 2.5rem; /* Even more spacing on small mobile */
  }
  
  .terminal-container {
    margin-top: 2rem; /* More top margin for small mobile */
  }
  
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

/* Entrance animation */
.terminal-entrance {
  animation: terminalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes terminalSlideIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
