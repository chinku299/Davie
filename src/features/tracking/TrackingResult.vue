<script setup>
defineProps({
  result: { type: Object, default: null }
})

const TONE = {
  'out-for-delivery': 'bg-flare/15 text-flare-ink',
  delivered: 'bg-ink/10 text-ink',
  'in-transit': 'bg-mist text-slate'
}

const LABEL = {
  'out-for-delivery': 'Out for delivery',
  delivered: 'Delivered',
  'in-transit': 'In transit'
}
</script>

<template>
  <!-- aria-live so a screen reader hears the outcome without moving focus. -->
  <div aria-live="polite">
    <template v-if="result">
      <p
        v-if="result.state === 'empty'"
        class="rounded-card bg-mist px-5 py-4 text-sm font-medium text-ink"
      >
        Enter a parcel reference first.
      </p>

      <p
        v-else-if="result.state === 'too-short'"
        class="rounded-card bg-mist px-5 py-4 text-sm font-medium text-ink"
      >
        That reference looks a little short. Check the email we sent you.
      </p>

      <p
        v-else-if="result.state === 'not-found'"
        class="rounded-card bg-mist px-5 py-4 text-sm font-medium text-ink"
      >
        We have no record of <strong>{{ result.key }}</strong>. References can take a
        couple of hours to appear after a parcel is booked.
      </p>

      <div v-else class="rounded-card border-2 border-ink/10 p-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="font-mono text-sm font-bold text-slate">{{ result.parcel.reference }}</p>
          <span
            class="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
            :class="TONE[result.parcel.status]"
          >
            {{ LABEL[result.parcel.status] }}
          </span>
        </div>

        <p class="mt-3 text-lg font-extrabold text-ink">{{ result.parcel.headline }}</p>
        <p class="text-slate">{{ result.parcel.detail }}</p>
        <p class="mt-1 text-sm text-slate">Heading for {{ result.parcel.destination }}</p>

        <ol class="mt-5 space-y-4 border-t border-slate/15 pt-5">
          <li
            v-for="step in result.parcel.steps"
            :key="step.label"
            class="flex gap-3"
          >
            <span
              class="mt-1.5 h-3 w-3 shrink-0 rounded-full"
              :class="step.done ? 'bg-flare' : 'border-2 border-slate/40 bg-white'"
              aria-hidden="true"
            ></span>
            <div class="flex-1">
              <p class="font-bold text-ink">
                {{ step.label }}
                <span v-if="!step.done" class="font-medium text-slate">(not yet)</span>
              </p>
              <p class="text-sm text-slate">{{ step.place }} &middot; {{ step.when }}</p>
            </div>
          </li>
        </ol>
      </div>
    </template>
  </div>
</template>
