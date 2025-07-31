<template>
  <section class="contact-section">
    <div class="contact-content">
      <h2>Let's work together</h2>
      <p class="contact-description">
        Open to full-time opportunities and interesting projects. 
        Drop me a line if you think we'd be a good fit.
      </p>
      
      <div class="contact-action">
        <a href="mailto:alexdelaet00@gmail.com" class="email-button">
          alexdelaet00@gmail.com
        </a>
      </div>
      
      <div class="contact-links">
        <a href="https://www.linkedin.com/in/alex-de-laet/" target="_blank" class="contact-link">
          LinkedIn
        </a>
        <span class="separator">·</span>
        <a href="https://github.com/atoolate" target="_blank" class="contact-link">
          GitHub
        </a>
        <span class="separator">·</span>
        <a href="https://calendly.com/alexdelaet00/30min" target="_blank" class="contact-link">
          Schedule call
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript needed for this minimal design
</script>

<style scoped>
.contact-section {
  padding: var(--section-spacing) var(--container-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--text-color);
  margin: 0 0 1rem 0;
  font-family: 'Ubuntu', sans-serif;
}

.contact-description {
  font-size: 1.1rem;
  color: #888;
  line-height: 1.6;
  margin: 0 0 3rem 0;
  font-weight: 300;
}

.contact-action {
  margin-bottom: 2rem;
}

.email-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 103, 77, 0.1);
  border: 1px solid rgba(255, 103, 77, 0.2);
  border-radius: 8px;
  color: var(--primary-color);
  text-decoration: none;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.email-button:hover {
  background: rgba(255, 103, 77, 0.15);
  border-color: rgba(255, 103, 77, 0.4);
  transform: translateY(-2px);
}

.email-icon {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.2rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-link {
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--text-color);
}

.separator {
  color: #444;
  font-size: 0.8rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  
  .contact-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .email-button {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 3rem 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .contact-description {
    font-size: 0.95rem;
  }
  
  .email-button {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
  
  .contact-links {
    gap: 0.75rem;
  }
  
  .contact-link {
    font-size: 0.85rem;
  }
}
</style>
