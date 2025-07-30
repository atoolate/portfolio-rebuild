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
.hero {
  margin: var(--section-spacing) 0;
  max-width: 55vw;
}

@media screen and (max-width: 768px) {
  .hero {
    max-width: 100%;
    padding: 0 20px;
  }
  h1 {
    font-size: 1.2em;
  }
  
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
