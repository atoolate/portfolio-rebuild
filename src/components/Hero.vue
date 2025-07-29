<script setup>
import Banner from './Banner.vue'
</script>

<template>
  <div class="hero">
    <h1>
      Full-stack web developer combining <span>modern web skills</span> with <span>startup-tested</span> grit, 
      <span>self-learning</span>, and experience taking <span>ownership</span> and delivering under pressure <br> in <span>fast-paced</span> teams.
    </h1>
    <Banner />
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
  color: var(--text-color);
  margin-top: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  max-width: 55vw;
}

span {
  font-weight: 100;
  color: var(--primary-color);
}
</style>
