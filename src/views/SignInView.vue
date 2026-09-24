<script setup>
import { ref } from 'vue'

/**
 * There is no authentication in this build and no server to talk to. The form
 * is here to show the layout only: submitting sets a local flag and nothing is
 * validated, stored, or transmitted. Do not wire this to a real account system
 * without replacing it wholesale.
 */
const attempted = ref(false)
</script>

<template>
  <div class="flex min-h-[70vh] items-center bg-mist py-16">
    <div class="shell max-w-md">
      <div class="rounded-panel bg-white p-8 shadow-lg">
        <h1 class="text-2xl font-extrabold tracking-tight text-ink">Sign in</h1>
        <p class="mt-2 text-slate">
          Your bookings, addresses and labels in one place.
        </p>

        <div class="mt-6 rounded-card border-2 border-dashed border-slate/30 p-5">
          <h2 class="text-sm font-extrabold uppercase tracking-wide text-flare-ink">
            Demonstration only
          </h2>
          <p class="mt-2 text-sm leading-relaxed text-slate">
            This coursework build has no accounts and no server behind it. The fields
            below are switched off so nobody types a real password into a page that
            cannot protect it.
          </p>
        </div>

        <form class="mt-6 space-y-4" novalidate @submit.prevent="attempted = true">
          <div>
            <label for="email" class="block text-sm font-bold text-ink">Email address</label>
            <input
              id="email"
              type="email"
              class="field mt-2"
              placeholder="you@example.com"
              autocomplete="off"
              disabled
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-bold text-ink">Password</label>
            <input
              id="password"
              type="password"
              class="field mt-2"
              placeholder="Disabled in this build"
              autocomplete="off"
              disabled
            />
          </div>

          <button type="submit" class="btn-primary w-full" disabled>Sign in</button>
        </form>

        <p class="mt-6 border-t border-slate/15 pt-5 text-sm text-slate">
          You do not need an account to
          <RouterLink to="/track" class="font-bold text-flare-ink underline">track a parcel</RouterLink>
          or to
          <RouterLink to="/send" class="font-bold text-flare-ink underline">check a price</RouterLink>.
        </p>
      </div>
    </div>
  </div>
</template>
