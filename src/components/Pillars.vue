<script setup>
const pillars = [
  {
    slug: '/ product mindset',
    body: 'Two years in sales and GTM before I learned to code. It\'s why I tend to start from the user, not the stack.',
  },
  {
    slug: '/ design sense',
    body: 'BA in Digital Experience Design (distinction). I care a lot about how things look and feel.',
  },
  {
    slug: '/ development',
    body: 'Fullstack TypeScript day to day — Node, n8n, PostgreSQL, webhook orchestration, CRM and ERP integrations.',
  },
  {
    slug: '/ ai-native',
    body: 'Building with Claude and OpenAI daily. Claude Code and Codex are part of how I work now.',
  }
]
</script>

<template>
  <section class="pillars">
    <div class="section-header">
      <h2 class="section-title">
        <span class="path-prefix">alex/</span>
        <span class="path-main">edge</span>
        <span class="path-slash">/</span>
      </h2>
    </div>

    <div class="pillars-grid">
      <article v-for="p in pillars" :key="p.slug" class="pillar">
        <h3 class="pillar-slug">{{ p.slug }}</h3>
        <p class="pillar-body">{{ p.body }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  padding: 0 20px;
}

.section-header {
  max-width: 1200px;
  margin: 0 auto 24px auto;
}

.section-title {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0;
  color: var(--text-color);
  letter-spacing: -0.02em;
}

.path-prefix {
  color: var(--text-color);
  opacity: 0.5;
  font-weight: 300;
}

.path-main {
  color: var(--primary-color);
  font-weight: 500;
}

.path-slash {
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 300;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.pillar {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  background: var(--background-color);
  transition: all 0.2s ease;
}

.pillar:hover {
  border-color: rgba(255, 103, 77, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.pillar-slug {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.95rem;
  color: var(--primary-color);
  margin: 0 0 12px 0;
  font-weight: 500;
}

.pillar-body {
  font-size: 0.95rem;
  color: var(--text-color);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 768px) {
  .pillars {
    padding: 0 16px;
  }
  .section-title {
    font-size: 2rem;
  }
  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
