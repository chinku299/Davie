<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { findParcel, SAMPLE_CODES } from '../features/tracking/tracking.js'
import TrackingResult from '../features/tracking/TrackingResult.vue'

const router = useRouter()
const activeTab = ref('send')

// Send form state
const destination = ref('United Kingdom')
const fromPostcode = ref('')
const toPostcode = ref('')
const weight = ref('')

const handleSend = () => {
  router.push('/send')
}

// Track state
const trackCode = ref('')
const trackResult = ref(null)

const handleTrack = () => {
  trackResult.value = findParcel(trackCode.value)
}

// Return state
const retailer = ref('')
const handleReturn = () => {
  router.push('/returns')
}
</script>

<template>
  <section class="bg-[#0047BA] text-white py-12 px-4 sm:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- Trustpilot Rating Banner -->
      <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/15">
        <span class="text-sm font-extrabold tracking-wide">Great</span>
        <div class="flex items-center gap-1 text-emerald-400">
          <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <span class="text-xs font-semibold text-white/90">5,709,810 reviews on <span class="font-bold underline">Trustpilot</span></span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight mb-10">
        A great value parcel delivery &amp; courier service
      </h1>

      <!-- Main Interactive Widget Box -->
      <div class="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-5xl">
        <!-- Tabs Header -->
        <div class="flex border-b border-gray-200 bg-gray-50">
          <button
            type="button"
            class="flex-1 py-4 text-center font-extrabold text-base transition-colors border-b-4"
            :class="activeTab === 'send' ? 'border-[#0047BA] text-[#0047BA] bg-white' : 'border-transparent text-gray-500 hover:text-gray-800'"
            @click="activeTab = 'send'"
          >
            Send
          </button>
          <button
            type="button"
            class="flex-1 py-4 text-center font-extrabold text-base transition-colors border-b-4"
            :class="activeTab === 'track' ? 'border-[#0047BA] text-[#0047BA] bg-white' : 'border-transparent text-gray-500 hover:text-gray-800'"
            @click="activeTab = 'track'"
          >
            Track
          </button>
          <button
            type="button"
            class="flex-1 py-4 text-center font-extrabold text-base transition-colors border-b-4"
            :class="activeTab === 'return' ? 'border-[#0047BA] text-[#0047BA] bg-white' : 'border-transparent text-gray-500 hover:text-gray-800'"
            @click="activeTab = 'return'"
          >
            Return
          </button>
        </div>

        <!-- Tab 1: Send -->
        <div v-if="activeTab === 'send'" class="p-6 sm:p-10 space-y-6">
          <!-- Sale Pill -->
          <div class="inline-block bg-[#E0F7FA] text-[#006064] text-xs font-extrabold px-3 py-1 rounded-full">
            SALE: Up to £1.27 off 0-2kg parcels
          </div>

          <div>
            <h2 class="text-3xl font-black text-[#0C1D30] tracking-tight">
              SEND from £2.62 <span class="text-lg font-bold text-gray-500">(£2.18 + VAT)</span>
            </h2>
            <p class="text-sm text-gray-600 mt-1 font-medium">
              Pay less for UK parcels up to 15kg vs. Royal Mail Click &amp; Drop**
            </p>
          </div>

          <!-- Form Grid -->
          <form novalidate @submit.prevent="handleSend" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">Destination country</label>
              <select v-model="destination" class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm font-bold text-[#0C1D30] focus:border-[#0047BA] focus:outline-none">
                <option>United Kingdom</option>
                <option>Ireland</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">From postcode *</label>
              <input
                v-model="fromPostcode"
                type="text"
                placeholder="e.g. LS1 1AA"
                class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm font-bold text-[#0C1D30] focus:border-[#0047BA] focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">To postcode *</label>
              <input
                v-model="toPostcode"
                type="text"
                placeholder="e.g. SW1A 1AA"
                class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm font-bold text-[#0C1D30] focus:border-[#0047BA] focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1">Weight (kg)</label>
              <select v-model="weight" class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm font-bold text-[#0C1D30] focus:border-[#0047BA] focus:outline-none">
                <option value="">Please select</option>
                <option>Up to 1kg (Large letter)</option>
                <option>Up to 2kg (Small parcel)</option>
                <option>Up to 10kg (Medium parcel)</option>
                <option>Up to 20kg (Large parcel)</option>
              </select>
            </div>

            <div class="lg:col-span-4 flex flex-wrap items-center justify-between gap-4 pt-2">
              <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-[#0047BA]">
                <RouterLink to="/restrictions" class="hover:underline">What you can and can't send</RouterLink>
                <RouterLink to="/prices" class="hover:underline">Parcel size and weight guide</RouterLink>
                <a href="#" class="hover:underline text-gray-600 font-normal">**See how Evri compares to Royal Mail</a>
              </div>

              <button
                type="submit"
                class="bg-[#333333] hover:bg-black text-white font-black px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-colors ml-auto"
              >
                Send a parcel &gt;
              </button>
            </div>
          </form>
        </div>

        <!-- Tab 2: Track -->
        <div v-if="activeTab === 'track'" class="p-6 sm:p-10 space-y-6">
          <h2 class="text-3xl font-black text-[#0C1D30] tracking-tight">Track a parcel</h2>
          <p class="text-sm text-gray-600 font-medium">Enter your reference code to check live scan history.</p>
          <div class="flex gap-3 max-w-xl">
            <input
              v-model="trackCode"
              type="text"
              placeholder="e.g. PL 4417 2009 38"
              class="flex-1 bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm font-bold text-[#0C1D30] focus:border-[#0047BA] focus:outline-none"
            />
            <button
              type="button"
              class="bg-[#333333] hover:bg-black text-white font-black px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors"
              @click="handleTrack"
            >
              Track
            </button>
          </div>
          <TrackingResult :result="trackResult" class="mt-4" />
          <div class="pt-2 text-xs text-gray-500">
            Sample codes: <span class="font-mono font-bold">PL4417200938</span>, <span class="font-mono font-bold">PL8820561147</span>
          </div>
        </div>

        <!-- Tab 3: Return -->
        <div v-if="activeTab === 'return'" class="p-6 sm:p-10 space-y-6">
          <h2 class="text-3xl font-black text-[#0C1D30] tracking-tight">Send something back</h2>
          <p class="text-sm text-gray-600 font-medium">Search for your retailer to start a fast, printer-free return.</p>
          <div class="flex gap-3 max-w-xl">
            <input
              v-model="retailer"
              type="text"
              placeholder="Start typing a shop name (e.g. Bramble)"
              class="flex-1 bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm font-bold text-[#0C1D30] focus:border-[#0047BA] focus:outline-none"
            />
            <button
              type="button"
              class="bg-[#333333] hover:bg-black text-white font-black px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors"
              @click="handleReturn"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
