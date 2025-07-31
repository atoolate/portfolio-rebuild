<template>
  <section class="contact-section">
    <div class="contact-content">
      <h2 class="contact-title">Let's Connect</h2>
      <p class="contact-subtitle">Ready to build something great together?</p>
      
      <div class="contact-methods">
        <div class="email-section">
          <span class="contact-label">Drop me an email at:</span>
          <a href="mailto:alexdelaet00@gmail.com" class="email-link">
            alexdelaet00@gmail.com
          </a>
        </div>
        
        <div class="divider">
          <span>or</span>
        </div>
        
        <div class="call-section">
          <span class="contact-label">If you prefer a quick chat:</span>
          <a href="#" class="schedule-button" @click="openCalendar">
            Schedule a Call
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
      
      <div class="social-links">
        <a href="#" class="social-link" title="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" class="social-link" title="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="#" class="social-link" title="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const openCalendar = () => {
  // Replace with your actual calendar booking link
  window.open('https://calendly.com/alexdelaet', '_blank')
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: clamp(4rem, 10vw, 8rem) var(--container-padding);
  margin-top: var(--section-spacing);
  color: white;
}

.contact-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
  font-family: var(--font-family-body);
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #b0b0b0;
  margin: 0 0 3rem 0;
  font-weight: 400;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.email-section,
.call-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contact-label {
  font-size: 1rem;
  color: #888;
  font-weight: 500;
}

.email-link {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  padding: 1rem 2rem;
  background: rgba(255, 103, 77, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 103, 77, 0.2);
  transition: all 0.3s ease;
}

.email-link:hover {
  background: rgba(255, 103, 77, 0.15);
  border-color: rgba(255, 103, 77, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 103, 77, 0.2);
}

.divider {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 60px;
  height: 1px;
  background: #444;
}

.divider::before {
  right: calc(100% + 1rem);
}

.divider::after {
  left: calc(100% + 1rem);
}

.schedule-button {
  background: transparent;
  color: white;
  border: 1px solid #555;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-family-body);
}

.schedule-button:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.schedule-button .arrow {
  transition: transform 0.3s ease;
}

.schedule-button:hover .arrow {
  transform: translateX(4px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  color: #888;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .contact-methods {
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .email-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
  }
  
  .divider::before,
  .divider::after {
    width: 40px;
  }
  
  .social-links {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 3rem 1.5rem;
  }
  
  .contact-methods {
    gap: 1rem;
  }
  
  .email-link {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
  
  .schedule-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
