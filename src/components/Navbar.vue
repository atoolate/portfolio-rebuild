<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
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
      
      <!-- Desktop Navigation -->
      <ul class="desktop-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/Work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
      <div class="navbar-cta desktop-nav">
        <button>Let's chat <span class="arrow"> →</span></button>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span class="hamburger-line" :class="{ 'open': isMobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'open': isMobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'open': isMobileMenuOpen }"></span>
      </button>
    </nav>
    
    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
      <ul>
        <li><a href="/" @click="toggleMobileMenu">Home</a></li>
        <li><a href="/about" @click="toggleMobileMenu">About</a></li>
        <li><a href="/Work" @click="toggleMobileMenu">Work</a></li>
        <li><a href="/contact" @click="toggleMobileMenu">Contact</a></li>
      </ul>
      <div class="mobile-cta">
        <button @click="toggleMobileMenu">Let's chat <span class="arrow"> →</span></button>
      </div>
    </div>
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

.desktop-nav {
  display: flex;
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
  min-width: 0;
  flex-shrink: 0;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  gap: 4px;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: var(--text-color);
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
}

.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  padding: 20px;
  margin: 0 var(--container-padding);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mobile-nav.open {
  display: block;
}

.mobile-nav ul {
  flex-direction: column;
  gap: 1.5em;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 0;
}

.mobile-nav li {
  text-align: center;
}

.mobile-cta {
  text-align: center;
}

.mobile-cta button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-cta button:hover {
  background-color: var(--text-color);
  transform: translateY(-1px);
}

/* Responsive Breakpoints */

/* Tablet styles - maintain centering */
@media (max-width: 1024px) and (min-width: 769px) {
  ul {
    gap: 1.5em;
  }
  
  .navbar-cta button {
    padding: 8px 16px;
    font-size: 0.9em;
  }
  
  .avatar-text {
    font-size: 0.75em;
  }
}

/* Small tablet styles - tighter spacing but keep layout */
@media (max-width: 900px) and (min-width: 769px) {
  ul {
    gap: 1.2em;
  }
  
  .navbar-cta button {
    padding: 6px 14px;
    font-size: 0.85em;
  }
  
  .avatar-container {
    width: 22%;
  }
  
  .navbar-cta {
    width: 22%;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .avatar-container {
    width: auto;
  }
  
  .navbar-cta {
    display: none;
  }
}
</style>
