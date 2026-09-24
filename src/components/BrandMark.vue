<script setup>
defineProps({
  tone: { type: String, default: 'dark' } // 'dark' on light backgrounds, 'light' on dark
})
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <span
      class="text-3xl font-black tracking-tighter"
      :class="tone === 'light' ? 'text-white' : 'text-[#001A31]'"
    >
      evri
    </span>
  </span>
</template>
