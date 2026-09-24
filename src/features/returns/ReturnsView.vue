<script setup>
import { ref, computed } from 'vue'

/** Invented retailer list — stands in for a partner lookup endpoint. */
const RETAILERS = [
  { name: 'Halcyon Home', free: true, window: '28 days' },
  { name: 'Bramble & Co', free: true, window: '30 days' },
  { name: 'Northgate Sports', free: false, window: '14 days' },
  { name: 'Studio Fennec', free: true, window: '21 days' },
  { name: 'Cold Harbour Books', free: false, window: '30 days' },
  { name: 'Verity Clothing', free: true, window: '60 days' }
]

const query = ref('')
const submitted = ref(false)

const matches = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return RETAILERS.filter((r) => r.name.toLowerCase().includes(q))
})

const steps = [
  {
    title: 'Tell us who you bought from',
    body: 'Search for the retailer above. We will show their returns window and say whether postage is on them or on you.'
  },
  {
    title: 'Get your code',
    body: 'A QR code lands in your inbox. Screenshot it. If you would rather carry paper, there is a printable label too.'
  },
  {
    title: 'Hand it over',
    body: 'Take the parcel to any drop-off point. Staff scan the code, you get a receipt, and tracking starts straight away.'
  }
]
</script>

<template>
  <div class="bg-mist pb-20">
    <!-- Hero -->
    <section class="on-dark bg-ink py-14 sm:py-16">
      <div class="shell max-w-3xl">
        <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          Send something back
        </h1>
        <p class="mt-4 text-lg leading-relaxed text-white/85">
          Returns should take five minutes, not an afternoon. No printer needed, no
          appointment, and a receipt in your hand before you leave the shop.
        </p>
      </div>
    </section>

    <!-- Retailer search, overlapping the hero -->
    <section class="shell max-w-4xl" aria-labelledby="retailer-heading">
      <div class="-mt-10 rounded-panel bg-white p-6 shadow-xl sm:p-10">
        <h2 id="retailer-heading" class="text-xl font-extrabold tracking-tight text-ink">
          Who did you buy from?
        </h2>

        <form class="mt-5" novalidate @submit.prevent="submitted = true">
          <label for="retailer" class="sr-only">Retailer name</label>
          <div class="flex flex-col gap-3 sm:flex-row">
            <input
              id="retailer"
              v-model="query"
              type="text"
              autocomplete="off"
              class="field flex-1"
              placeholder="Start typing a shop name"
              aria-describedby="retailer-hint"
            />
            <button type="submit" class="btn-primary shrink-0">Search</button>
          </div>
          <p id="retailer-hint" class="mt-2 text-sm text-slate">
            Sample partners only. Try &ldquo;Bramble&rdquo; or &ldquo;Studio&rdquo;.
          </p>
        </form>

        <div aria-live="polite">
          <ul v-if="matches.length" class="mt-6 divide-y divide-slate/15">
            <li
              v-for="retailer in matches"
              :key="retailer.name"
              class="flex flex-wrap items-center justify-between gap-3 py-4"
            >
              <div>
                <p class="font-bold text-ink">{{ retailer.name }}</p>
                <p class="text-sm text-slate">
                  {{ retailer.window }} to return &middot;
                  {{ retailer.free ? 'postage covered by the retailer' : 'postage paid by you' }}
                </p>
              </div>
              <RouterLink to="/help" class="btn-dark px-6 py-3">Start</RouterLink>
            </li>
          </ul>

          <p
            v-else-if="submitted && query.trim()"
            class="mt-6 rounded-card bg-mist px-5 py-4 text-sm font-medium text-ink"
          >
            No partner matches &ldquo;{{ query }}&rdquo;. You can still send it back as an
            ordinary parcel &mdash; you will just be paying the postage yourself.
          </p>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="shell mt-20" aria-labelledby="steps-heading">
      <h2 id="steps-heading" class="text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Three steps, start to finish
      </h2>

      <ol class="mt-12 grid gap-8 md:grid-cols-3">
        <li v-for="(step, i) in steps" :key="step.title" class="rounded-panel bg-white p-7 shadow-sm">
          <span
            class="flex h-11 w-11 items-center justify-center rounded-full bg-flare text-lg font-extrabold text-ink"
            aria-hidden="true"
          >
            {{ i + 1 }}
          </span>
          <h3 class="mt-5 text-lg font-extrabold tracking-tight text-ink">
            {{ step.title }}
          </h3>
          <p class="mt-3 leading-relaxed text-slate">{{ step.body }}</p>
        </li>
      </ol>
    </section>

    <!-- Collection option -->
    <section class="shell mt-16">
      <div class="flex flex-col items-center gap-10 rounded-panel bg-white p-8 shadow-sm sm:p-12 md:flex-row">
        <div class="flex-1">
          <h2 class="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Cannot get to a shop?
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-slate">
            Choose collection when you book and a driver picks the parcel up from your
            door. Leave it with a neighbour if you are out &mdash; just say which one.
          </p>
          <RouterLink to="/send" class="btn-primary mt-8">Book a collection</RouterLink>
        </div>

        <div class="flex aspect-square w-full items-center justify-center rounded-panel bg-ink md:w-64">
          <svg
            class="h-28 w-28 text-flare"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
            <circle cx="7" cy="18" r="1.8" />
            <circle cx="17" cy="18" r="1.8" />
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>
