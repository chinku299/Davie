<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col font-sans">
    <Header />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
    <CookieConsent />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
