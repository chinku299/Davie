<script setup>
import PageHero from '../../components/PageHero.vue'
import { PARCEL_SIZES, SPEEDS, EXTRAS, HANDOVERS, formatPrice } from './pricing.js'

const express = SPEEDS.find((s) => s.id === 'express')
const collection = HANDOVERS.find((h) => h.id === 'collection')
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Sizes and prices"
      intro="One rate card, no surge pricing and no fuel surcharge bolted on at the end. What you see here is what you pay."
    />

    <section class="shell mt-12" aria-labelledby="rates-heading">
      <h2 id="rates-heading" class="text-2xl font-extrabold tracking-tight text-ink">
        Sending within the UK
      </h2>

      <div class="mt-6 overflow-x-auto rounded-panel bg-white shadow-sm">
        <table class="w-full min-w-[40rem] text-left">
          <caption class="sr-only">
            Parcel sizes with standard and express prices
          </caption>
          <thead class="border-b-2 border-slate/15">
            <tr>
              <th scope="col" class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate">Size</th>
              <th scope="col" class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate">Maximum</th>
              <th scope="col" class="px-6 py-4 text-sm font-bold uppercase tracking-wide text-slate">Weight</th>
              <th scope="col" class="px-6 py-4 text-right text-sm font-bold uppercase tracking-wide text-slate">Standard</th>
              <th scope="col" class="px-6 py-4 text-right text-sm font-bold uppercase tracking-wide text-slate">Express</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate/15">
            <tr v-for="size in PARCEL_SIZES" :key="size.id">
              <th scope="row" class="px-6 py-4 font-bold text-ink">{{ size.name }}</th>
              <td class="px-6 py-4 text-slate">{{ size.dims }}</td>
              <td class="px-6 py-4 text-slate">{{ size.weight }}</td>
              <td class="px-6 py-4 text-right font-bold text-ink">{{ formatPrice(size.base) }}</td>
              <td class="px-6 py-4 text-right font-bold text-ink">
                {{ formatPrice(Math.round(size.base * express.multiplier * 100) / 100) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="mt-4 text-sm text-slate">
        Prices are for dropping a parcel off. Collection from your door adds
        {{ formatPrice(collection.adjust) }} to any booking.
      </p>
    </section>

    <section class="shell mt-14" aria-labelledby="extras-heading">
      <h2 id="extras-heading" class="text-2xl font-extrabold tracking-tight text-ink">
        Optional extras
      </h2>

      <ul class="mt-6 grid gap-4 md:grid-cols-3">
        <li v-for="extra in EXTRAS" :key="extra.id" class="rounded-panel bg-white p-6 shadow-sm">
          <p class="text-2xl font-extrabold tracking-tight text-ink">
            +{{ formatPrice(extra.price) }}
          </p>
          <h3 class="mt-2 font-bold text-ink">{{ extra.name }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-slate">{{ extra.detail }}</p>
        </li>
      </ul>
    </section>

    <section class="shell mt-14">
      <div class="on-dark flex flex-col items-start gap-6 rounded-panel bg-ink p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 class="text-2xl font-extrabold tracking-tight text-white">
            Want the price for your parcel?
          </h2>
          <p class="mt-2 text-white/80">
            The quote builder adds it all up as you pick, with no sign-in first.
          </p>
        </div>
        <RouterLink to="/send" class="btn-primary shrink-0">Build a quote</RouterLink>
      </div>
    </section>
  </div>
</template>
