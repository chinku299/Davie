<script setup>
import PageHero from '../components/PageHero.vue'
import { BUSINESS_TIERS } from '../features/sending/pricing.js'

const integrations = [
  { name: 'Spreadsheet upload', body: 'Drop in a CSV of addresses and get labels back as one PDF.' },
  { name: 'Shop platforms', body: 'Orders come through automatically and tracking goes back to the customer.' },
  { name: 'Our API', body: 'REST endpoints for booking, labels and status webhooks, if you have a developer.' },
  { name: 'Marketplace listings', body: 'Sold something second hand? Book straight from the sale, no retyping.' }
]

const included = [
  'Weekly invoicing rather than paying per parcel',
  'Bulk label printing, up to 500 at a time',
  'Collections from one address or several',
  'Returns portal branded as your shop',
  'A dashboard showing what is late before customers tell you'
]
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      eyebrow="For business"
      title="Rates that step down as you grow"
      intro="Whether you post ten parcels a week from a spare room or ten thousand from a warehouse, the same network carries them."
    />

    <section class="shell mt-12" aria-labelledby="tiers-heading">
      <h2 id="tiers-heading" class="text-2xl font-extrabold tracking-tight text-ink">
        Volume pricing
      </h2>
      <p class="mt-2 text-slate">Discounts apply against the published rate card.</p>

      <ul class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="tier in BUSINESS_TIERS"
          :key="tier.id"
          class="flex flex-col rounded-panel bg-white p-6 shadow-sm"
        >
          <h3 class="font-extrabold tracking-tight text-ink">{{ tier.name }}</h3>
          <p class="mt-1 text-sm text-slate">{{ tier.volume }}</p>

          <p class="mt-5 text-3xl font-extrabold tracking-tight text-ink">
            <template v-if="tier.discount === null">Let's talk</template>
            <template v-else-if="tier.discount === 0">List price</template>
            <template v-else>&minus;{{ tier.discount }}%</template>
          </p>

          <p class="mt-4 flex-1 text-sm text-slate">{{ tier.note }}</p>
        </li>
      </ul>
    </section>

    <section class="shell mt-14 grid gap-8 lg:grid-cols-2" aria-labelledby="integrations-heading">
      <div>
        <h2 id="integrations-heading" class="text-2xl font-extrabold tracking-tight text-ink">
          Getting orders to us
        </h2>
        <ul class="mt-6 space-y-4">
          <li v-for="item in integrations" :key="item.name" class="rounded-panel bg-white p-6 shadow-sm">
            <h3 class="font-bold text-ink">{{ item.name }}</h3>
            <p class="mt-1 leading-relaxed text-slate">{{ item.body }}</p>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-extrabold tracking-tight text-ink">What comes with an account</h2>
        <ul class="mt-6 space-y-3 rounded-panel bg-white p-7 shadow-sm">
          <li v-for="line in included" :key="line" class="flex gap-3">
            <svg
              class="mt-1 h-5 w-5 shrink-0 text-flare-ink"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m5 13 4 4L19 7" />
            </svg>
            <span class="text-slate">{{ line }}</span>
          </li>
        </ul>

        <div class="on-dark mt-6 rounded-panel bg-ink p-7">
          <h3 class="text-xl font-extrabold tracking-tight text-white">Open an account</h3>
          <p class="mt-2 text-white/80">
            Tell us roughly what you ship and we will come back with a rate.
          </p>
          <RouterLink to="/contact" class="btn-primary mt-5">Talk to the team</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
