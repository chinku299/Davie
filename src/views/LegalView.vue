<script setup>
import { computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import { LEGAL_DOCS } from '../data/legal.js'

const props = defineProps({
  docId: { type: String, required: true }
})

const doc = computed(() => LEGAL_DOCS[props.docId])

const siblings = computed(() =>
  Object.entries(LEGAL_DOCS)
    .filter(([id]) => id !== props.docId)
    .map(([id, value]) => ({ id, title: value.title }))
)
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero eyebrow="The small print" :title="doc.title" :intro="doc.intro" />

    <div class="shell mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_16rem]">
      <article class="rounded-panel bg-white p-7 shadow-sm sm:p-10">
        <p class="text-sm font-bold uppercase tracking-wide text-slate">
          Last updated {{ doc.updated }}
        </p>

        <div class="mt-8 space-y-8">
          <section v-for="section in doc.sections" :key="section.heading">
            <h2 class="text-xl font-extrabold tracking-tight text-ink">
              {{ section.heading }}
            </h2>
            <p class="mt-3 leading-relaxed text-slate">{{ section.body }}</p>
          </section>
        </div>
      </article>

      <aside>
        <nav class="rounded-panel bg-white p-6 shadow-sm" aria-labelledby="other-docs">
          <h2 id="other-docs" class="font-extrabold tracking-tight text-ink">
            The rest of it
          </h2>
          <ul class="mt-4 space-y-3">
            <li v-for="sibling in siblings" :key="sibling.id">
              <RouterLink
                :to="'/' + sibling.id"
                class="font-medium text-slate hover:text-flare-ink hover:underline"
              >
                {{ sibling.title }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div class="mt-5 rounded-panel border-2 border-dashed border-slate/30 p-6">
          <p class="text-sm leading-relaxed text-slate">
            Parcelane is invented and this site is coursework. These pages describe how
            the demo behaves, not a real company's obligations.
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>
