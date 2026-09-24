<script setup>
import { ref } from 'vue';

const retailerSearch = ref('');
const whatsappNumber = "447882773759";

const handleReturnSearch = () => {
  if (retailerSearch.value.trim()) {
    const encodedMsg = encodeURIComponent(`Hello, I want to return a parcel for retailer: ${retailerSearch.value}`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  } else {
    const encodedMsg = encodeURIComponent(`Hello, I want to start a return process.`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  }
};

const getWhatsappLink = (action) => {
  const encodedMsg = encodeURIComponent(`Hello, I am reaching out from the returns page regarding: ${action}`);
  return `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
};

const steps = [
  {
    title: 'Book your return',
    description: 'Find your retailer below and follow the steps to book your return and pay for your postage if you need to.',
    icon: 'book'
  },
  {
    title: 'Print your label',
    description: 'We will send you a label to print at home, or a QR code to use at one of our Print in ParcelShop devices.',
    icon: 'print'
  },
  {
    title: 'Drop it off',
    description: 'Take your parcel to any of our 14,000+ ParcelShops or lockers across the UK.',
    icon: 'drop'
  }
];
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] font-sans">
    <!-- Hero Section -->
    <section class="bg-[#762056] text-white py-16 px-4 sm:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
          Returning a parcel is easy
        </h1>
        <p class="text-xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
          Book your return in seconds. Choose to drop off at a ParcelShop or locker, or have it collected from your door.
        </p>
      </div>
    </section>

    <!-- Search Section -->
    <section class="px-4 sm:px-8 -mt-12 relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl">
          <h2 class="text-2xl font-black text-[#001A31] mb-8 text-center sm:text-left">
            Search for a retailer to start your return
          </h2>

          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1 relative">
              <input
                v-model="retailerSearch"
                type="text"
                placeholder="Enter retailer name"
                class="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-[#001A31] font-bold placeholder:text-gray-300 focus:border-[#762056] focus:ring-0 outline-none transition-all text-lg"
                @keyup.enter="handleReturnSearch"
              />
            </div>
            <button
              @click="handleReturnSearch"
              class="bg-[#762056] text-white font-black px-10 py-5 rounded-2xl hover:opacity-90 transition-all transform active:scale-95 uppercase tracking-widest text-sm whitespace-nowrap"
            >
              Search
            </button>
          </div>

          <div class="mt-6 text-center sm:text-left">
            <p class="text-sm text-gray-500 font-medium">
              Not sure if your retailer offers free returns?
              <a :href="getWhatsappLink('Check retailer returns policy')" class="text-[#762056] font-bold hover:underline ml-1">Check here</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="py-24 px-4 sm:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-black text-[#001A31] mb-16 text-center tracking-tight">
          How it works
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="(step, index) in steps" :key="step.title" class="text-center group">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg border border-gray-100 group-hover:border-[#762056] transition-colors relative">
              <span class="absolute -top-2 -right-2 w-8 h-8 bg-[#762056] text-white rounded-full flex items-center justify-center font-black text-sm">
                {{ index + 1 }}
              </span>
              <!-- Icons -->
              <svg v-if="step.icon === 'book'" class="w-10 h-10 text-[#762056]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <svg v-if="step.icon === 'print'" class="w-10 h-10 text-[#762056]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              <svg v-if="step.icon === 'drop'" class="w-10 h-10 text-[#762056]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 class="text-xl font-black text-[#001A31] mb-4">{{ step.title }}</h3>
            <p class="text-gray-500 font-medium leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collection CTA -->
    <section class="py-20 bg-white px-4 sm:px-8">
      <div class="max-w-5xl mx-auto bg-gray-50 rounded-[2.5rem] p-10 sm:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-100">
        <div class="flex-1 text-center md:text-left">
          <h2 class="text-3xl sm:text-4xl font-black text-[#001A31] mb-6 tracking-tight">
            Prefer a collection?
          </h2>
          <p class="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
            We can collect your parcel from your home or work. Just choose "Collection" when you book your return.
          </p>
          <a
            :href="getWhatsappLink('Book a collection return')"
            class="inline-block bg-[#762056] text-white font-black px-12 py-5 rounded-full hover:opacity-90 transition-all transform hover:scale-105 uppercase text-sm tracking-widest shadow-xl"
          >
            Book a collection
          </a>
        </div>
        <div class="w-full md:w-1/3 aspect-square bg-[#762056] rounded-3xl flex items-center justify-center overflow-hidden">
          <svg class="w-32 h-32 text-white/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-2V3H7v10H5l7 7 7-7zM7 21h10v-2H7v2z" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Help Section -->
    <section class="py-20 px-4 sm:px-8 text-center bg-[#F8F9FA]">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-black text-[#001A31] mb-6">Need help with a return?</h2>
        <p class="text-lg text-gray-600 font-medium mb-10">
          Check out our help centre for common questions about returning parcels.
        </p>
        <a
          :href="getWhatsappLink('Returns help centre')"
          class="inline-block border-2 border-[#762056] text-[#762056] font-black px-10 py-5 rounded-full hover:bg-[#762056] hover:text-white transition-all uppercase text-sm tracking-widest"
        >
          Returns help centre
        </a>
      </div>
    </section>
  </div>
</template>
