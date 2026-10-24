<template>
<section class="atlas-section" id="atlas" aria-labelledby="atlas-title">
      <div class="wrap">
        <div class="section-heading section-heading--split">
          <div>
            <p class="section-label">FIELD GUIDE / 01</p>
            <h2 id="atlas-title">Welcome to my <em>developer atlas.</em></h2>
          </div>
          <p class="section-heading__aside">Choose a pin to explore a project, a milestone, or a place where I’ve been learning. No compass required.</p>
        </div>

        <div class="atlas-filters" role="group" aria-label="Filter map destinations">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="filter-chip"
            :class="{ 'is-active': activeFilter === filter.id }"
            type="button"
            :aria-pressed="activeFilter === filter.id"
            @click="setFilter(filter.id)"
          >{{ filter.label }}<span v-if="filter.id === 'all'">{{ String(destinations.length).padStart(2, '0') }}</span></button>
        </div>

        <div class="atlas-layout">
          <div class="map-frame">
            <div class="map-topline"><span><span class="map-live-dot"></span> KUBESHAN'S FIELD MAP</span><span>KWAZULU-NATAL · SOUTH AFRICA</span></div>
            <div class="map-canvas" id="map-canvas">
              <svg class="map-art" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="An illustrated map of green islands, winding paths, hills, and little places to explore">
                <defs>
                  <pattern id="mapDots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.25" fill="#6c9474" opacity=".24"/></pattern>
                  <linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e5eee0"/><stop offset="1" stop-color="#d6e7dc"/></linearGradient>
                  <linearGradient id="islandFill" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#c8dfba"/><stop offset="1" stop-color="#a3c8a2"/></linearGradient>
                  <linearGradient id="islandFill2" x1="0" y1="0" x2="0.9" y2="1"><stop stop-color="#b8d6ac"/><stop offset="1" stop-color="#85b18c"/></linearGradient>
                </defs>
                <rect width="900" height="560" fill="url(#water)"/>
                <rect width="900" height="560" fill="url(#mapDots)"/>
                <g fill="none" stroke="#b4d1bb" stroke-width="1.7" opacity=".75"><path d="M-30 115 C125 26 190 117 300 80 S488 18 600 77 S795 141 938 68"/><path d="M-20 137 C130 48 195 139 305 102 S493 40 604 99 S800 163 942 90"/><path d="M-30 459 C115 386 198 469 312 427 S494 390 620 438 S813 493 934 419"/><path d="M-30 481 C115 408 198 491 312 449 S494 412 620 460 S813 515 934 441"/></g>
                <path d="M-30 57 C45 24 137 34 184 97 C211 132 204 171 231 204 C260 241 244 277 210 305 C178 329 146 366 156 404 C166 447 129 499 63 528 L-30 560Z" fill="url(#islandFill)"/>
                <path d="M-12 95 C42 50 100 65 132 108 C158 145 145 179 183 211 C215 240 198 276 164 299 C122 327 109 368 131 412 C147 445 112 491 58 519" fill="none" stroke="#80ad84" stroke-width="2" opacity=".7"/>
                <path d="M-8 122 C40 78 86 91 111 123 C139 160 126 194 161 226 C186 251 173 277 141 300 C102 331 83 370 108 416 C120 440 89 474 48 496" fill="none" stroke="#80ad84" stroke-width="1.5" opacity=".55"/>
                <path d="M212 157 C250 111 318 104 363 137 C404 166 431 165 468 136 C510 104 574 115 598 153 C625 195 608 230 631 259 C657 293 633 328 598 345 C558 364 528 407 487 414 C438 423 412 390 368 406 C328 421 291 401 277 369 C256 321 286 284 257 247 C231 217 191 199 212 157Z" fill="url(#islandFill2)"/>
                <path d="M234 169 C272 131 319 126 357 155 C397 184 432 185 470 154 C503 127 553 132 578 163 C602 192 585 225 608 264 C631 298 604 324 574 336 C530 353 512 386 479 391 C435 397 407 368 368 384 C331 399 309 376 295 350 C270 303 303 273 270 237 C245 211 218 195 234 169Z" fill="none" stroke="#6c9c75" stroke-width="2" opacity=".65"/>
                <path d="M279 192 C312 166 342 165 374 187 C412 214 441 212 473 181 C501 154 539 163 553 188 C572 215 556 240 575 266 C594 292 569 311 544 321 C508 336 491 364 464 366 C429 369 406 344 373 356 C343 367 328 346 317 324 C294 282 323 258 296 228 C281 212 267 204 279 192Z" fill="none" stroke="#6c9c75" stroke-width="1.4" opacity=".55"/>
                <path d="M626 -28 C685 11 687 65 718 104 C750 143 792 149 807 194 C820 234 787 261 801 305 C817 353 870 383 927 372 L930 -20Z" fill="#b7d4ad"/>
                <path d="M653 10 C696 46 697 80 728 119 C762 162 792 165 807 202 C820 234 795 264 814 310 C830 348 861 369 905 367" fill="none" stroke="#8dbb8e" stroke-width="2"/>
                <path d="M692 42 C725 70 726 101 756 136 C785 171 816 187 822 214 C829 243 808 267 827 310 C843 344 867 358 898 356" fill="none" stroke="#8dbb8e" stroke-width="1.5"/>
                <path d="M351 264 C383 233 421 226 452 250 C478 270 499 293 480 319 C465 340 426 341 405 324 C381 306 366 308 351 264Z" fill="#d9e8bf" opacity=".7"/>
                  <path d="M64 0 C139 62 155 102 205 136 S293 176 331 236 S388 333 439 326 S511 280 542 319 S595 409 675 391 S782 373 900 448" stroke="#d0b887" stroke-width="18" stroke-linecap="round" fill="none" opacity=".9"/>
                <path d="M64 0 C139 62 155 102 205 136 S293 176 331 236 S388 333 439 326 S511 280 542 319 S595 409 675 391 S782 373 900 448" stroke="#fff4d9" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 11" fill="none"/>
                  <path class="map-route-glimmer" d="M64 0 C139 62 155 102 205 136 S293 176 331 236 S388 333 439 326 S511 280 542 319 S595 409 675 391 S782 373 900 448" fill="none"/>
                <g fill="#5f906b" opacity=".9"><circle cx="263" cy="150" r="15"/><circle cx="279" cy="139" r="18"/><circle cx="291" cy="154" r="13"/><circle cx="514" cy="198" r="17"/><circle cx="534" cy="184" r="21"/><circle cx="551" cy="201" r="15"/><circle cx="360" cy="352" r="13"/><circle cx="376" cy="344" r="16"/><circle cx="387" cy="360" r="12"/><circle cx="704" cy="136" r="13"/><circle cx="720" cy="125" r="17"/><circle cx="733" cy="142" r="13"/></g>
                <g fill="#a4c89c"><circle cx="276" cy="144" r="7"/><circle cx="534" cy="190" r="9"/><circle cx="376" cy="349" r="7"/><circle cx="720" cy="131" r="8"/></g>
                <g transform="translate(400 246)"><ellipse cx="22" cy="50" rx="36" ry="8" fill="#5c8866" opacity=".2"/><path d="M-3 13 L22 -7 L47 13 V46 H-3Z" fill="#f7f2df"/><path d="M-8 15 L22 -10 L52 15Z" fill="#638d6e"/><rect x="17" y="25" width="11" height="21" rx="2" fill="#d6b984"/><rect x="3" y="20" width="10" height="10" rx="1" fill="#b6d8cb"/><rect x="31" y="20" width="10" height="10" rx="1" fill="#b6d8cb"/></g>
                <g transform="translate(758 421)" fill="#f7f1dd"><path d="M0 22 Q10 3 21 22 Q31 -1 42 22 Q51 7 62 22Z"/><rect x="18" y="22" width="27" height="4" rx="2"/></g>
                <g fill="#f6f0d8"><circle cx="214" cy="372" r="4"/><circle cx="228" cy="388" r="3"/><circle cx="249" cy="375" r="4"/><circle cx="583" cy="242" r="3"/><circle cx="598" cy="255" r="4"/><circle cx="608" cy="236" r="3"/></g>
                <g font-family="DM Sans, sans-serif" font-size="11" fill="#57745e" letter-spacing="2"><text x="52" y="80">THE GREEN COAST</text><text x="348" y="470">PATH OF IDEAS</text><text x="673" y="80">NEW HORIZONS</text></g>
                <g transform="translate(818 40)" stroke="#6c9474" stroke-width="1.5" fill="none"><path d="M0 20 L8 0 L16 20 L8 16Z" fill="#6c9474"/><path d="M8 16 V35"/><text x="4" y="48" stroke="none" fill="#6c9474" font-size="11" font-family="DM Sans, sans-serif">N</text></g>
              </svg>

              <button
                v-for="destination in visibleDestinations"
                :key="destination.id"
                type="button"
                class="map-pin"
                :class="[destination.pinClass, { 'is-selected': selectedDestinationId === destination.id }]"
                :data-category="destination.category"
                :aria-pressed="selectedDestinationId === destination.id"
                :aria-label="destination.ariaLabel"
                @click="selectedDestinationId = destination.id"
              >
                <span class="map-pin__bubble" aria-hidden="true">{{ destination.icon }}</span>
                <span class="map-pin__label">{{ destination.mapLabel }} <small>{{ destination.number }}</small></span>
              </button>
              <div class="map-compass" aria-hidden="true"><span>N</span><b>✦</b></div>
              <div class="map-scale" aria-hidden="true"><span></span><span>NOT TO SCALE</span></div>
            </div>
            <div class="map-legend"><span><i class="legend-dot legend-dot--project"></i> Projects</span><span><i class="legend-dot legend-dot--learning"></i> Academics &amp; learning</span><span><i class="legend-dot legend-dot--journey"></i> Experience</span><span class="map-legend__hint">Choose a marker to open a checkpoint ↗</span></div>
          </div>

          <aside :key="selectedDestination.id" class="destination-card" id="destination-card" aria-live="polite" aria-atomic="true">
            <div class="destination-card__top"><span class="destination-card__index">{{ selectedDestination.index }}</span><span class="destination-card__stamp">{{ selectedDestination.stamp }}</span></div>
            <div class="destination-card__illustration" :class="selectedDestination.className" aria-hidden="true"><span>{{ selectedDestination.icon }}</span><i></i><i></i><i></i><b>↗</b></div>
            <p class="section-label">{{ selectedDestination.kicker }}</p>
            <h3>{{ selectedDestination.title }}</h3>
            <p class="destination-card__description">{{ selectedDestination.description }}</p>
            <div class="tag-list"><span v-for="tag in selectedDestination.tags" :key="tag">{{ tag }}</span></div>
            <a class="button button--primary destination-card__link" :href="selectedDestination.href" :target="selectedDestination.external ? '_blank' : null" :rel="selectedDestination.external ? 'noopener noreferrer' : null">{{ selectedDestination.action }} <span aria-hidden="true">{{ selectedDestination.external ? '↗' : '↘' }}</span></a>
            <p class="destination-card__footnote"><span aria-hidden="true">✳</span> Small steps make good things.</p>
          </aside>
        </div>
      </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const filters = [
  { id: 'all', label: 'All stops ' },
  { id: 'projects', label: 'Projects' },
  { id: 'learning', label: 'Learning' },
  { id: 'journey', label: 'Experience' },
]

