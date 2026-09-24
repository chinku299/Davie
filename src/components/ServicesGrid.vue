<script setup>
const whatsappNumber = "447882773759";

const getWhatsappLink = (serviceName) => {
  const message = encodeURIComponent(`Hello, I am interested in your ${serviceName} service.`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const services = [
  {
    title: 'Send',
    description: 'Send a parcel from just £2.62. Choose to drop off at a ParcelShop or have it collected from your door.',
    buttonText: 'Send a parcel',
    icon: 'send',
    badge: 'From £2.62'
  },
  {
    title: 'Return',
    description: 'Easy returns with over 14,000 ParcelShops and lockers. No printer? No problem. Print a label in-store.',
    buttonText: 'Return a parcel',
    icon: 'return',
    path: '/return-a-parcel'
  },
  {
    title: 'For business',
    description: 'Selling on Vinted or eBay? Or a large retailer? We have delivery solutions for businesses of all sizes.',
    buttonText: 'Business delivery',
    icon: 'business',
    badge: 'Popular'
  },
  {
    title: 'ParcelShops',
    description: 'Find your local ParcelShop or locker to send, collect or return your parcels at a time that suits you.',
    buttonText: 'Find a ParcelShop',
    icon: 'location'
  },
  {
    title: 'Receive',
    description: 'Expecting a parcel? Track its journey, divert it to a safe place or a neighbor, or choose a delivery day.',
    buttonText: 'Track your parcel',
    icon: 'receive'
  },
  {
    title: 'International',
    description: 'Sending a parcel abroad? We deliver to over 190 countries worldwide with fully tracked delivery.',
    buttonText: 'Send internationally',
    icon: 'globe'
  }
];
</script>

<template>
  <section class="py-20 bg-[#F8F9FA] px-4 sm:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Heading -->
      <div class="mb-12 text-left">
        <h2 class="text-4xl font-black text-evri-navy tracking-tight mb-4">
          Our most popular services
        </h2>
        <p class="text-lg text-gray-600 font-medium max-w-2xl">
          Everything you need to send, receive and return parcels, all in one place.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <!-- Badge & Icon Row -->
            <div class="flex justify-between items-start mb-6">
              <div class="w-14 h-14 bg-evri-light rounded-2xl flex items-center justify-center group-hover:bg-evri-teal/10 transition-colors">
                <svg v-if="service.icon === 'send'" class="w-8 h-8 text-evri-navy group-hover:text-evri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                <svg v-if="service.icon === 'return'" class="w-8 h-8 text-evri-navy group-hover:text-evri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15L12 19L8 15M12 19V5"></path></svg>
                <svg v-if="service.icon === 'business'" class="w-8 h-8 text-evri-navy group-hover:text-evri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <svg v-if="service.icon === 'location'" class="w-8 h-8 text-evri-navy group-hover:text-evri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <svg v-if="service.icon === 'receive'" class="w-8 h-8 text-evri-navy group-hover:text-evri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                <svg v-if="service.icon === 'globe'" class="w-8 h-8 text-evri-navy group-hover:text-evri-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <span v-if="service.badge" class="bg-evri-teal/10 text-evri-teal text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                {{ service.badge }}
              </span>
            </div>

            <h3 class="text-2xl font-black text-evri-navy mb-4 group-hover:text-evri-teal transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-500 font-medium leading-relaxed mb-8">
              {{ service.description }}
            </p>
          </div>

          <div class="space-y-4">
            <!-- Internal Link -->
            <RouterLink
              v-if="service.path"
              :to="service.path"
              class="block w-full bg-evri-navy text-white text-center font-black py-4 rounded-2xl hover:bg-evri-teal hover:text-evri-navy transition-all uppercase text-xs tracking-widest"
            >
              {{ service.buttonText }}
            </RouterLink>

            <!-- External/WA Link -->
            <a
              v-else
              :href="getWhatsappLink(service.title)"
              class="block w-full bg-evri-navy text-white text-center font-black py-4 rounded-2xl hover:bg-evri-teal hover:text-evri-navy transition-all uppercase text-xs tracking-widest"
            >
              {{ service.buttonText }}
            </a>

            <RouterLink
              v-if="service.path"
              :to="service.path"
              class="block text-center text-sm font-bold text-evri-navy hover:text-evri-teal transition-colors"
            >
              Find out more
            </RouterLink>
            <a
              v-else
              :href="getWhatsappLink(service.title)"
              class="block text-center text-sm font-bold text-evri-navy hover:text-evri-teal transition-colors"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Help Bar -->
      <div class="mt-16 bg-evri-navy rounded-[2rem] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div class="relative z-10 text-center lg:text-left">
          <h3 class="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Need some help?</h3>
          <p class="text-white/70 font-medium">Browse our help topics or chat with our digital assistant.</p>
        </div>
        <a
          :href="getWhatsappLink('Help')"
          class="relative z-10 bg-evri-teal text-evri-navy font-black px-10 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase text-sm tracking-widest shadow-xl"
        >
          Visit help center
        </a>
        <!-- Decorative Circle -->
        <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-evri-teal opacity-10 rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover {
  transform: translateY(-5px);
}
</style>
