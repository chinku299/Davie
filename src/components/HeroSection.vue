<script setup>
import { ref } from 'vue';

const trackingCode = ref('');
const whatsappNumber = "447882773759";
const generalWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am reaching out from the site.')}`;

const handleTrack = () => {
  if (trackingCode.value.trim()) {
    const encodedMsg = encodeURIComponent(`Hello, I want to track my parcel with code: ${trackingCode.value}`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  } else {
    window.location.href = generalWhatsappLink;
  }
};
</script>

<template>
  <section class="relative bg-evri-navy overflow-hidden min-h-[500px] flex items-center pt-12 pb-20 px-4 sm:px-8">
    <!-- Background Accents (Exact Evri Parity) -->
    <div class="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
      <div class="absolute right-0 top-0 w-full h-full bg-[#2DC5B8] opacity-10 rounded-l-full transform translate-x-1/4 -translate-y-1/4 scale-150"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content: Text -->
      <div class="text-white space-y-6 animate-fade-up">
        <div class="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
          <span class="w-2 h-2 bg-evri-teal rounded-full animate-pulse"></span>
          <span class="text-xs font-bold uppercase tracking-widest">New feature</span>
          <span class="text-xs font-medium text-white/80">Check out our ParcelShop locator</span>
        </div>

        <h1 class="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.9] text-white">
          The delivery people for your world
        </h1>

        <p class="text-xl text-white/80 font-medium max-w-lg leading-relaxed">
          Sending, receiving or returning? We make it easy for you to manage your parcels with confidence.
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <a :href="generalWhatsappLink" class="bg-evri-teal text-evri-navy font-black px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase text-sm tracking-widest shadow-lg shadow-evri-teal/20">
            Send a parcel
          </a>
          <a :href="generalWhatsappLink" class="bg-transparent text-white border-2 border-white font-black px-8 py-4 rounded-full hover:bg-white hover:text-evri-navy transition-all uppercase text-sm tracking-widest">
            Find a ParcelShop
          </a>
        </div>
      </div>

      <!-- Right Content: Tracking Widget -->
      <div class="animate-fade-up delay-100">
        <div class="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl relative">
          <!-- Widget Tab -->
          <div class="absolute -top-6 left-12 bg-white px-8 py-3 rounded-t-2xl border-t border-x border-gray-100">
            <span class="text-evri-navy font-black uppercase text-xs tracking-widest">Track</span>
          </div>

          <h2 class="text-3xl font-black text-evri-navy mb-8 tracking-tight">
            Track your parcel
          </h2>

          <div class="space-y-6">
            <div class="relative">
              <label for="tracking" class="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">
                Tracking Number
              </label>
              <input
                id="tracking"
                v-model="trackingCode"
                type="text"
                placeholder="Enter your 16-character tracking code"
                class="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-evri-navy font-bold placeholder:text-gray-300 focus:border-evri-teal focus:ring-0 outline-none transition-all text-lg"
                @keyup.enter="handleTrack"
              />
            </div>

            <button
              @click="handleTrack"
              class="w-full bg-evri-teal text-evri-navy font-black py-5 rounded-2xl hover:bg-[#25a59a] transition-all transform active:scale-95 uppercase tracking-widest shadow-xl shadow-evri-teal/20 flex items-center justify-center gap-3"
            >
              <span>Track parcel</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <div class="pt-4 border-t border-gray-50 text-center">
              <p class="text-sm text-gray-500 font-medium">
                Expecting a delivery?
                <a :href="generalWhatsappLink" class="text-evri-teal font-bold hover:underline ml-1">Manage your delivery</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.delay-100 {
  animation-delay: 0.2s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
