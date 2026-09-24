<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMobileMenuOpen = ref(false);
const activeDropdown = ref(null);

const whatsappLink = "https://wa.me/447882773759?text=Hello,%20I%20am%20reaching%20out%20from%20the%20site.";

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const setDropdown = (menu) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu;
};

const navItems = [
  { name: 'Send', link: whatsappLink, subItems: ['Send a parcel', 'Prices', 'Bulk delivery'] },
  { name: 'Track', link: whatsappLink },
  { name: 'Receive', link: whatsappLink, subItems: ['Receive a parcel', 'Divert a parcel', 'Collect from a ParcelShop'] },
  { name: 'Return', path: '/return-a-parcel' },
  { name: 'Help', link: whatsappLink },
];
</script>

<template>
  <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50 font-sans">
    <!-- Top Utility Bar -->
    <div class="bg-[#001A31] text-white py-2 px-4 sm:px-8 flex justify-end gap-6 text-sm font-medium">
      <a :href="whatsappLink" class="hover:text-[#2DC5B8] transition-colors">Our services</a>
      <a :href="whatsappLink" class="hover:text-[#2DC5B8] transition-colors">For businesses</a>
      <a :href="whatsappLink" class="hover:text-[#2DC5B8] transition-colors font-bold border-l border-white/20 pl-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Sign in
      </a>
    </div>

    <!-- Main Navigation -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <RouterLink to="/" class="flex items-center">
          <span class="text-3xl font-black tracking-tighter text-[#001A31]">evri</span>
        </RouterLink>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-8">
        <div v-for="item in navItems" :key="item.name" class="relative group">
          <!-- Internal Link -->
          <RouterLink
            v-if="item.path"
            :to="item.path"
            class="text-[#001A31] font-bold text-base hover:text-[#2DC5B8] flex items-center gap-1 py-2"
          >
            {{ item.name }}
          </RouterLink>

          <!-- External/WA Link -->
          <a
            v-else
            :href="item.link"
            class="text-[#001A31] font-bold text-base hover:text-[#2DC5B8] flex items-center gap-1 py-2"
          >
            {{ item.name }}
            <svg v-if="item.subItems" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <!-- Dropdown -->
          <div v-if="item.subItems" class="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 hidden group-hover:block transition-all duration-300">
            <div class="py-4">
              <a
                v-for="sub in item.subItems"
                :key="sub"
                :href="whatsappLink"
                class="block px-6 py-3 text-sm text-[#001A31] font-medium hover:bg-gray-50 hover:text-[#2DC5B8]"
              >
                {{ sub }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="hidden lg:flex items-center gap-4">
        <a :href="whatsappLink" class="bg-[#2DC5B8] text-[#001A31] font-black px-6 py-3 rounded-full hover:bg-[#25a59a] transition-all transform hover:scale-105 uppercase text-xs tracking-widest">
          Send a parcel
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-[#001A31] p-2">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-80px)]">
      <div class="px-4 py-6 space-y-4">
        <div v-for="item in navItems" :key="item.name" class="border-b border-gray-50 last:border-0 pb-4">
          <div class="flex justify-between items-center" @click="setDropdown(item.name)">
            <RouterLink v-if="item.path" :to="item.path" class="text-xl font-bold text-[#001A31]" @click="toggleMobileMenu">{{ item.name }}</RouterLink>
            <a v-else :href="item.link" class="text-xl font-bold text-[#001A31]">{{ item.name }}</a>

            <svg v-if="item.subItems" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="activeDropdown === item.name ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div v-if="item.subItems && activeDropdown === item.name" class="mt-4 ml-4 space-y-4">
            <a v-for="sub in item.subItems" :key="sub" :href="whatsappLink" class="block text-lg font-medium text-gray-600">{{ sub }}</a>
          </div>
        </div>

        <div class="pt-6 space-y-4">
          <a :href="whatsappLink" class="block text-lg font-bold text-[#001A31]">Our services</a>
          <a :href="whatsappLink" class="block text-lg font-bold text-[#001A31]">For businesses</a>
          <a :href="whatsappLink" class="block bg-[#2DC5B8] text-[#001A31] text-center font-black py-4 rounded-full uppercase tracking-widest text-sm">Send a parcel</a>
          <a :href="whatsappLink" class="block border-2 border-[#001A31] text-[#001A31] text-center font-black py-4 rounded-full uppercase tracking-widest text-sm">Sign in</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

:host {
  font-family: 'Roboto', sans-serif;
}
</style>
