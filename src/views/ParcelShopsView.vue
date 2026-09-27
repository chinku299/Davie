<script setup>
import PageHero from '../components/PageHero.vue'
import { POINTS } from '../features/locations/network.js'
</script>

<template>
  <div class="bg-mist pb-20 font-sans">
    <PageHero
      title="ParcelShops & Lockers"
      intro="Over 14,000 local convenience stores, petrol stations and 24/7 locker banks across the UK."
    />

    <section class="shell mt-12 max-w-5xl">
      <div class="rounded-panel bg-white p-8 shadow-sm border border-gray-100 mb-10 text-center">
        <h2 class="text-2xl font-black text-[#0A1D33] mb-3">Find your nearest drop-off point</h2>
        <p class="text-gray-600 font-medium max-w-lg mx-auto mb-6">
          Search by your postcode or town to locate nearby open counters and 24/7 parcel lockers.
        </p>
        <RouterLink to="/network" class="bg-[#2DC5B8] text-[#0A1D33] font-black px-8 py-4 rounded-full uppercase text-xs tracking-widest hover:bg-[#25a59a] transition-colors inline-block">
          Open location finder
        </RouterLink>
      </div>

      <h3 class="text-xl font-black text-[#0A1D33] mb-6">Featured nationwide locations</h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="point in POINTS.slice(0, 6)" :key="point.id" class="rounded-card bg-white p-6 shadow-sm border border-gray-100">
          <span class="bg-gray-100 text-gray-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
            {{ point.kind }}
          </span>
          <h4 class="text-lg font-black text-[#0A1D33] mt-3 mb-1">{{ point.name }}</h4>
          <p class="text-xs text-gray-500 font-medium">{{ point.street }}, {{ point.town }} {{ point.postcode }}</p>
          <p class="text-xs font-bold text-emerald-600 mt-3">{{ point.hours }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
