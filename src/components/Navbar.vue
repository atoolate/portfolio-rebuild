<script setup>

</script>

<template>
  <div class="navbar">
    <nav>
      <div class="avatar-container">
        <img src="../assets/avatarAlex.png" alt="favicon" class="avatar" />
        <div class="avatar-text">
          <span class="avatar-name">Alex</span>
          <span>|</span>
          <span class="avatar-location">Antwerp, Belgium</span>
        </div>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/Work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="navbar-cta">
        <button>Let's chat</button>
      </div>
    </nav>   
  </div>
</template>

<style scoped>
.avatar-container {
  display: flex;
  align-items: center;
  width: 25%;
  gap: 0.5em;
}
.avatar {
  width: 40px;
  border-radius: 50%;
}
.avatar-text {
  display: flex;
  color: var(--text-color);
  font-size: 0.8em;
  gap: 0.2em;
}
.avatar-name {
  font-weight: 300;
  font-family: 'Cabin', sans-serif;
}
.avatar-location {
  font-weight: 300;
}
.navbar {
  color: var(--text-color);
  padding: 1em 0;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  margin-bottom: var(--section-spacing);
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  width: 100%;
}
li a {
  color: var(--text-color);
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
}
li a:hover {
  text-decoration: underline;
}
.navbar-cta {
  width: 25%;
}
</style>
