<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import BrandMark from './BrandMark.vue'

const route = useRoute()
const mobileOpen = ref(false)
const openMenu = ref(null)
const headerEl = ref(null)

const utilityLinks = [
  { label: 'Business accounts', to: '/business' },
  { label: 'Our network', to: '/network' }
]

const navItems = [
  {
    name: 'Send',
    to: '/send',
    children: [
      { label: 'Book a parcel', to: '/send' },
      { label: 'Sizes and prices', to: '/prices' },
      { label: 'Sending overseas', to: '/overseas' }
    ]
  },
  { name: 'Track', to: '/track' },
  {
    name: 'Receive',
    to: '/receive',
    children: [
      { label: 'Follow a delivery', to: '/track' },
      { label: 'Change the delivery day', to: '/receive' },
      { label: 'Pick up from a shop', to: '/network' }
    ]
  },
  { name: 'Returns', to: '/returns' },
  { name: 'Help', to: '/help' }
]

const toggleMenu = (name) => {
  openMenu.value = openMenu.value === name ? null : name
}

const closeAll = () => {
  openMenu.value = null
  mobileOpen.value = false
}

const onKeydown = (event) => {
  if (event.key === 'Escape') openMenu.value = null
}

const onPointerDown = (event) => {
  if (headerEl.value && !headerEl.value.contains(event.target)) openMenu.value = null
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerDown)
})

// Any navigation closes both menus, including taps on sub-items.
watch(() => route.fullPath, closeAll)
</script>

<template>
  <header ref="headerEl" class="sticky top-0 z-50 bg-white shadow-sm">
    <!-- Utility strip -->
    <div class="on-dark bg-ink text-white">
      <div class="shell flex justify-end gap-6 py-2 text-sm font-medium">
        <RouterLink
          v-for="link in utilityLinks"
          :key="link.to"
          :to="link.to"
          class="hover:text-flare"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/sign-in"
          class="flex items-center gap-2 border-l border-white/25 pl-6 font-bold hover:text-flare"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M5 21a7 7 0 0 1 14 0" stroke-linecap="round" />
          </svg>
          Sign in
        </RouterLink>
      </div>
    </div>

    <!-- Main bar -->
    <div class="shell flex items-center justify-between py-4">
      <RouterLink to="/" class="rounded-lg" aria-label="Parcelane, back to the home page">
        <BrandMark />
      </RouterLink>

      <nav class="hidden lg:block" aria-label="Main">
        <ul class="flex items-center gap-2">
          <li v-for="item in navItems" :key="item.name" class="relative">
            <RouterLink
              v-if="!item.children"
              :to="item.to"
              class="block rounded-lg px-4 py-2 font-bold text-ink hover:text-flare-ink"
            >
              {{ item.name }}
            </RouterLink>

            <template v-else>
              <button
                type="button"
                class="flex items-center gap-1.5 rounded-lg px-4 py-2 font-bold text-ink hover:text-flare-ink"
                :aria-expanded="openMenu === item.name"
                :aria-controls="'menu-' + item.name"
                @click="toggleMenu(item.name)"
              >
                {{ item.name }}
                <svg
                  class="h-4 w-4 transition-transform"
                  :class="{ 'rotate-180': openMenu === item.name }"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  aria-hidden="true"
                >
                  <path d="m5 9 7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

              <ul
                v-show="openMenu === item.name"
                :id="'menu-' + item.name"
                class="absolute left-0 top-full w-64 rounded-card border border-slate/15 bg-white py-2 shadow-xl"
              >
                <li v-for="child in item.children" :key="child.label">
                  <RouterLink
                    :to="child.to"
                    class="block px-5 py-3 font-medium text-ink hover:bg-mist hover:text-flare-ink"
                  >
                    {{ child.label }}
                  </RouterLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </nav>

      <RouterLink to="/send" class="btn-primary hidden lg:inline-flex">Send a parcel</RouterLink>

      <button
        type="button"
        class="rounded-lg p-2 text-ink lg:hidden"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? 'Close the menu' : 'Open the menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <svg
          class="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path v-if="!mobileOpen" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
          <path v-else d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Mobile panel -->
    <nav
      v-show="mobileOpen"
      id="mobile-nav"
      class="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-slate/15 bg-white lg:hidden"
      aria-label="Main, mobile"
    >
      <ul class="shell divide-y divide-slate/10 py-2">
        <li v-for="item in navItems" :key="item.name" class="py-1">
          <!-- The row is never one tap target doing two jobs: the link
               navigates, the chevron button expands. -->
          <div class="flex items-center justify-between">
            <RouterLink :to="item.to" class="flex-1 rounded-lg py-3 text-lg font-bold text-ink">
              {{ item.name }}
            </RouterLink>
            <button
              v-if="item.children"
              type="button"
              class="rounded-lg p-3 text-ink"
              :aria-expanded="openMenu === item.name"
              :aria-controls="'m-menu-' + item.name"
              :aria-label="'Show more under ' + item.name"
              @click="toggleMenu(item.name)"
            >
              <svg
                class="h-5 w-5 transition-transform"
                :class="{ 'rotate-180': openMenu === item.name }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                aria-hidden="true"
              >
                <path d="m5 9 7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

          <ul
            v-if="item.children"
            v-show="openMenu === item.name"
            :id="'m-menu-' + item.name"
            class="pb-2 pl-4"
          >
            <li v-for="child in item.children" :key="child.label">
              <RouterLink :to="child.to" class="block rounded-lg py-2.5 font-medium text-slate">
                {{ child.label }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="shell space-y-3 pb-6 pt-4">
        <RouterLink to="/send" class="btn-primary w-full">Send a parcel</RouterLink>
        <RouterLink to="/sign-in" class="btn-outline-dark w-full">Sign in</RouterLink>
      </div>
    </nav>
  </header>
</template>