const destinations = [
  {
    id: 'invoice', number: '01', index: 'STOP 01 / 07', pinClass: 'map-pin--invoice', category: 'projects',
    mapLabel: 'Tool Grove', ariaLabel: 'Explore Invoice Builder at Tool Grove', icon: '▤',
    stamp: 'FEATURED BUILD', kicker: 'TOOL GROVE · PROJECT', title: 'Invoice Builder',
    description: 'A practical desktop tool built to simplify invoice creation, client billing, and everyday business administration.',
    tags: ['C#', 'Desktop app', 'Business tools'], action: 'View repository',
    href: 'https://github.com/Kubeshan-Govender/Invoice-Builder', external: true, className: 'illustration--tool',
  },
  {
    id: 'car', number: '02', index: 'STOP 02 / 07', pinClass: 'map-pin--car', category: 'projects',
    mapLabel: 'Web Cove', ariaLabel: 'Explore Car Dealership Website at Web Cove', icon: '⌘',
    stamp: 'WEB PROJECT', kicker: 'WEB COVE · PROJECT', title: 'Car Dealership Website',
    description: 'A static website built for a local car salesman, with a focus on presenting information in a clear and approachable way.',
    tags: ['Website', 'Front end', 'Client work'], action: 'View repository',
    href: 'https://github.com/Kubeshan-Govender/Car-Dealership.git', external: true, className: 'illustration--web',
  },
  {
    id: 'portfolio', number: '03', index: 'STOP 03 / 07', pinClass: 'map-pin--portfolio', category: 'projects',
    mapLabel: 'Portfolio Point', ariaLabel: 'Explore the Portfolio Website at Portfolio Point', icon: '✳',
    stamp: 'PERSONAL PROJECT', kicker: 'PORTFOLIO POINT · PROJECT', title: 'Portfolio Website',
    description: 'A personal website for sharing my projects, development journey, skills, and the work I’m proud to put out into the world.',
    tags: ['HTML', 'CSS', 'JavaScript'], action: 'View repository',
    href: 'https://github.com/Kubeshan-Govender/Curriculam-Vitae.git', external: true, className: 'illustration--portfolio',
  },
  {
    id: 'academic', number: '04', index: 'STOP 04 / 07', pinClass: 'map-pin--academic', category: 'learning',
    mapLabel: 'Academic Summit', ariaLabel: 'Explore my degree and academic milestones', icon: '∑',
    stamp: 'ACADEMIC CHECKPOINT', kicker: 'ACADEMIC SUMMIT · EDUCATION', title: 'Applied Mathematics & Computer Science',
    description: 'My BSc at the University of South Africa brought together mathematical thinking, computing, and the habit of working through complex problems.',
    tags: ['BSc', 'UNISA', 'Completed 2026'], action: 'View academic records', href: '#credentials', external: false, className: 'illustration--learning',
  },
  {
    id: 'learning', number: '05', index: 'STOP 05 / 07', pinClass: 'map-pin--learning', category: 'learning',
    mapLabel: 'Learning Lighthouse', ariaLabel: 'Explore courses and certificates at Learning Lighthouse', icon: '✦',
    stamp: 'LEARNING SHELF', kicker: 'LEARNING LIGHTHOUSE · CREDENTIALS', title: 'Courses & Certifications',
    description: 'A collection of technical courses, AI learning, professional development, school achievements, and community events.',
    tags: ['IBM', 'Microsoft', 'FNB App Academy'], action: 'Explore credentials', href: '#credentials', external: false, className: 'illustration--learning',
  },
  {
    id: 'toolkit', number: '06', index: 'STOP 06 / 07', pinClass: 'map-pin--toolkit', category: 'learning',
    mapLabel: 'Skills Camp', ariaLabel: 'Explore my development skills at Skills Camp', icon: '</>',
    stamp: 'TOOLS IN MY PACK', kicker: 'SKILLS CAMP · TOOLKIT', title: 'Tools & Ways of Working',
    description: 'Languages, frameworks, data systems, and practical habits I use to turn an idea into a working solution.',
    tags: ['C#', 'JavaScript', 'SQL', 'Problem solving'], action: 'Browse my toolkit', href: '#toolkit', external: false, className: 'illustration--tool',
  },
  {
    id: 'journey', number: '07', index: 'STOP 07 / 07', pinClass: 'map-pin--journey', category: 'journey',
    mapLabel: 'Career Outpost', ariaLabel: 'Explore work experience at Career Outpost', icon: '⌂',
    stamp: 'CAREER NOTES', kicker: 'CAREER OUTPOST · EXPERIENCE', title: 'Work & Experience',
    description: 'A path through software development, IT support, business operations, student leadership, and hands-on teamwork.',
    tags: ['Software', 'IT support', 'Leadership'], action: 'Follow my journey', href: '#journey', external: false, className: 'illustration--journey',
  },
]

const activeFilter = ref('all')
const selectedDestinationId = ref('invoice')
const visibleDestinations = computed(() => activeFilter.value === 'all'
  ? destinations
  : destinations.filter((destination) => destination.category === activeFilter.value))
const selectedDestination = computed(() => destinations.find((destination) => destination.id === selectedDestinationId.value) ?? destinations[0])

function setFilter(filterId) {
  activeFilter.value = filterId
  if (!visibleDestinations.value.some((destination) => destination.id === selectedDestinationId.value)) {
    selectedDestinationId.value = visibleDestinations.value[0]?.id ?? 'invoice'
  }
}
</script>
