<script setup>
import { ref } from 'vue'

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
      
      <div class="navbar-cta desktop-nav">
        <button>Let's chat <span class="arrow"> →</span></button>
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
  min-width: 0;
  flex-shrink: 0;
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
  white-space: nowrap;
  overflow: hidden;
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
  position: relative;
}

.navbar-cta {
  width: auto;
  min-width: 0;
  flex-shrink: 0;
}

/* Responsive Breakpoints */

/* Responsive Breakpoints */

/* Large Desktop */
@media (min-width: 1025px) {
  .navbar-cta button {
    padding: 10px 20px;
    font-size: 0.9em;
  }
}

/* Tablet styles */
@media (max-width: 1024px) and (min-width: 769px) {
  .navbar-cta button {
    padding: 8px 16px;
    font-size: 0.85em;
  }
  
  .avatar-text {
    font-size: 0.75em;
  }
  
  .avatar {
    width: 36px;
  }
}

/* Small tablet styles */
@media (max-width: 768px) and (min-width: 481px) {
  .navbar-cta button {
    padding: 6px 14px;
    font-size: 0.8em;
  }
  
  .avatar-text {
    font-size: 0.7em;
  }
  
  .avatar {
    width: 32px;
  }
  
  .avatar-container {
    gap: 0.4em;
  }
}

/* Mobile styles */
@media (max-width: 480px) {
  .navbar-cta button {
    padding: 6px 12px;
    font-size: 0.75em;
  }
  
  .avatar-text {
    font-size: 0.65em;
  }
  
  .avatar {
    width: 28px;
  }
  
  .avatar-container {
    gap: 0.3em;
  }
}

/* Extra small mobile */
@media (max-width: 360px) {
  .navbar-cta button {
    padding: 5px 10px;
    font-size: 0.7em;
  }
  
  .avatar-text span:not(.avatar-name) {
    display: none; /* Hide the "|" and location on very small screens */
  }
}
</style>
