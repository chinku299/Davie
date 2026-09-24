<script setup>
import { ref } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { POINTS, searchPoints } from './network.js'

const query = ref('')
const results = ref(null)

const onSearch = () => {
  results.value = searchPoints(query.value)
}

const towns = [...new Set(POINTS.map((p) => p.town))]

const pickTown = (town) => {
  query.value = town
  onSearch()
}
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Drop-off points"
      intro="Corner shops, garages and locker banks. Most open early, many open late, and a good number never close at all."
    />

    <section class="shell max-w-4xl" aria-labelledby="finder-heading">
      <div class="-mt-10 rounded-panel bg-white p-6 shadow-xl sm:p-10">
        <h2 id="finder-heading" class="text-xl font-extrabold tracking-tight text-ink">
          Find one near you
        </h2>

        <form class="mt-5" novalidate @submit.prevent="onSearch">
          <label for="place" class="sr-only">Postcode or town</label>
          <div class="flex flex-col gap-3 sm:flex-row">
            <input
              id="place"
              v-model="query"
              type="text"
              autocomplete="off"
              class="field flex-1"
              placeholder="Postcode or town"
              aria-describedby="place-hint"
            />
            <button type="submit" class="btn-primary shrink-0">Search</button>
          </div>
          <p id="place-hint" class="mt-2 text-sm text-slate">
            Sample locations only. Try one of these:
          </p>
        </form>

        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="town in towns" :key="town">
            <button
              type="button"
              class="rounded-full bg-mist px-4 py-1.5 text-sm font-bold text-ink hover:bg-ink hover:text-white"
              @click="pickTown(town)"
            >
              {{ town }}
            </button>
          </li>
        </ul>

        <div aria-live="polite">
          <ul v-if="results && results.length" class="mt-8 space-y-4">
            <li
              v-for="point in results"
              :key="point.id"
              class="rounded-card border-2 border-slate/15 p-5"
            >
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 class="font-extrabold text-ink">{{ point.name }}</h3>
                  <p class="text-sm text-slate">
                    {{ point.street }}, {{ point.town }} {{ point.postcode }}
                  </p>
                </div>
                <span class="rounded-full bg-mist px-3 py-1 text-xs font-bold text-slate">
                  {{ point.kind }}
                </span>
              </div>

              <dl class="mt-4 flex flex-wrap gap-x-8 gap-y-2 border-t border-slate/15 pt-4 text-sm">
                <div>
                  <dt class="font-bold text-ink">Open</dt>
                  <dd class="text-slate">{{ point.hours }}</dd>
                </div>
                <div>
                  <dt class="font-bold text-ink">Label printing</dt>
                  <dd class="text-slate">{{ point.printing ? 'Yes, staff can print' : 'No, bring a label' }}</dd>
                </div>
              </dl>
            </li>
          </ul>

          <p
            v-else-if="results"
            class="mt-8 rounded-card bg-mist px-5 py-4 text-sm font-medium text-ink"
          >
            Nothing matches &ldquo;{{ query }}&rdquo; in the sample data. This build only
            covers Leeds, Bristol, Glasgow and Manchester.
          </p>
        </div>
      </div>
    </section>

    <section class="shell mt-14 max-w-4xl">
      <div class="on-dark flex flex-col items-start gap-6 rounded-panel bg-ink p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 class="text-2xl font-extrabold tracking-tight text-white">
            Run a shop?
          </h2>
          <p class="mt-2 text-white/80">
            Becoming a drop-off point brings people through the door, and we pay per parcel handled.
          </p>
        </div>
        <RouterLink to="/contact" class="btn-primary shrink-0">Get in touch</RouterLink>
      </div>
    </section>
  </div>
</template>
