<script setup>
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'

/**
 * The form is deliberately inert: there is no back end in this build, so
 * submitting only updates local state. Nothing is stored or sent anywhere.
 */
const reason = ref('')
const reference = ref('')
const message = ref('')
const sent = ref(false)
const error = ref('')

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
  { name: 'Live chat', detail: 'Fastest for anything about a parcel in transit', hours: '07:00 – 22:00, seven days' },
  { name: 'Phone', detail: 'Best if a driver is at your door right now', hours: '08:00 – 20:00, weekdays' },
  { name: 'This form', detail: 'For anything that needs a written record', hours: 'Answered within two working days' }
]
</script>

<template>
  <div class="bg-mist pb-20">
    <PageHero
      title="Contact us"
      intro="Have your parcel reference ready if you have one — it saves us both a round of questions."
    />

    <div class="shell mt-12 grid gap-8 lg:grid-cols-[1fr_20rem]">
      <section class="rounded-panel bg-white p-6 shadow-sm sm:p-8" aria-labelledby="form-heading">
        <h2 id="form-heading" class="text-xl font-extrabold tracking-tight text-ink">
          Send us a message
        </h2>

        <div v-if="sent" class="mt-6 rounded-card border-2 border-ink/15 bg-mist p-6" role="status">
          <h3 class="font-extrabold text-ink">Nothing was actually sent</h3>
          <p class="mt-2 leading-relaxed text-slate">
            This is a coursework build with no back end, so the form stops here. In a
            real version you would get a reference number and an email confirming it.
          </p>
          <button type="button" class="btn-outline-dark mt-5" @click="sent = false">
            Back to the form
          </button>
        </div>

        <form v-else class="mt-6 space-y-5" novalidate @submit.prevent="onSubmit">
          <div>
            <label for="reason" class="block text-sm font-bold text-ink">What is it about?</label>
            <select id="reason" v-model="reason" class="field mt-2">
              <option value="">Choose one</option>
              <option v-for="r in reasons" :key="r" :value="r">{{ r }}</option>
            </select>
          </div>

          <div>
            <label for="reference" class="block text-sm font-bold text-ink">
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
            <label for="message" class="block text-sm font-bold text-ink">What has happened?</label>
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

          <button type="submit" class="btn-primary w-full sm:w-auto">Send message</button>

          <p class="text-sm text-slate">
            Please do not put card details or passwords in this box. We will never ask
            for them.
          </p>
        </form>
      </section>

      <aside class="space-y-5">
        <div class="rounded-panel bg-white p-6 shadow-sm">
          <h2 class="font-extrabold tracking-tight text-ink">Other ways through</h2>
          <ul class="mt-4 space-y-4">
            <li v-for="channel in channels" :key="channel.name" class="border-t border-slate/15 pt-4 first:border-0 first:pt-0">
              <h3 class="font-bold text-ink">{{ channel.name }}</h3>
              <p class="text-sm text-slate">{{ channel.detail }}</p>
              <p class="mt-1 text-xs font-bold uppercase tracking-wide text-flare-ink">
                {{ channel.hours }}
              </p>
            </li>
          </ul>
        </div>

        <div class="rounded-panel border-2 border-dashed border-slate/30 p-6">
          <h2 class="font-extrabold text-ink">Try the help centre first</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate">
            Missing parcels, damage claims and returns all have a written answer there.
          </p>
          <RouterLink to="/help" class="btn-outline-dark mt-4 w-full">Browse help</RouterLink>
        </div>
      </aside>
    </div>
  </div>
</template>
