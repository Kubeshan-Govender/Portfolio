<template>
<a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <nav class="nav wrap" aria-label="Main navigation">
      <a class="brand" href="#top" aria-label="Kubeshan Govender home">
        <span class="brand__mark" aria-hidden="true">kg<span>.</span></span>
        <span class="brand__text">Kubeshan Govender <small>PERSONAL FIELD GUIDE / 2026</small></span>
      </a>
      <div class="nav__links">
        <a href="#atlas">Explore</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#credentials">Credentials</a>
      </div>
      <a class="nav__contact" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="main">
    <section class="hero wrap" id="top" aria-labelledby="hero-title">
      <div class="hero__copy">
        <div class="eyebrow"><span class="eyebrow__dot"></span> SOFTWARE DEVELOPER · SOUTH AFRICA</div>
        <h1 id="hero-title">A map of what I’ve <em>made, learned,</em> and where I’m headed.</h1>
        <p class="hero__intro">Hey, I’m <strong>Kubeshan</strong>. I build useful software, study how things work, and collect new skills along the way. Pick a checkpoint and take a look around.</p>
        <div class="hero__actions">
          <a class="button button--primary" href="#atlas">Start exploring <span aria-hidden="true">↘</span></a>
          <a class="button button--quiet" href="assets/docs/Kubeshan-Govender-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero__signature">
          <span class="avatar"><img :src="`${assetBase}assets/images/profile.jpg`" alt="" @error="handleAvatarError" /></span>
          <span><strong>Kubeshan Govender</strong><small>BSc Applied Mathematics &amp; Computer Science</small></span>
          <span class="signature__line" aria-hidden="true"></span>
          <span class="signature__note">curiosity lives here <span aria-hidden="true">✳</span></span>
        </div>
      </div>

      <div class="hero__visual" aria-label="An illustrated green island with winding paths, trees and a tiny developer cabin">
        <div class="visual-note visual-note--top"><span class="note-icon">✳</span><span><strong>Keep exploring</strong><small>There’s more than one path.</small></span></div>
        <svg class="hero-landscape" viewBox="0 0 640 550" role="img" aria-labelledby="landscape-title" xmlns="http://www.w3.org/2000/svg">
          <title id="landscape-title">A calm illustrated landscape with green hills and a path leading to a little studio</title>
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#dcebe0"/><stop offset="1" stop-color="#f3f4e8"/></linearGradient>
            <linearGradient id="hill" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b7d5a9"/><stop offset="1" stop-color="#729b73"/></linearGradient>
            <linearGradient id="hillDark" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#87b18a"/><stop offset="1" stop-color="#537d65"/></linearGradient>
          </defs>
          <rect width="640" height="550" rx="30" fill="url(#sky)"/>
          <circle cx="507" cy="88" r="35" fill="#f4d99a" opacity=".9"/>
          <g fill="#fffdf4" opacity=".88"><ellipse cx="126" cy="104" rx="49" ry="18"/><ellipse cx="151" cy="91" rx="31" ry="23"/><ellipse cx="176" cy="105" rx="37" ry="16"/><ellipse cx="394" cy="142" rx="40" ry="15"/><ellipse cx="419" cy="130" rx="28" ry="20"/><ellipse cx="447" cy="145" rx="34" ry="13"/></g>
          <path d="M0 290 C68 230 118 259 172 227 C247 180 289 227 344 244 C413 265 456 209 513 231 C559 248 601 223 640 236 L640 550 L0 550Z" fill="#d1e2c6"/>
          <path d="M0 339 C79 271 137 314 206 278 C269 245 315 277 373 302 C430 325 481 265 531 286 C578 302 616 286 640 299 L640 550 L0 550Z" fill="url(#hill)"/>
          <path d="M0 406 C69 357 112 378 181 343 C240 314 283 355 324 376 C381 405 435 351 488 359 C554 370 593 337 640 351 L640 550 L0 550Z" fill="url(#hillDark)"/>
          <path d="M-8 514 C97 436 180 482 243 436 C301 394 342 406 365 443 C391 483 458 484 505 440 C553 393 606 424 650 444" fill="none" stroke="#e8d9af" stroke-width="44" stroke-linecap="round"/>
          <path d="M-8 514 C97 436 180 482 243 436 C301 394 342 406 365 443 C391 483 458 484 505 440 C553 393 606 424 650 444" fill="none" stroke="#fff2ce" stroke-width="3" stroke-dasharray="3 13" stroke-linecap="round" opacity=".95"/>
          <g transform="translate(294 292)">
            <ellipse cx="52" cy="117" rx="75" ry="15" fill="#3e654b" opacity=".17"/>
            <path d="M11 52 L53 22 L95 52 V105 H11Z" fill="#f6f1dc"/>
            <path d="M1 54 L53 13 L105 54Z" fill="#6f8f6d"/>
            <path d="M48 105 V75 Q53 66 62 75 V105" fill="#d7b87b"/>
            <rect x="22" y="65" width="17" height="17" rx="2" fill="#b5d3c5"/>
            <path d="M22 73.5 H39 M30.5 65 V82" stroke="#f6f1dc" stroke-width="2"/>
            <rect x="69" y="65" width="17" height="17" rx="2" fill="#b5d3c5"/>
            <path d="M69 73.5 H86 M77.5 65 V82" stroke="#f6f1dc" stroke-width="2"/>
            <rect x="83" y="36" width="7" height="24" rx="1" fill="#c2b293"/>
            <path d="M82 36 L86.5 27 L91 36Z" fill="#f4dfad"/>
          </g>
          <g fill="#416c51"><circle cx="90" cy="334" r="23"/><circle cx="113" cy="322" r="27"/><circle cx="130" cy="342" r="21"/><rect x="106" y="344" width="9" height="25" rx="3" fill="#8c7350"/><circle cx="522" cy="329" r="25"/><circle cx="544" cy="316" r="29"/><circle cx="566" cy="339" r="23"/><rect x="540" y="340" width="9" height="29" rx="3" fill="#8c7350"/></g>
          <g fill="#a6c99a"><circle cx="91" cy="326" r="11"/><circle cx="120" cy="331" r="10"/><circle cx="533" cy="319" r="12"/><circle cx="558" cy="333" r="11"/></g>
          <g fill="#f8f0d8"><circle cx="234" cy="391" r="4"/><circle cx="253" cy="384" r="3"/><circle cx="266" cy="404" r="4"/><circle cx="465" cy="401" r="3"/><circle cx="478" cy="392" r="4"/><circle cx="493" cy="409" r="3"/></g>
          <g transform="translate(70 191)"><path d="M10 30 C10 13 22 3 37 3 C50 3 59 14 59 30Z" fill="#fffdf4"/><rect x="18" y="28" width="34" height="26" rx="3" fill="#f8f0d8"/><path d="M14 30 L35 13 L57 30Z" fill="#d7aa89"/><rect x="31" y="37" width="8" height="17" rx="1" fill="#a7cbb5"/></g>
          <g transform="translate(455 218)" fill="#f5f2dc"><path d="M0 26 Q10 6 20 26 Q32 1 44 26 Q56 8 66 26Z"/><rect x="22" y="26" width="25" height="5" rx="2" fill="#f5f2dc"/></g>
          <g stroke="#4c7659" stroke-width="2" stroke-linecap="round" opacity=".55"><path d="M183 327 l-5 -13 M183 327 l6 -12 M216 356 l-6 -12 M216 356 l7 -11 M402 340 l-4 -11 M402 340 l7 -9 M449 374 l-4 -12 M449 374 l7 -10"/></g>
        </svg>
        <div class="visual-note visual-note--bottom"><span class="pin-spark">✦</span><span><strong>One map, many routes</strong><small>Projects · learning · experience</small></span></div>
      </div>
      <div class="hero__seal" aria-hidden="true"><span>MADE WITH</span><strong>curiosity</strong><span>&amp; a little caffeine</span><b>↗</b></div>
    </section>

    <AtlasExplorer />

    <section class="intro-strip wrap" id="about" aria-label="About me">
      <p class="section-label">A LITTLE ABOUT ME</p>
      <p class="intro-strip__text">I like when technology feels <em>useful, clear, and a little delightful.</em> My background in applied mathematics and computer science shapes how I solve problems — whether I’m building a business tool, a website, or experimenting with an interactive idea.</p>
      <a class="text-link" href="#journey">More about my journey <span aria-hidden="true">→</span></a>
    </section>

    <ProjectShowcase />

    <section class="journey-section" id="journey" aria-labelledby="journey-title">
      <div class="wrap">
        <div class="section-heading section-heading--split">
          <div><p class="section-label">FIELD GUIDE / 03</p><h2 id="journey-title">The route that got me <em>here.</em></h2></div>
          <p class="section-heading__aside">Every role added a different tool to the backpack — from hands-on teamwork to software and systems.</p>
        </div>
        <div class="timeline">
          <article class="timeline-item timeline-item--current"><div class="timeline-marker"><span>✳</span></div><div class="timeline-date">FEB 2026 — PRESENT <span class="current-tag">CURRENT</span></div><div class="timeline-card"><p class="timeline-card__type">SOFTWARE DEVELOPMENT</p><h3>Junior Software Developer</h3><p class="timeline-card__place">Traq Software Solutions</p><ul><li>Contributing to software development work in a professional development environment.</li><li>Applying programming, debugging, and problem-solving skills to support production-ready solutions.</li><li>Collaborating with team members to understand requirements and deliver reliable features.</li></ul></div></article>
          <article class="timeline-item"><div class="timeline-marker"><span>↗</span></div><div class="timeline-date">APR 2025 — DEC 2025</div><div class="timeline-card"><p class="timeline-card__type">LEADERSHIP &amp; COMMUNITY</p><h3>Regional Representative &amp; Deputy Treasurer</h3><p class="timeline-card__place">Unisa Developer Society (UDS)</p><ul><li>Represented the society in KwaZulu-Natal and engaged with members and university stakeholders.</li><li>Helped track expenses, estimate budgets, and support account reconciliation.</li></ul></div></article>
          <article class="timeline-item"><div class="timeline-marker"><span>⌘</span></div><div class="timeline-date">2023 — PRESENT</div><div class="timeline-card"><p class="timeline-card__type">IT, ADMIN &amp; OPERATIONS</p><h3>IT Support, Admin &amp; Fleet Maintenance Assistant</h3><p class="timeline-card__place">Faith Trucking</p><ul><li>Automated delivery-note data capture to improve efficiency and accuracy.</li><li>Handled invoicing, statements, client email communication, and day-to-day computer support.</li></ul></div></article>
          <article class="timeline-item"><div class="timeline-marker"><span>✦</span></div><div class="timeline-date">2019 — 2023</div><div class="timeline-card"><p class="timeline-card__type">HANDS-ON TEAMWORK</p><h3>Marquee Rigger</h3><p class="timeline-card__place">Faith Marquee Hire</p><ul><li>Installed, dismantled, and maintained event structures for private and corporate events.</li><li>Worked collaboratively in high-pressure environments with strict deadlines.</li></ul></div></article>
        </div>
      </div>
    </section>

    <section class="toolkit-section wrap" id="toolkit" aria-labelledby="toolkit-title">
      <div class="section-heading section-heading--split">
        <div><p class="section-label">FIELD GUIDE / 04</p><h2 id="toolkit-title">Tools in my <em>backpack.</em></h2></div>
        <p class="section-heading__aside">The languages, frameworks, and working habits I use to turn ideas into something real.</p>
      </div>
      <div class="toolkit-grid">
        <article class="toolkit-card"><div class="toolkit-card__icon">&lt;/&gt;</div><p class="toolkit-card__label">01 · BUILD</p><h3>Development</h3><div class="skill-chips"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>C#</span><span>Unity</span><span>C++</span><span>.NET Framework</span><span>Qt Framework</span></div></article>
        <article class="toolkit-card"><div class="toolkit-card__icon">⌘</div><p class="toolkit-card__label">02 · STRUCTURE</p><h3>Data &amp; systems</h3><div class="skill-chips"><span>SQL</span><span>Microsoft SQL Server</span><span>Full-stack development</span><span>Microsoft Office</span><span>Data systems</span></div></article>
        <article class="toolkit-card"><div class="toolkit-card__icon">✳</div><p class="toolkit-card__label">03 · APPROACH</p><h3>How I work</h3><div class="skill-chips"><span>Debugging</span><span>Problem solving</span><span>Team collaboration</span><span>Technical communication</span><span>Practical thinking</span></div></article>
      </div>
    </section>

    <section class="credentials-section" id="credentials" aria-labelledby="credentials-title">
      <div class="wrap">
        <div class="section-heading section-heading--split">
          <div><p class="section-label">FIELD GUIDE / 05</p><h2 id="credentials-title">Little milestones, <em>collected.</em></h2></div>
          <p class="section-heading__aside">My learning shelf, from formal education to technical courses, professional development, and community events. Open a folder to see the details.</p>
        </div>
        <div class="credentials-layout">
          <div class="credentials-intro"><div class="credential-badge" aria-hidden="true"><span>✦</span><i></i></div><p class="section-label">THE LEARNING SHELF</p><h3>Always room<br />for one more skill.</h3><p>Each certificate is a small marker of something explored, practised, or completed.</p><div class="credential-count"><strong>27</strong><span>listed learning<br />and achievement items</span></div></div>
          <div class="credential-folders">
            <details class="credential-folder" open>
              <summary><span class="folder-emoji">⌂</span><span class="folder-summary"><strong>Education</strong><small>UNISA &amp; secondary school</small></span><span class="folder-count">03</span><span class="folder-chevron" aria-hidden="true">↘</span></summary>
              <div class="credential-files">
                <a href="assets/certs/education/degree.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>BSc Applied Mathematics &amp; Computer Science</strong><small>University of South Africa (UNISA) · Completed 2026</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/education/NSC-certificate.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>National Senior Certificate</strong><small>Mountview Secondary School · Graduated 2022</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/education/Matric-Merit.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Matric Merit Certificate</strong><small>Mountview Secondary School</small></span><span class="file-arrow">↗</span></a>
              </div>
            </details>
            <details class="credential-folder">
              <summary><span class="folder-emoji">✳</span><span class="folder-summary"><strong>IBM</strong><small>AI &amp; software development</small></span><span class="folder-count">03</span><span class="folder-chevron" aria-hidden="true">↘</span></summary>
              <div class="credential-files">
                <a href="assets/certs/ibm/IBM_Building_AI_Agent.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Intelligent by Design: Build an AI Agent</strong><small>IBM · Certificate of Completion</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/ibm/IBM_AI_Coding_Cert.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Using Generative AI for Software Development</strong><small>IBM · Certificate of Completion</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/ibm/IBM_Granite_Cert.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>IBM Granite Models for Software Development</strong><small>IBM · Certificate of Completion</small></span><span class="file-arrow">↗</span></a>
              </div>
            </details>
            <details class="credential-folder">
              <summary><span class="folder-emoji">❋</span><span class="folder-summary"><strong>BPESA</strong><small>Professional &amp; leadership development</small></span><span class="folder-count">18</span><span class="folder-chevron" aria-hidden="true">↘</span></summary>
              <div class="credential-files">
                <a href="assets/certs/bpesa/Advanced Active Listening for Customer Insights.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Advanced Active Listening for Customer Insights</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/AI Transformation Leader.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>AI Transformation Leader</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Change Management.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Change Management</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Communicating Through Conflict.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Communicating Through Conflict</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Conflict Management.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Conflict Management</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Empowering Employee Decision Making.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Empowering Employee Decision Making</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Giving Effective Feedback.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Giving Effective Feedback</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Innovation.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Innovation</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Leading by Example.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Leading by Example</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Leading Through Crisis.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Leading Through Crisis</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Leading with Empathy and Social Skills.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Leading with Empathy and Social Skills</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Performance Reviews 101.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Performance Reviews 101</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Planning and Delegation in a Team Setting.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Planning and Delegation in a Team Setting</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Planning and Delegation.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Planning and Delegation</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Productivity Tools and Techniques.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Productivity Tools and Techniques</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Safeguarding Policy.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Safeguarding Policy</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/Strategic Thinking.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Strategic Thinking</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/bpesa/The Leadership Voice.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>The Leadership Voice</strong><small>BPESA</small></span><span class="file-arrow">↗</span></a>
              </div>
            </details>
            <details class="credential-folder">
              <summary><span class="folder-emoji">✦</span><span class="folder-summary"><strong>Microsoft</strong><small>AI leadership &amp; verification</small></span><span class="folder-count">01</span><span class="folder-chevron" aria-hidden="true">↘</span></summary>
              <div class="credential-files">
                <a href="assets/certs/microsoft/Microsoft-AI Transformation Leader.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>AI Transformation Leader</strong><small>Microsoft</small></span><span class="file-arrow">↗</span></a>
                <a href="https://learn.microsoft.com/api/credentials/share/en-us/KUBESHANGOVENDER-9445/29689969172E3030?sharingId=76B064C826971E30" target="_blank" rel="noopener noreferrer"><span class="file-icon">↗</span><span><strong>Verify online</strong><small>Microsoft Learn · Credential verification</small></span><span class="file-arrow">↗</span></a>
              </div>
            </details>
            <details class="credential-folder">
              <summary><span class="folder-emoji">☼</span><span class="folder-summary"><strong>Other milestones</strong><small>App Academy &amp; hackathon</small></span><span class="folder-count">02</span><span class="folder-chevron" aria-hidden="true">↘</span></summary>
              <div class="credential-files">
                <a href="assets/certs/other/fnb-certificate.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>FNB App Academy 2025</strong><small>Certificate in Full Stack Development</small></span><span class="file-arrow">↗</span></a>
                <a href="assets/certs/other/InterVarsity.jpg" target="_blank" rel="noopener noreferrer"><span class="file-icon">▧</span><span><strong>Inter-Varsity Hackathon 2025</strong><small>Participant</small></span><span class="file-arrow">↗</span></a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section wrap" id="contact" aria-labelledby="contact-title">
      <div class="contact-card">
        <div class="contact-card__decoration" aria-hidden="true"><span>✳</span><i></i><b>↗</b></div>
        <div class="contact-card__copy"><p class="section-label">LAST STOP · YOUR TURN</p><h2 id="contact-title">Have a good idea?<br /><em>Let’s make it real.</em></h2><p>I’m always happy to connect about software, creative technology, or a problem that could use a thoughtful solution.</p></div>
        <div class="contact-card__actions"><a class="button button--dark" href="mailto:kubeshangovender040908@gmail.com">Send me an email <span aria-hidden="true">↗</span></a><a class="contact-secondary" href="https://github.com/Kubeshan-Govender" target="_blank" rel="noopener noreferrer">Or find me on GitHub ↗</a><a class="contact-phone" href="tel:0637750267">063-775-0267</a></div>
      </div>
    </section>
  </main>

  <footer class="site-footer wrap"><a class="footer-brand" href="#top">kg<span>.</span></a><p>Made with care, code, and a little curiosity.</p><div><span>© 2026 Kubeshan Govender</span><a href="#top">Back to the top ↑</a></div></footer>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import AtlasExplorer from './components/AtlasExplorer.vue'
import ProjectShowcase from './components/ProjectShowcase.vue'

const assetBase = import.meta.env.BASE_URL
let sectionObserver

function handleAvatarError(event) {
  const image = event.currentTarget
  image.parentElement?.classList.add('avatar--fallback')
  image.remove()
}

onMounted(() => {
  const navLinks = [...document.querySelectorAll('.nav__links a')]
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        navLinks.forEach((link) => {
          link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`)
        })
      })
    }, { rootMargin: '-28% 0px -60% 0px', threshold: 0 })
    sections.forEach((section) => sectionObserver.observe(section))
  }
})

onBeforeUnmount(() => sectionObserver?.disconnect())
</script>
