<script setup>
const whatsappNumber = "447882773759";
const getWhatsappLink = (section) => {
  const message = encodeURIComponent(`Hello, I am reaching out from the site regarding ${section}.`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};
</script>

<template>
  <section class="py-24 bg-white px-4 sm:px-8 overflow-hidden relative">
    <div class="max-w-7xl mx-auto">
      <div class="bg-evri-teal rounded-[3rem] p-10 sm:p-20 relative overflow-hidden group">
        <!-- Decorative Background Pattern -->
        <div class="absolute top-0 right-0 w-1/2 h-full bg-[#25a59a]/10 transform translate-x-1/4 -skew-x-12"></div>

        <div class="relative z-10 max-w-2xl">
          <h2 class="text-4xl sm:text-6xl font-black text-evri-navy leading-tight mb-8 tracking-tighter">
            Ready to send your first parcel?
          </h2>
          <p class="text-xl text-evri-navy/80 font-medium mb-12 leading-relaxed">
            Join millions of people who trust us to deliver their parcels across the UK and the world.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              :href="getWhatsappLink('Starting a shipment')"
              class="bg-evri-navy text-white font-black px-10 py-5 rounded-full hover:bg-white hover:text-evri-navy transition-all transform hover:scale-105 uppercase text-sm tracking-widest shadow-2xl"
            >
              Start sending
            </a>
            <a
              :href="getWhatsappLink('ParcelShop information')"
              class="bg-transparent text-evri-navy border-2 border-evri-navy font-black px-10 py-5 rounded-full hover:bg-evri-navy hover:text-white transition-all uppercase text-sm tracking-widest"
            >
              Find a ParcelShop
            </a>
          </div>
        </div>

        <!-- Floating Icon/Graphic -->
        <div class="absolute right-0 bottom-0 w-1/3 h-full hidden lg:flex items-center justify-center translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
           <svg class="w-64 h-64 text-evri-navy/10" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
           </svg>
        </div>
      </div>
    </div>
  </section>
</template>
