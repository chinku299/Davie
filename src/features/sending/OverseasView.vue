<script setup>
import { ref, computed } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { PARCEL_SIZES, ZONES, overseasPrice, formatPrice } from './pricing.js'

const sizeId = ref('small')
const chosenSize = computed(() => PARCEL_SIZES.find((s) => s.id === sizeId.value))

const paperwork = [
  {
    title: 'Say what is inside',
    body: 'Customs needs a plain description and a value for every item. "Gift" on its own will get a parcel held at the border.'
  },
  {
    title: 'We fill the form in',
    body: 'Answer the questions as you book and the declaration is generated and attached electronically. Nothing to print.'
  },
  {
    title: 'Duty is paid by whoever receives it',
    body: 'Unless you tick otherwise. Tell the person expecting it, so a bill on the doorstep is not a surprise.'
  }
]
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Sending overseas"
      intro="Thirty-two countries across four zones, with tracking that carries on working once the parcel leaves the UK."
    />

    <section class="shell mt-12" aria-labelledby="zone-heading">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h2 id="zone-heading" class="text-2xl font-extrabold tracking-tight text-ink">
          Zones and prices
        </h2>

        <div>
          <label for="size-picker" class="block text-sm font-bold text-ink">Parcel size</label>
          <select id="size-picker" v-model="sizeId" class="field mt-1 w-auto pr-10">
            <option v-for="size in PARCEL_SIZES" :key="size.id" :value="size.id">
              {{ size.name }}
            </option>
          </select>
        </div>
      </div>

      <ul class="mt-6 space-y-4">
        <li v-for="zone in ZONES" :key="zone.id" class="rounded-panel bg-white p-6 shadow-sm sm:p-8">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-extrabold tracking-tight text-ink">{{ zone.name }}</h3>
              <p class="mt-1 text-sm text-slate">{{ zone.days }}</p>
            </div>
            <p class="text-right">
              <span class="block text-2xl font-extrabold tracking-tight text-ink">
                {{ formatPrice(overseasPrice(sizeId, zone.id)) }}
              </span>
              <span class="block text-xs text-slate">{{ chosenSize.name }}</span>
            </p>
          </div>

          <ul class="mt-4 flex flex-wrap gap-2 border-t border-slate/15 pt-4">
            <li
              v-for="country in zone.countries"
              :key="country"
              class="rounded-full bg-mist px-3 py-1 text-sm font-medium text-slate"
            >
              {{ country }}
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="shell mt-14" aria-labelledby="customs-heading">
      <h2 id="customs-heading" class="text-2xl font-extrabold tracking-tight text-ink">
        The customs bit
      </h2>

      <ol class="mt-6 grid gap-6 md:grid-cols-3">
        <li v-for="(step, i) in paperwork" :key="step.title" class="rounded-panel bg-white p-7 shadow-sm">
          <span
            class="flex h-10 w-10 items-center justify-center rounded-full bg-flare font-extrabold text-ink"
            aria-hidden="true"
          >
            {{ i + 1 }}
          </span>
          <h3 class="mt-4 font-extrabold tracking-tight text-ink">{{ step.title }}</h3>
          <p class="mt-2 leading-relaxed text-slate">{{ step.body }}</p>
        </li>
      </ol>

      <p class="mt-6 rounded-panel bg-white p-6 text-slate shadow-sm">
        Some things that travel fine inside the UK cannot cross a border at all.
        <RouterLink to="/restrictions" class="font-bold text-flare-ink underline">
          Check the restricted list
        </RouterLink>
        before you book.
      </p>
    </section>
  </div>
</template>
