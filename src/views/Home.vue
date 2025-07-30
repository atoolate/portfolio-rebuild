<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import WorkOverview from '../components/WorkOverview.vue'
import AboutMe from '../components/AboutMe.vue'
const count = ref(0)

</script>

<template>
  <body>
    <Navbar />
    <main>
        <Hero />
        <AboutMe />
        <WorkOverview />
    </main>
  </body>
    
</template>

<style scoped>  
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
</style>