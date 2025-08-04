<template>
  <section class="project-visual">
    <div class="visual-container">
      <div class="mockup-placeholder">
        <div class="placeholder-content">
          <img 
            :src="mockupImage" 
            :alt="`${title} mockup`"
            class="mockup-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  mockupImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Visual Mockup Section */
.project-visual {
  margin-bottom: 80px;
}

.visual-container {
  background: linear-gradient(135deg, rgba(255, 103, 77, 0.03) 0%, rgba(255, 103, 77, 0.08) 100%);
  border: 1px solid rgba(255, 103, 77, 0.1);
  border-radius: 12px;
  text-align: center;
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.mockup-placeholder {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
}

.mockup-image {
  max-width: 100%;
  max-height: 400px;
  height: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .visual-container {
    padding: 40px 20px;
  }
}
</style>
