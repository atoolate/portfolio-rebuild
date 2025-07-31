<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import WorkOverview from '../components/WorkOverview.vue'
import AboutMe from '../components/AboutMe.vue'
import Contact from '../components/Contact.vue'

const isTerminalVisible = ref(false)

const openTerminal = () => {
  isTerminalVisible.value = true
}

const closeTerminal = () => {
  isTerminalVisible.value = false
}
</script>

<template>
  <body>
    <Navbar class="navbar-home" />
    <main>
      <div class="hero-container">
        <Hero @open-terminal="openTerminal" />
        <AboutMe 
          v-if="isTerminalVisible" 
          @close-terminal="closeTerminal"
        />
      </div>
        
        <WorkOverview />
    </main>
    <Contact />
  </body>
    
</template>

<style scoped>  
.navbar-home {
  margin-bottom: 2rem;
}
main {
  display: flex;
  gap: var(--section-spacing);
  flex-direction: column;
  justify-content: center;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
.hero-container {
  position: relative;
}

</style>