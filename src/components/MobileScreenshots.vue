<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  screenshots: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
const touchStartX = ref(0)

const goNext = () => {
  if (currentIndex.value < props.screenshots.length - 1) currentIndex.value++
}

const goPrev = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const goTo = (i) => {
  currentIndex.value = i
}

const handleKey = (e) => {
  const tag = e.target?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA') return
  if (e.key === 'ArrowRight') goNext()
  else if (e.key === 'ArrowLeft') goPrev()
}

const onTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const onTouchEnd = (e) => {
  const diff = touchStartX.value - e.changedTouches[0].screenX
  if (Math.abs(diff) > 50) {
    if (diff > 0) goNext()
    else goPrev()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>

<template>
  <section class="mobile-screenshots">
    <!-- Desktop grid: all phones fit in viewport -->
    <div class="phones-grid">
      <figure v-for="(shot, i) in screenshots" :key="`grid-${i}`" class="phone">
        <div class="phone-frame">
          <div class="phone-screen">
            <img :src="shot.src" :alt="shot.label || `Screenshot ${i + 1}`" loading="lazy" />
          </div>
        </div>
        <figcaption v-if="shot.label" class="phone-label">{{ shot.label }}</figcaption>
      </figure>
    </div>

    <!-- Mobile carousel: single phone, swipe / arrow keys / dots -->
    <div class="phones-carousel" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
      <div class="carousel-viewport">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <figure v-for="(shot, i) in screenshots" :key="`car-${i}`" class="phone carousel-item">
            <div class="phone-frame">
              <div class="phone-screen">
                <img :src="shot.src" :alt="shot.label || `Screenshot ${i + 1}`" loading="lazy" />
              </div>
            </div>
            <figcaption v-if="shot.label" class="phone-label">{{ shot.label }}</figcaption>
          </figure>
        </div>
      </div>

      <div class="carousel-controls">
        <button
          class="nav-btn"
          @click="goPrev"
          :disabled="currentIndex === 0"
          aria-label="Previous screenshot"
        >←</button>
        <div class="dots">
          <button
            v-for="(_, i) in screenshots"
            :key="`dot-${i}`"
            @click="goTo(i)"
            :class="['dot', { active: i === currentIndex }]"
            :aria-label="`Go to screenshot ${i + 1}`"
          ></button>
        </div>
        <button
          class="nav-btn"
          @click="goNext"
          :disabled="currentIndex === screenshots.length - 1"
          aria-label="Next screenshot"
        >→</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-screenshots {
  margin: 2rem 0 3rem 0;
  width: 100%;
}

/* ---------- Desktop grid ---------- */
.phones-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(0.5rem, 1.5vw, 1.25rem);
  width: 100%;
  padding: 1rem 0;
}

.phone {
  margin: 0;
  flex-shrink: 0;
}

.phone-frame {
  width: clamp(140px, 17vw, 200px);
  aspect-ratio: 9 / 19.5;
  background: #1a1a1a;
  border-radius: 28px;
  padding: 5px;
  border: 1px solid #2a2a2a;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 10px 28px rgba(0, 0, 0, 0.16);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.phones-grid .phone-frame:hover {
  transform: translateY(-4px);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 16px 36px rgba(0, 0, 0, 0.22);
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: #000;
  position: relative;
}

.phone-screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.phone-label {
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.78rem;
  color: var(--text-color);
  opacity: 0.65;
  letter-spacing: 0.02em;
}

/* ---------- Mobile carousel ---------- */
.phones-carousel {
  display: none;
  width: 100%;
  user-select: none;
}

.carousel-viewport {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: flex-start;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.phones-carousel .phone-frame {
  width: clamp(220px, 60vw, 280px);
  border-radius: 32px;
  padding: 6px;
}

.phones-carousel .phone-screen {
  border-radius: 27px;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.nav-btn {
  background: rgba(255, 103, 77, 0.1);
  border: 1px solid rgba(255, 103, 77, 0.3);
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background: rgba(255, 103, 77, 0.2);
  border-color: rgba(255, 103, 77, 0.5);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot.active {
  background: var(--primary-color);
  transform: scale(1.3);
}

/* ---------- Breakpoint: switch grid → carousel ---------- */
@media (max-width: 767px) {
  .phones-grid {
    display: none;
  }
  .phones-carousel {
    display: block;
  }
}
</style>
