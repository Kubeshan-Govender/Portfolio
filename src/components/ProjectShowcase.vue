<template>
<section class="projects-section wrap" id="projects" aria-labelledby="projects-title">
  <div class="section-heading section-heading--split">
    <div><p class="section-label">FIELD GUIDE / 02</p><h2 id="projects-title">A few things I’ve <em>made.</em></h2></div>
    <p class="section-heading__aside">A mix of practical software, web work, and experiments. The best way to understand a project is to see what problem it tries to solve.</p>
  </div>

  <div class="project-grid">
    <article v-for="(project, index) in projects" :key="project.title" class="project-card" :class="{ 'project-card--featured': project.featured }">
      <div class="project-card__art" :class="`project-card__art--${project.artType}`" aria-hidden="true">
        <template v-if="project.artType === 'invoice'">
          <div class="mini-window"><div class="mini-window__bar"><span></span><span></span><span></span></div><div class="mini-invoice"><b>INVOICE</b><i></i><i></i><i></i><strong></strong></div><span class="mini-stamp">PAID ✓</span></div><span class="art-orbit art-orbit--one"></span><span class="art-orbit art-orbit--two"></span>
        </template>
        <template v-else-if="project.artType === 'web'">
          <div class="browser-mock"><div class="browser-mock__bar"><span></span><span></span><span></span></div><div class="browser-mock__content"><i></i><b></b><b></b><span></span><span></span><em></em></div></div><span class="sun-dot"></span><span class="leaf-shape leaf-shape--a"></span><span class="leaf-shape leaf-shape--b"></span>
        </template>
        <template v-else>
          <div class="portfolio-tile"><span>hello, world!</span><b>Build with<br /><em>purpose.</em></b><i></i></div><span class="sparkle sparkle--one">✳</span><span class="sparkle sparkle--two">✦</span>
        </template>
      </div>
      <div class="project-card__body">
        <div class="project-card__meta"><span>{{ project.meta }}</span><span class="project-status"><i></i> {{ project.status }}</span></div>
        <h3>{{ project.title }}</h3><p>{{ project.description }}</p>
        <div class="tag-list"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
        <a class="text-link" :href="project.href" target="_blank" rel="noopener noreferrer">Visit repository <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </div>
  <p class="project-note"><span aria-hidden="true">✳</span> These are a few stops along the way. I’m always learning, improving, and adding something new to the map.</p>
</section>
</template>

<script setup>
const projects = [
  {
    title: 'Invoice Builder', featured: true, artType: 'invoice', meta: '01 / DESKTOP TOOL', status: 'Featured',
    description: 'A practical invoicing tool designed to make creating invoices and supporting billing workflows a little easier.',
    tags: ['C#', 'Business tools', 'Desktop'], href: 'https://github.com/Kubeshan-Govender/Invoice-Builder',
  },
  {
    title: 'Car Dealership Website', featured: false, artType: 'web', meta: '02 / WEB', status: 'Client site',
    description: 'A static website built for a local car salesman, focused on presenting information clearly.',
    tags: ['Website', 'Front end'], href: 'https://github.com/Kubeshan-Govender/Car-Dealership.git',
  },
  {
    title: 'Portfolio Website', featured: false, artType: 'portfolio', meta: '03 / WEB', status: 'Personal',
    description: 'A personal home for my projects, learning, and the work I’m proud to share.',
    tags: ['HTML', 'CSS', 'JavaScript'], href: 'https://github.com/Kubeshan-Govender/Curriculam-Vitae.git',
  },
]
</script>
