<script setup>
import PageHero from '../../components/PageHero.vue'

const options = [
  {
    title: 'Pick a different day',
    body: 'Move the delivery to any date in the next fortnight. Free, and you can change it again later.',
    when: 'Until the van leaves the hub'
  },
  {
    title: 'Send it to a neighbour',
    body: 'Name a house number and we will try there first rather than leaving a card.',
    when: 'Until the morning of delivery'
  },
  {
    title: 'Leave it somewhere safe',
    body: 'Porch, shed, behind the bins. The driver photographs wherever it ends up.',
    when: 'Until the morning of delivery'
  },
  {
    title: 'Divert to a shop',
    body: 'Have it held at a drop-off point instead and collect it when it suits you. Held for seven days.',
    when: 'Until the first delivery attempt'
  }
]

const faqish = [
  {
    q: 'When will I get a delivery window?',
    a: 'On the morning itself, once the van is loaded and the route is set. It arrives by text if the sender gave us your number.'
  },
  {
    q: 'Nobody was in and no card was left',
    a: 'Check the tracking page first — the photo taken at handover usually shows where it went. If there is no photo, tell us and we will ask the driver.'
  },
  {
    q: 'I keep getting somebody else parcels',
    a: 'Let us know the address and reference and we will collect them back. Please do not post them on yourself.'
  }
]
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Receiving a parcel"
      intro="Something on its way to you? You can move it, redirect it or have it held without speaking to anyone."
    />

    <section class="shell mt-12" aria-labelledby="options-heading">
      <h2 id="options-heading" class="text-2xl font-extrabold tracking-tight text-ink">
        What you can change
      </h2>

      <ul class="mt-6 grid gap-5 md:grid-cols-2">
        <li v-for="option in options" :key="option.title" class="rounded-panel bg-white p-7 shadow-sm">
          <h3 class="text-lg font-extrabold tracking-tight text-ink">{{ option.title }}</h3>
          <p class="mt-2 leading-relaxed text-slate">{{ option.body }}</p>
          <p class="mt-4 inline-block rounded-full bg-mist px-3 py-1 text-xs font-bold text-slate">
            {{ option.when }}
          </p>
        </li>
      </ul>

      <div class="on-dark mt-8 flex flex-col items-start gap-6 rounded-panel bg-ink p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 class="text-2xl font-extrabold tracking-tight text-white">
            Start with the reference
          </h2>
          <p class="mt-2 text-white/80">
            Every one of these lives on the tracking page, behind your parcel reference.
          </p>
        </div>
        <RouterLink to="/track" class="btn-primary shrink-0">Track a parcel</RouterLink>
      </div>
    </section>

    <section class="shell mt-14 max-w-3xl" aria-labelledby="receive-faq">
      <h2 id="receive-faq" class="text-2xl font-extrabold tracking-tight text-ink">
        Common questions
      </h2>
      <dl class="mt-6 space-y-5">
        <div v-for="item in faqish" :key="item.q" class="rounded-panel bg-white p-6 shadow-sm">
          <dt class="font-bold text-ink">{{ item.q }}</dt>
          <dd class="mt-2 leading-relaxed text-slate">{{ item.a }}</dd>
        </div>
      </dl>
    </section>
  </div>
</template>
