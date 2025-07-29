<script setup>
</script>

<template>
  <div class="banner">
    <div class="dot"></div>
    <span>Open to work</span>
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F9F7F3;
  width: fit-content;
  color: var(--banner-text-color);
  padding: 0.2em 1em;
  border-radius: 24px;
  border: 1px solid #B9B6B8;
}
.dot {
  width: 8px;
  height: 8px;
  background-color: #588E29;
  border-radius: 50%;
  margin-right: 10px;
  animation: flicker 2s ease-in-out infinite;
}

@keyframes flicker {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

span {
  font-weight: 300;
  font-size: 0.8em;
  text-transform: uppercase;
  font-family: 'Ubuntu', sans-serif;
}
</style>