<script setup>
const footerColumns = [
  {
    title: 'Help & Support',
    links: [
      { label: 'Help Centre', to: '/help' },
      { label: 'Track a parcel', to: '/track' },
      { label: 'Return a parcel', to: '/returns' },
      { label: 'Divert a parcel', to: '/receive' },
      { label: 'Contact us', to: '/contact' }
    ]
  },
  {
    title: 'Our services',
    links: [
      { label: 'Send a parcel', to: '/send' },
      { label: 'Prices', to: '/prices' },
      { label: 'For businesses', to: '/business' },
      { label: 'International', to: '/international' },
      { label: 'ParcelShops', to: '/parcelshops' }
    ]
  },
  {
    title: 'Our company',
    links: [
      { label: 'News & Corporate', to: '/news' },
      { label: 'Careers', to: '/careers' },
      { label: 'Our network', to: '/network' },
      { label: 'Sustainability', to: '/news' },
      { label: 'Corporate info', to: '/news' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Cookie Policy', to: '/cookies' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Accessibility', to: '/accessibility' }
    ]
  }
];

const socialIcons = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' }
];
</script>

<template>
  <footer class="bg-evri-navy text-white pt-20 pb-10 px-4 sm:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div v-for="col in footerColumns" :key="col.title" class="space-y-6">
          <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase opacity-50">
            {{ col.title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in col.links" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-base font-medium text-white/80 hover:text-evri-teal transition-colors"
              >
                {{ link.label }}
              </RouterLink>
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
            <RouterLink to="/" class="text-4xl font-black tracking-tighter text-white">evri</RouterLink>
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
            :href="social.href"
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
