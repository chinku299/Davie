<script setup>
import PageHero from '../components/PageHero.vue'

const roles = [
  { title: 'Local Courier (Self-Employed)', location: 'Multiple UK Postcodes', type: 'Flexible', desc: 'Deliver parcels in your local community on your own schedule. Great earnings potential.' },
  { title: 'Hub Sorting Operative', location: 'Manchester & Rugby Hubs', type: 'Full-time / Part-time', desc: 'Keep our automated sorting facilities running smoothly during peak operational shifts.' },
  { title: 'Senior Software Engineer', location: 'London / Remote', type: 'Permanent', desc: 'Build resilient distributed backend services powering our high-throughput parcel network.' }
]
</script>

<template>
  <div class="bg-mist pb-20 font-sans">
    <PageHero
      title="Careers at Evri"
      intro="Join the UK's leading parcel delivery company. Whether you want to deliver in your local neighborhood or build tech at scale."
    />

    <section class="shell mt-12 max-w-4xl" aria-labelledby="careers-heading">
      <h2 id="careers-heading" class="text-3xl font-black text-[#0A1D33] tracking-tight mb-8">
        Open opportunities
      </h2>

      <div class="space-y-6">
        <div
          v-for="role in roles"
          :key="role.title"
          class="rounded-panel bg-white p-7 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                {{ role.type }}
              </span>
              <span class="text-xs font-bold text-gray-500">{{ role.location }}</span>
            </div>
            <h3 class="text-xl font-black text-[#0A1D33] tracking-tight">{{ role.title }}</h3>
            <p class="text-sm text-gray-600 font-medium max-w-xl">{{ role.desc }}</p>
          </div>
          <a
            href="https://wa.me/447882773759?text=Hello,%20I%20am%20interested%20in%20applying%20for%20a%20career%20at%20Evri."
            class="bg-[#0052CC] hover:bg-[#003D99] text-white font-black px-6 py-3.5 rounded-2xl text-xs uppercase tracking-widest shrink-0 transition-colors"
          >
            Apply now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
