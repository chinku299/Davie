<script setup>
import { ref } from 'vue'
import { findParcel, SAMPLE_CODES } from '../features/tracking/tracking.js'
import TrackingResult from '../features/tracking/TrackingResult.vue'

const code = ref('')
const result = ref(null)

const onSubmit = () => {
  result.value = findParcel(code.value)
}

const useSample = () => {
  code.value = SAMPLE_CODES[0]
  onSubmit()
}
</script>

<template>
  <section class="on-dark bg-ink py-14 sm:py-20">
    <div class="shell grid items-start gap-12 lg:grid-cols-2">
      <!-- Left: positioning -->
      <div class="text-white">
        <p class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
          <span class="h-2 w-2 rounded-full bg-flare" aria-hidden="true"></span>
          Now open seven days a week
        </p>

        <h1 class="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Parcels, handled properly
        </h1>

        <p class="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
          Book a collection from your door or drop your parcel at a shop down the road.
          Either way you get a clear price up front and a delivery window you can plan
          your day around.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/send" class="btn-primary">Get a price</RouterLink>
          <RouterLink to="/network" class="btn-outline-light">Find a drop-off point</RouterLink>
        </div>

        <dl class="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/20 pt-8">
          <div>
            <dt class="text-sm text-white/70">Drop-off points</dt>
            <dd class="text-2xl font-extrabold">1,400</dd>
          </div>
          <div>
            <dt class="text-sm text-white/70">Countries served</dt>
            <dd class="text-2xl font-extrabold">32</dd>
          </div>
          <div>
            <dt class="text-sm text-white/70">Parcels a week</dt>
            <dd class="text-2xl font-extrabold">90k</dd>
          </div>
        </dl>
        <p class="mt-3 text-xs text-white/70">Sample figures for this student project.</p>
      </div>

      <!-- Right: tracking card -->
      <div class="rounded-panel bg-white p-6 shadow-2xl sm:p-10">
        <h2 class="text-2xl font-extrabold tracking-tight text-ink">Where is my parcel?</h2>
        <p class="mt-2 text-slate">
          Pop in the reference from your confirmation email or receipt.
        </p>

        <form class="mt-6" novalidate @submit.prevent="onSubmit">
          <label for="tracking" class="block text-sm font-bold text-ink">
            Parcel reference
          </label>
          <input
            id="tracking"
            v-model="code"
            type="text"
            inputmode="latin"
            autocomplete="off"
            class="field mt-2"
            placeholder="For example PL 4417 2009 38"
            aria-describedby="tracking-hint"
          />
          <p id="tracking-hint" class="mt-2 text-sm text-slate">
            Twelve characters, letters and numbers. Spaces are fine.
          </p>

          <button type="submit" class="btn-primary mt-5 w-full">Track this parcel</button>
        </form>

        <TrackingResult :result="result" class="mt-6" />

        <p class="mt-6 border-t border-slate/15 pt-5 text-sm text-slate">
          Nothing to hand?
          <button type="button" class="rounded font-bold text-flare-ink underline" @click="useSample">
            Try it with a sample reference
          </button>
        </p>
      </div>
    </div>
  </section>
</template>
