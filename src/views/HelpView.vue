<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import FaqAccordion from '../components/FaqAccordion.vue'
import { FAQ_GROUPS } from '../data/faqs.js'

const query = ref('')
const activeTopic = ref('All')

const topics = ['All', ...FAQ_GROUPS.map((g) => g.topic)]

const visible = computed(() => {
  const q = query.value.trim().toLowerCase()

  return FAQ_GROUPS
    .filter((group) => activeTopic.value === 'All' || group.topic === activeTopic.value)
    .map((group) => ({
      topic: group.topic,
      items: q
        ? group.items.filter((i) => (i.q + ' ' + i.a).toLowerCase().includes(q))
        : group.items
    }))
    .filter((group) => group.items.length > 0)
})

const total = computed(() => visible.value.reduce((n, g) => n + g.items.length, 0))
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Help centre"
      intro="Most things can be sorted here in a minute. If yours cannot, the contact page has a person on the other end."
    />

    <section class="shell max-w-4xl">
      <div class="-mt-10 rounded-panel bg-white p-6 shadow-xl sm:p-8">
        <label for="faq-search" class="block text-sm font-bold text-ink">
          Search help
        </label>
        <input
          id="faq-search"
          v-model="query"
          type="search"
          class="field mt-2"
          placeholder="Try &ldquo;damaged&rdquo; or &ldquo;printer&rdquo;"
        />

        <fieldset class="mt-5">
          <legend class="sr-only">Filter by topic</legend>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="topic in topics"
              :key="topic"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-bold transition-colors"
              :class="activeTopic === topic
                ? 'bg-ink text-white'
                : 'bg-mist text-slate hover:bg-slate/20'"
              :aria-pressed="activeTopic === topic"
              @click="activeTopic = topic"
            >
              {{ topic }}
            </button>
          </div>
        </fieldset>
      </div>

      <div class="mt-10" aria-live="polite">
        <p class="text-sm text-slate">
          {{ total }} {{ total === 1 ? 'answer' : 'answers' }}
        </p>

        <div v-if="total" class="mt-4 space-y-10">
          <section v-for="group in visible" :key="group.topic" :aria-labelledby="'t-' + group.topic">
            <h2 :id="'t-' + group.topic" class="text-xl font-extrabold tracking-tight text-ink">
              {{ group.topic }}
            </h2>
            <FaqAccordion class="mt-4" :items="group.items" :id-prefix="group.topic" />
          </section>
        </div>

        <p v-else class="mt-4 rounded-panel bg-white p-6 text-slate shadow-sm">
          Nothing here matches &ldquo;{{ query }}&rdquo;. Try a shorter word, or
          <RouterLink to="/contact" class="font-bold text-flare-ink underline">ask us directly</RouterLink>.
        </p>
      </div>

      <div class="on-dark mt-14 flex flex-col items-start gap-6 rounded-panel bg-ink p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 class="text-2xl font-extrabold tracking-tight text-white">Still stuck?</h2>
          <p class="mt-2 text-white/80">
            Have your parcel reference to hand and we can pick it up from there.
          </p>
        </div>
        <RouterLink to="/contact" class="btn-primary shrink-0">Contact us</RouterLink>
      </div>
    </section>
  </div>
</template>
