<script setup>
import { ref } from 'vue'
import { findParcel, SAMPLE_CODES } from './tracking.js'
import TrackingResult from './TrackingResult.vue'

const code = ref('')
const result = ref(null)

const onSubmit = () => {
  result.value = findParcel(code.value)
}

const fill = (sample) => {
  code.value = sample
  onSubmit()
}
</script>

<template>
  <div class="bg-mist pb-20">
    <section class="on-dark bg-ink py-14">
      <div class="shell max-w-3xl">
        <h1 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Track a parcel
        </h1>
        <p class="mt-4 text-lg leading-relaxed text-white/85">
          One reference, one screen, every scan we have. If a parcel has not moved for
          a while the page will say so rather than leave you guessing.
        </p>
      </div>
    </section>

    <section class="shell max-w-3xl">
      <div class="-mt-10 rounded-panel bg-white p-6 shadow-xl sm:p-10">
        <form novalidate @submit.prevent="onSubmit">
          <label for="track-page-input" class="block text-sm font-bold text-ink">
            Parcel reference
          </label>
          <div class="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="track-page-input"
              v-model="code"
              type="text"
              autocomplete="off"
              class="field flex-1"
              placeholder="For example PL 4417 2009 38"
            />
            <button type="submit" class="btn-primary shrink-0">Track</button>
          </div>
        </form>

        <TrackingResult :result="result" class="mt-6" />
      </div>

      <div class="mt-8 rounded-panel border-2 border-dashed border-slate/30 p-6">
        <h2 class="font-extrabold text-ink">Sample references</h2>
        <p class="mt-1 text-sm text-slate">
          This build has no back end. These three references are the whole database.
        </p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="sample in SAMPLE_CODES" :key="sample">
            <button
              type="button"
              class="rounded-full bg-white px-4 py-2 font-mono text-sm font-bold text-ink shadow-sm hover:bg-ink hover:text-white"
              @click="fill(sample)"
            >
              {{ sample }}
            </button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
