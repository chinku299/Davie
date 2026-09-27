<script setup>
import { ref, computed, watch } from 'vue'
import PageHero from '../../components/PageHero.vue'
import {
  PARCEL_SIZES,
  SPEEDS,
  HANDOVERS,
  EXTRAS,
  quote,
  formatPrice
} from './pricing.js'

const sizeId = ref('small')
const speedId = ref('standard')
const handoverId = ref('dropoff')
const extraIds = ref([])

const estimate = computed(() =>
  quote({
    sizeId: sizeId.value,
    speedId: speedId.value,
    handoverId: handoverId.value,
    extraIds: extraIds.value
  })
)

const chosenSize = computed(() => PARCEL_SIZES.find((s) => s.id === sizeId.value))
const chosenSpeed = computed(() => SPEEDS.find((s) => s.id === speedId.value))

// Saturday delivery only makes sense on an express booking.
const extraAvailable = (extra) => !(extra.id === 'saturday' && speedId.value !== 'express')

// Dropping back to standard must also drop the extra, or a disabled option
// stays checked and keeps being charged for.
watch(speedId, (value) => {
  if (value !== 'express') {
    extraIds.value = extraIds.value.filter((id) => id !== 'saturday')
  }
})
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Book a parcel"
      intro="Pick a size, choose how it travels, and see the price before you hand over a single detail."
    />

    <div class="shell mt-10 grid gap-8 lg:grid-cols-[1fr_22rem]">
      <!-- Options -->
      <div class="space-y-6">
        <!-- Size -->
        <fieldset class="rounded-panel bg-white p-6 shadow-sm sm:p-8">
          <legend class="text-lg font-extrabold tracking-tight text-ink">
            1. How big is it?
          </legend>
          <p class="mt-1 text-sm text-slate">
            Measure the box, not what is inside it. If you are between sizes, go up.
          </p>

          <div class="mt-5 space-y-3">
            <label
              v-for="size in PARCEL_SIZES"
              :key="size.id"
              class="flex cursor-pointer items-center gap-4 rounded-card border-2 p-4 transition-colors"
              :class="sizeId === size.id ? 'border-ink bg-mist' : 'border-slate/20 hover:border-slate/40'"
            >
              <input v-model="sizeId" type="radio" name="size" :value="size.id" class="h-5 w-5 accent-flare" />
              <span class="flex-1">
                <span class="block font-bold text-ink">{{ size.name }}</span>
                <span class="block text-sm text-slate">{{ size.dims }} &middot; {{ size.weight }}</span>
              </span>
              <span class="font-bold text-ink">{{ formatPrice(size.base) }}</span>
            </label>
          </div>
        </fieldset>

        <!-- Speed -->
        <fieldset class="rounded-panel bg-white p-6 shadow-sm sm:p-8">
          <legend class="text-lg font-extrabold tracking-tight text-ink">
            2. How fast?
          </legend>

          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <label
              v-for="speed in SPEEDS"
              :key="speed.id"
              class="flex cursor-pointer items-start gap-3 rounded-card border-2 p-4 transition-colors"
              :class="speedId === speed.id ? 'border-ink bg-mist' : 'border-slate/20 hover:border-slate/40'"
            >
              <input v-model="speedId" type="radio" name="speed" :value="speed.id" class="mt-1 h-5 w-5 accent-flare" />
              <span>
                <span class="block font-bold text-ink">{{ speed.name }}</span>
                <span class="block text-sm text-slate">{{ speed.detail }}</span>
              </span>
            </label>
          </div>
        </fieldset>

        <!-- Handover -->
        <fieldset class="rounded-panel bg-white p-6 shadow-sm sm:p-8">
          <legend class="text-lg font-extrabold tracking-tight text-ink">
            3. Getting it to us
          </legend>

          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <label
              v-for="handover in HANDOVERS"
              :key="handover.id"
              class="flex cursor-pointer items-start gap-3 rounded-card border-2 p-4 transition-colors"
              :class="handoverId === handover.id ? 'border-ink bg-mist' : 'border-slate/20 hover:border-slate/40'"
            >
              <input v-model="handoverId" type="radio" name="handover" :value="handover.id" class="mt-1 h-5 w-5 accent-flare" />
              <span>
                <span class="block font-bold text-ink">{{ handover.name }}</span>
                <span class="block text-sm text-slate">{{ handover.detail }}</span>
              </span>
            </label>
          </div>
        </fieldset>

        <!-- Extras -->
        <fieldset class="rounded-panel bg-white p-6 shadow-sm sm:p-8">
          <legend class="text-lg font-extrabold tracking-tight text-ink">
            4. Anything else?
          </legend>
          <p class="mt-1 text-sm text-slate">Optional. Every parcel already carries £20 of cover.</p>

          <div class="mt-5 space-y-3">
            <label
              v-for="extra in EXTRAS"
              :key="extra.id"
              class="flex items-center gap-4 rounded-card border-2 p-4 transition-colors"
              :class="[
                extraIds.includes(extra.id) ? 'border-ink bg-mist' : 'border-slate/20',
                extraAvailable(extra) ? 'cursor-pointer hover:border-slate/40' : 'cursor-not-allowed opacity-50'
              ]"
            >
              <input
                v-model="extraIds"
                type="checkbox"
                :value="extra.id"
                :disabled="!extraAvailable(extra)"
                class="h-5 w-5 accent-flare"
              />
              <span class="flex-1">
                <span class="block font-bold text-ink">{{ extra.name }}</span>
                <span class="block text-sm text-slate">{{ extra.detail }}</span>
              </span>
              <span class="font-bold text-ink">+{{ formatPrice(extra.price) }}</span>
            </label>
          </div>
        </fieldset>
      </div>

      <!-- Running total -->
      <aside class="lg:sticky lg:top-32 lg:self-start">
        <div class="rounded-panel bg-white p-6 shadow-lg sm:p-8">
          <h2 class="text-lg font-extrabold tracking-tight text-ink">Your price</h2>

          <div aria-live="polite">
            <dl class="mt-5 space-y-3 border-b border-slate/15 pb-5">
              <div
                v-for="line in estimate.lines"
                :key="line.label"
                class="flex justify-between gap-4 text-sm"
              >
                <dt class="text-slate">{{ line.label }}</dt>
                <dd class="shrink-0 font-bold text-ink">{{ formatPrice(line.amount) }}</dd>
              </div>
            </dl>

            <p class="mt-5 flex items-baseline justify-between">
              <span class="font-bold text-ink">Total</span>
              <span class="text-3xl font-extrabold tracking-tight text-ink">
                {{ formatPrice(estimate.total) }}
              </span>
            </p>
          </div>

          <p class="mt-2 text-sm text-slate">
            {{ chosenSize.name }}, {{ chosenSpeed.detail.toLowerCase() }}.
          </p>

          <button type="button" class="btn-primary mt-6 w-full" disabled>
            Book this parcel
          </button>
          <p class="mt-3 text-center text-xs text-slate">
            Booking is switched off — this build has no payment or back end.
          </p>

          <RouterLink to="/prices" class="mt-5 block text-center text-sm font-bold text-flare-ink underline">
            See the full rate card
          </RouterLink>
        </div>
      </aside>
    </div>
  </div>
</template>
