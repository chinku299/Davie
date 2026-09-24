<script setup>
const whatsappNumber = "447882773759";
const getWhatsappLink = (section) => {
  const message = encodeURIComponent(`Hello, I am reaching out from the footer regarding ${section}.`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const footerColumns = [
  {
    title: 'Help & Support',
    links: ['Help Centre', 'Track a parcel', 'Return a parcel', 'Divert a parcel', 'Contact us']
  },
  {
    title: 'Our services',
    links: ['Send a parcel', 'Prices', 'For businesses', 'International', 'ParcelShops']
  },
  {
    title: 'Our company',
    links: ['Sustainability', 'Careers', 'Media Centre', 'Modern Slavery Statement', 'Corporate information']
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Acceptable Use Policy', 'Accessibility']
  }
];

const socialIcons = [
  { name: 'Facebook', icon: 'facebook' },
  { name: 'Twitter', icon: 'twitter' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'LinkedIn', icon: 'linkedin' }
];
</script>

<template>
  <footer class="bg-evri-navy text-white pt-20 pb-10 px-4 sm:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div v-for="col in footerColumns" :key="col.title" class="space-y-6">
          <h4 class="text-lg font-black tracking-tight text-white uppercase text-xs tracking-[0.2em] opacity-50">
            {{ col.title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link">
              <a
                :href="getWhatsappLink(link)"
                class="text-base font-medium text-white/80 hover:text-evri-teal transition-colors"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/10 w-full mb-10"></div>

      <!-- Bottom Section -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-10">
        <!-- Logo and Copyright -->
        <div class="text-center lg:text-left space-y-4">
          <div class="flex justify-center lg:justify-start">
            <a :href="getWhatsappLink('Home')" class="text-4xl font-black tracking-tighter text-white">evri</a>
          </div>
          <p class="text-sm text-white/40 font-medium">
            © {{ new Date().getFullYear() }} Evri. All rights reserved. Registered in England and Wales.
          </p>
        </div>

        <!-- Social Icons -->
        <div class="flex gap-6">
          <a
            v-for="social in socialIcons"
            :key="social.name"
            :href="getWhatsappLink(social.name)"
            class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-evri-teal hover:border-evri-teal hover:text-evri-navy transition-all"
            :title="social.name"
          >
            <span class="sr-only">{{ social.name }}</span>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Legal Disclaimer -->
      <div class="mt-16 pt-8 border-t border-white/5">
        <p class="text-[10px] text-center text-white/20 uppercase tracking-[0.3em] font-black">
          Powered by Parcel People
        </p>
      </div>
    </div>
  </footer>
</template>
