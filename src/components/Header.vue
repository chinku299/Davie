<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Send', to: '/send' },
  { name: 'Track', to: '/track' },
  { name: 'Return', to: '/returns' },
  { name: 'Business', to: '/business' },
  { name: 'Locations', to: '/network' },
  { name: 'Careers', to: '/help' },
  { name: 'Help', to: '/help' }
]
</script>

<template>
  <header class="w-full font-sans shadow-md">
    <!-- Top Utility Bar -->
    <div class="bg-[#0C1D30] text-white py-2 px-4 sm:px-8 text-xs font-semibold flex justify-between items-center">
      <div class="flex items-center gap-6">
        <RouterLink to="/" class="hover:text-evri-teal transition-colors">Home</RouterLink>
        <RouterLink to="/help" class="hover:text-evri-teal transition-colors">News & Corporate</RouterLink>
      </div>
      <div class="flex items-center gap-6">
        <RouterLink to="/sign-in" class="hover:text-evri-teal transition-colors">Log in</RouterLink>
        <RouterLink to="/sign-in" class="hover:text-evri-teal transition-colors font-bold">Sign up</RouterLink>
      </div>
    </div>

    <!-- Main Navigation Bar (Evri Royal Blue) -->
    <div class="bg-[#0047BA] text-white px-4 sm:px-8 py-3">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo Box -->
        <RouterLink to="/" class="flex items-center">
          <div class="bg-white px-3 py-1.5 rounded flex flex-col items-center shadow-sm">
            <span class="text-xl font-black tracking-tight text-[#0047BA] leading-none">EVRI</span>
            <span class="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mt-0.5">delivery made for you</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation Items -->
        <nav class="hidden lg:flex items-center gap-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.to"
            class="text-white font-bold text-base hover:text-evri-teal transition-colors"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Right Side Icons / Search if any -->
        <div class="hidden lg:flex items-center gap-4 text-white/90">
          <button type="button" class="p-2 hover:text-white" aria-label="Search">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-white p-2">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-[#0047BA] text-white border-t border-white/10 px-4 py-6 space-y-4">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.to"
        class="block text-lg font-bold hover:text-evri-teal"
        @click="isMobileMenuOpen = false"
      >
        {{ item.name }}
      </RouterLink>
      <div class="pt-4 border-t border-white/20 flex gap-4">
        <RouterLink to="/sign-in" class="flex-1 bg-white text-[#0047BA] py-3 text-center font-bold rounded-lg" @click="isMobileMenuOpen = false">Log in</RouterLink>
        <RouterLink to="/sign-in" class="flex-1 bg-evri-teal text-[#0C1D30] py-3 text-center font-bold rounded-lg" @click="isMobileMenuOpen = false">Sign up</RouterLink>
      </div>
    </div>
  </header>
</template>
