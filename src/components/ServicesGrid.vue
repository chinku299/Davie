<script setup>
/**
 * Icons are drawn inline so the grid has no image dependencies. Each one is
 * marked aria-hidden: the card heading already names the service.
 */
const services = [
  {
    title: 'Book a collection',
    body: 'Tell us roughly when you are in and a driver comes to the door. No printing, no queueing, no leaving the house.',
    action: 'Get a price',
    to: '/send',
    tag: 'From £3.10',
    icon: 'van'
  },
  {
    title: 'Drop it off nearby',
    body: 'Leave your parcel at a corner shop, a garage or a locker bank. Most of ours are open well past six.',
    action: 'Find a point',
    to: '/network',
    icon: 'pin'
  },
  {
    title: 'Send something back',
    body: 'Scan the code from the retailer, hand the parcel over, keep the receipt. That is the whole job.',
    action: 'Start a return',
    to: '/returns',
    tag: 'Most used',
    icon: 'arrow'
  },
  {
    title: 'Follow a delivery',
    body: 'Watch your parcel move through the network and get a delivery window on the morning itself.',
    action: 'Track a parcel',
    to: '/track',
    icon: 'radar'
  },
  {
    title: 'Sell and ship',
    body: 'Running a shop from your spare room or a warehouse? Our rates step down as your volume steps up.',
    action: 'See business rates',
    to: '/business',
    icon: 'shop'
  },
  {
    title: 'Post it overseas',
    body: 'Thirty-two countries, customs paperwork filled in as you book, and tracking that carries on at the border.',
    action: 'Send abroad',
    to: '/overseas',
    icon: 'globe'
  }
]
</script>

<template>
  <section class="bg-mist py-20" aria-labelledby="services-heading">
    <div class="shell">
      <h2 id="services-heading" class="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        What people come to us for
      </h2>
      <p class="mt-3 max-w-2xl text-lg text-slate">
        Six things, done without fuss. Pick the one you came here to do.
      </p>

      <ul class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="service in services"
          :key="service.title"
          class="flex flex-col rounded-panel bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
        >
          <div class="flex items-start justify-between gap-3">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-card bg-mist text-ink"
              aria-hidden="true"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <template v-if="service.icon === 'van'">
                  <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
                  <circle cx="7" cy="18" r="1.6" />
                  <circle cx="17" cy="18" r="1.6" />
                </template>
                <template v-else-if="service.icon === 'pin'">
                  <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
                  <circle cx="12" cy="11" r="2.4" />
                </template>
                <template v-else-if="service.icon === 'arrow'">
                  <path d="M9 5 4 10l5 5" />
                  <path d="M4 10h10a6 6 0 0 1 0 12h-2" />
                </template>
                <template v-else-if="service.icon === 'radar'">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 16.2a6 6 0 0 0 0-8.4" />
                  <path d="M4.9 4.9a10 10 0 0 0 0 14.2M19.1 19.1a10 10 0 0 0 0-14.2" />
                </template>
                <template v-else-if="service.icon === 'shop'">
                  <path d="M4 9h16v11H4zM4 9l1.5-4h13L20 9" />
                  <path d="M10 20v-6h4v6" />
                </template>
                <template v-else>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.8 2.5 15 0 18M12 3c-2.5 2.8-2.5 15 0 18" />
                </template>
              </svg>
            </span>

            <span
              v-if="service.tag"
              class="rounded-full bg-flare/15 px-3 py-1 text-xs font-bold text-flare-ink"
            >
              {{ service.tag }}
            </span>
          </div>

          <h3 class="mt-5 text-xl font-extrabold tracking-tight text-ink">
            {{ service.title }}
          </h3>
          <p class="mt-3 flex-1 leading-relaxed text-slate">{{ service.body }}</p>

          <RouterLink :to="service.to" class="btn-dark mt-6 w-full">
            {{ service.action }}
          </RouterLink>
        </li>
      </ul>

      <!-- Help strip -->
      <div
        class="on-dark mt-14 flex flex-col items-start gap-6 rounded-panel bg-ink p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h3 class="text-2xl font-extrabold tracking-tight text-white">
            Something gone sideways?
          </h3>
          <p class="mt-2 text-white/80">
            Missing parcel, wrong address, damaged box. Start here and we will sort it.
          </p>
        </div>
        <RouterLink to="/help" class="btn-primary shrink-0">Go to help</RouterLink>
      </div>
    </div>
  </section>
</template>
