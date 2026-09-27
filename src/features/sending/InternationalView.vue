<script setup>
import PageHero from '../../components/PageHero.vue'
import { ZONES, formatPrice } from './pricing.js'
</script>

<template>
  <div class="bg-mist pb-20 font-sans">
    <PageHero
      title="International Delivery"
      intro="Send parcels to over 190 countries worldwide with fully tracked door-to-door delivery and automated customs clearance."
    />

    <section class="shell mt-12 max-w-5xl" aria-labelledby="intl-heading">
      <h2 id="intl-heading" class="text-3xl font-black text-[#0A1D33] tracking-tight mb-6">
        Worldwide shipping zones
      </h2>
      <p class="text-gray-600 font-medium mb-10">
        Choose from our competitive global shipping tiers with estimated delivery times and complete end-to-end tracking.
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="zone in ZONES"
          :key="zone.id"
          class="rounded-panel bg-white p-7 shadow-sm border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-black text-[#0A1D33]">{{ zone.name }}</h3>
              <span class="bg-[#0052CC]/10 text-[#0052CC] font-bold text-xs px-3 py-1 rounded-full">{{ zone.days }}</span>
            </div>
            <p class="text-sm text-gray-500 font-medium mb-4">
              Includes countries such as:
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="country in zone.countries"
                :key="country"
                class="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full"
              >
                {{ country }}
              </span>
            </div>
          </div>
          <RouterLink to="/send" class="block w-full bg-[#0A1D33] text-white text-center font-black py-3.5 rounded-2xl hover:bg-[#0052CC] transition-colors uppercase text-xs tracking-widest">
            Send to this zone
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
