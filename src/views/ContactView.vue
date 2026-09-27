<script setup>
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'

const reason = ref('')
const reference = ref('')
const message = ref('')
const sent = ref(false)
const error = ref('')

const whatsappNumber = '+447882773759'
const whatsappLink = 'https://wa.me/447882773759?text=Hello,%20I%20need%20support%20with%20my%20Evri%20parcel.'

const reasons = [
  'A parcel has not arrived',
  'Something arrived damaged',
  'A question about a booking',
  'Business accounts',
  'Becoming a drop-off point',
  'A complaint'
]

const onSubmit = () => {
  error.value = ''
  if (!reason.value) {
    error.value = 'Pick a reason so we can route it to the right team.'
    return
  }
  if (message.value.trim().length < 10) {
    error.value = 'Tell us a little more — at least a sentence.'
    return
  }
  sent.value = true
}

const channels = [
  { name: 'WhatsApp & Phone', detail: 'Direct support line: +44 7882 773759', hours: '07:00 – 22:00, seven days' },
  { name: 'Live Chat', detail: 'Fastest for anything about a parcel in transit', hours: '07:00 – 22:00, seven days' },
  { name: 'This Form', detail: 'For anything that needs a written record', hours: 'Answered within two working days' }
]
</script>

<template>
  <div class="bg-mist pb-20 font-sans">
    <PageHero
      title="Contact us"
      intro="Have your parcel reference ready if you have one — it saves us both a round of questions."
    />

    <div class="shell mt-12 grid gap-8 lg:grid-cols-[1fr_22rem]">
      <section class="rounded-panel bg-white p-6 shadow-sm sm:p-8" aria-labelledby="form-heading">
        <h2 id="form-heading" class="text-xl font-extrabold tracking-tight text-[#0A1D33]">
          Send us a message
        </h2>

        <div v-if="sent" class="mt-6 rounded-card border-2 border-[#0A1D33]/15 bg-mist p-6" role="status">
          <h3 class="font-extrabold text-[#0A1D33]">Message submitted successfully</h3>
          <p class="mt-2 leading-relaxed text-slate">
            Thank you for reaching out. We have logged your request and our support team will get back to you within two working days.
          </p>
          <button type="button" class="btn-outline-dark mt-5" @click="sent = false">
            Send another message
          </button>
        </div>

        <form v-else class="mt-6 space-y-5" novalidate @submit.prevent="onSubmit">
          <div>
            <label for="reason" class="block text-sm font-bold text-[#0A1D33]">What is it about?</label>
            <select id="reason" v-model="reason" class="field mt-2">
              <option value="">Choose one</option>
              <option v-for="r in reasons" :key="r" :value="r">{{ r }}</option>
            </select>
          </div>

          <div>
            <label for="reference" class="block text-sm font-bold text-[#0A1D33]">
              Parcel reference <span class="font-medium text-slate">(optional)</span>
            </label>
            <input
              id="reference"
              v-model="reference"
              type="text"
              autocomplete="off"
              class="field mt-2"
              placeholder="For example PL 4417 2009 38"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-bold text-[#0A1D33]">What has happened?</label>
            <textarea
              id="message"
              v-model="message"
              rows="6"
              class="field mt-2"
              placeholder="A sentence or two is plenty"
            ></textarea>
          </div>

          <p v-if="error" class="rounded-card bg-mist px-5 py-4 text-sm font-bold text-ink" role="alert">
            {{ error }}
          </p>

          <button type="submit" class="bg-[#0052CC] hover:bg-[#003D99] text-white font-black px-8 py-4 rounded-full uppercase text-xs tracking-widest transition-colors w-full sm:w-auto">
            Send message
          </button>

          <p class="text-sm text-slate">
            Please do not put card details or passwords in this box. We will never ask
            for them.
          </p>
        </form>
      </section>

      <aside class="space-y-5">
        <div class="rounded-panel bg-white p-6 shadow-sm">
          <h2 class="font-extrabold tracking-tight text-[#0A1D33]">Other ways through</h2>

          <!-- Direct WhatsApp Contact Box -->
          <div class="mt-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-4 mb-6">
            <p class="text-xs font-black uppercase tracking-widest text-[#25D366]">Direct WhatsApp Support</p>
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="text-lg font-black text-[#0A1D33] hover:underline mt-1 block">
              {{ whatsappNumber }}
            </a>
            <p class="text-xs text-slate mt-1">Tap to chat instantly with our support team.</p>
          </div>

          <ul class="space-y-4">
            <li v-for="channel in channels" :key="channel.name" class="border-t border-slate/15 pt-4 first:border-0 first:pt-0">
              <h3 class="font-bold text-[#0A1D33]">{{ channel.name }}</h3>
              <p class="text-sm text-slate">{{ channel.detail }}</p>
              <p class="mt-1 text-xs font-bold uppercase tracking-wide text-[#0052CC]">
                {{ channel.hours }}
              </p>
            </li>
          </ul>
        </div>

        <div class="rounded-panel border-2 border-dashed border-slate/30 p-6">
          <h2 class="font-extrabold text-[#0A1D33]">Try the help centre first</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate">
            Missing parcels, damage claims and returns all have a written answer there.
          </p>
          <RouterLink to="/help" class="btn-outline-dark mt-4 w-full">Browse help</RouterLink>
        </div>
      </aside>
    </div>
  </div>
</template>
