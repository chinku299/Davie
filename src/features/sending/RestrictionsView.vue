<script setup>
import PageHero from '../../components/PageHero.vue'
import { RESTRICTED } from '../../data/faqs.js'
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="What we cannot carry"
      intro="Some things are unsafe in a van, some are uninsurable, and some are simply not ours to move. Here is the whole list."
    />

    <section class="shell mt-12 max-w-4xl">
      <div class="rounded-panel bg-white shadow-sm">
        <ul class="divide-y divide-slate/15">
          <li
            v-for="entry in RESTRICTED"
            :key="entry.item"
            class="flex flex-col gap-1 p-6 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span class="flex items-start gap-3 sm:w-2/5">
              <svg
                class="mt-1 h-5 w-5 shrink-0 text-flare-ink"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M6 18 18 6" />
              </svg>
              <span class="font-bold text-ink">{{ entry.item }}</span>
            </span>
            <span class="text-slate sm:flex-1">{{ entry.why }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-8 rounded-panel border-2 border-dashed border-slate/30 p-6">
        <h2 class="font-extrabold text-ink">If you send one of these anyway</h2>
        <p class="mt-2 leading-relaxed text-slate">
          The parcel can be held, returned or disposed of, and no claim can be settled
          on it. When in doubt, ask before you book rather than after.
        </p>
        <RouterLink to="/contact" class="btn-outline-dark mt-5">Ask us first</RouterLink>
      </div>

      <p class="mt-6 text-sm text-slate">
        Sending abroad narrows this further &mdash; individual countries ban things the UK
        allows. Check the
        <RouterLink to="/overseas" class="font-bold text-flare-ink underline">overseas page</RouterLink>
        as well.
      </p>
    </section>
  </div>
</template>
