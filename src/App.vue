<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main"
      class="sr-only rounded-b-card bg-ink px-5 py-3 font-bold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-0 focus:z-[60]"
    >
      Skip to the main content
    </a>

    <Header />

    <main id="main" tabindex="-1" class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>

<style>
/* Paired with the <Transition name="fade"> above. */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
