<template>
  <section class="key-features">
    <div class="section-container">
      <h2 class="section-title">Key Features</h2>
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-item"
          :data-number="String(index + 1).padStart(2, '0')"
        >
          <p class="feature-text">{{ feature }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* Section Containers */
.section-container {
  margin-bottom: 80px;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 32px 0;
  color: var(--text-color);
}

/* Key Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.feature-item {
  padding: 20px;
  background: var(--background-color);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 3px solid var(--primary-color);
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 103, 77, 0.3);
}

.feature-item::before {
  content: attr(data-number);
  position: absolute;
  top: -8px;
  left: 16px;
  background: var(--primary-color);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
}

.feature-text {
  margin: 8px 0 0 0;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .feature-item {
    padding: 16px;
  }
}
</style>
