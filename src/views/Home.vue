<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'

const count = ref(0)

</script>

<template>
    <Navbar />
    <main>
        <Hero />
    </main>
</template>

<style scoped>  
main {
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  justify-content: center;
  height: 50vh;
}
</style>