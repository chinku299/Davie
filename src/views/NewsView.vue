<script setup>
import PageHero from '../components/PageHero.vue'

const newsItems = [
  {
    date: '24 September 2026',
    category: 'Sustainability',
    title: 'Evri expands zero-emission electric delivery fleet across 15 major UK cities',
    summary: 'Our ongoing investment in 100% electric vans and cargo bikes has cut last-mile carbon emissions by 42% year-on-year.'
  },
  {
    date: '12 September 2026',
    category: 'Network',
    title: 'Over 1,400 new ParcelShops and 24/7 automated lockers added ahead of peak season',
    summary: 'Consumers now have even more convenient local drop-off and collection points within a 10-minute walk of 95% of the UK population.'
  },
  {
    date: '03 August 2026',
    category: 'Technology',
    title: 'Next-generation AI scanning rolling out across all sorting hubs',
    summary: 'Real-time parcel routing accuracy reaches 99.8%, ensuring faster transit times and live picture-on-delivery tracking for every shipment.'
  }
]
</script>

<template>
  <div class="bg-mist pb-20 font-sans">
    <PageHero
      title="News & Corporate"
      intro="Latest updates, sustainability commitments, financial reports, and announcements from Evri."
    />

    <section class="shell mt-12 max-w-4xl" aria-labelledby="news-heading">
      <h2 id="news-heading" class="sr-only">Latest Press Releases</h2>

      <div class="space-y-6">
        <article
          v-for="item in newsItems"
          :key="item.title"
          class="rounded-panel bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <div class="flex items-center gap-4 text-xs font-bold text-gray-500 mb-2">
            <span class="bg-[#0052CC]/10 text-[#0052CC] px-3 py-1 rounded-full uppercase tracking-wider">{{ item.category }}</span>
            <span>{{ item.date }}</span>
          </div>
          <h3 class="text-xl font-black text-[#0A1D33] tracking-tight mb-3">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 font-medium leading-relaxed">
            {{ item.summary }}
          </p>
        </article>
      </div>

      <div class="mt-12 rounded-panel bg-[#0A1D33] text-white p-8 sm:p-12 text-center">
        <h3 class="text-2xl font-black tracking-tight mb-3">Media enquiries</h3>
        <p class="text-white/80 max-w-lg mx-auto mb-6 font-medium">
          Journalists and media professionals can reach out to our press office team for statements and interviews.
        </p>
        <RouterLink to="/contact" class="bg-[#2DC5B8] text-[#0A1D33] font-black px-8 py-3.5 rounded-full uppercase text-xs tracking-widest hover:bg-white transition-colors inline-block">
          Contact press office
        </RouterLink>
      </div>
    </section>
  </div>
</template>
