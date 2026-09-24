<script setup>
import BrandMark from './BrandMark.vue'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Getting help',
    links: [
      { label: 'Help centre', to: '/help' },
      { label: 'Track a parcel', to: '/track' },
      { label: 'Start a return', to: '/returns' },
      { label: 'Redirect a delivery', to: '/receive' },
      { label: 'Talk to someone', to: '/contact' }
    ]
  },
  {
    title: 'Sending',
    links: [
      { label: 'Book a parcel', to: '/send' },
      { label: 'Sizes and prices', to: '/prices' },
      { label: 'Sending overseas', to: '/overseas' },
      { label: 'Drop-off points', to: '/network' },
      { label: 'What we cannot carry', to: '/restrictions' }
    ]
  },
  {
    title: 'Business',
    links: [
      { label: 'Business accounts', to: '/business' },
      { label: 'Volume pricing', to: '/prices' },
      { label: 'Shop integrations', to: '/business' },
      { label: 'Become a drop-off point', to: '/network' }
    ]
  },
  {
    title: 'The small print',
    links: [
      { label: 'Privacy notice', to: '/privacy' },
      { label: 'Cookies', to: '/cookies' },
      { label: 'Terms of carriage', to: '/terms' },
      { label: 'Accessibility', to: '/accessibility' }
    ]
  }
]

const socials = [
  {
    name: 'Parcelane on Instagram',
    href: '#',
    path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-1.2h.01'
  },
  {
    name: 'Parcelane on LinkedIn',
    href: '#',
    path: 'M5 9v10M5 5.5v.01M10 19v-5.5a3 3 0 0 1 6 0V19M10 9v10'
  },
  {
    name: 'Parcelane on YouTube',
    href: '#',
    path: 'M3 8.5A3 3 0 0 1 6 5.5h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7Zm7 1.5 5 2.5-5 2.5V10Z'
  }
]
</script>

<template>
  <footer class="on-dark bg-ink pb-10 pt-16 text-white">
    <div class="shell">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <nav v-for="col in columns" :key="col.title" :aria-labelledby="'foot-' + col.title">
          <h2 :id="'foot-' + col.title" class="text-sm font-bold uppercase tracking-wider text-flare">
            {{ col.title }}
          </h2>
          <ul class="mt-5 space-y-3">
            <li v-for="link in col.links" :key="link.label">
              <RouterLink :to="link.to" class="rounded text-white/85 hover:text-white hover:underline">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="mt-14 border-t border-white/20 pt-8">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <RouterLink to="/" class="rounded-lg" aria-label="Parcelane, back to the home page">
              <BrandMark tone="light" />
            </RouterLink>
            <p class="mt-4 max-w-xl text-sm text-white/75">
              Parcelane is an invented company. This site is coursework: a front-end
              build with sample data, not a real delivery service, and nothing here can
              be bought or booked.
            </p>
          </div>

          <ul class="flex gap-3">
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.href"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:border-flare hover:bg-flare hover:text-ink"
              >
                <span class="sr-only">{{ social.name }}</span>
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path :d="social.path" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <p class="mt-8 text-sm text-white/75">
          &copy; {{ year }} Parcelane &mdash; a student project.
        </p>
      </div>
    </div>
  </footer>
</template>
