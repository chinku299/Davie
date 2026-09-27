<script setup>
import { ref, onMounted } from 'vue'

const accepted = ref(true)

onMounted(() => {
  const consent = localStorage.getItem('evri_cookie_consent')
  if (!consent) {
    accepted.value = false
  }
})

const acceptCookies = () => {
  localStorage.setItem('evri_cookie_consent', 'true')
  accepted.value = true
}
</script>

<template>
  <div v-if="!accepted" class="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1D33] text-white p-4 sm:p-6 shadow-2xl border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
    <div class="text-sm text-white/90 max-w-3xl">
      <p class="font-bold mb-1">We value your privacy</p>
      <p class="text-xs text-white/70 leading-relaxed">
        We use cookies to improve your experience, analyse site traffic, and assist with our marketing. By clicking "Accept all", you agree to our use of cookies. Read our <RouterLink to="/cookies" class="underline hover:text-[#2DC5B8]">Cookie Policy</RouterLink>.
      </p>
    </div>
    <div class="flex items-center gap-3 shrink-0">
      <button
        type="button"
        class="bg-[#2DC5B8] hover:bg-[#25a59a] text-[#0A1D33] font-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-colors"
        @click="acceptCookies"
      >
        Accept all
      </button>
      <button
        type="button"
        class="border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-colors"
        @click="acceptCookies"
      >
        Reject non-essential
      </button>
    </div>
  </div>
</template>
