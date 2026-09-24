<script setup>
defineProps({
  tone: { type: String, default: 'dark' }
})
</script>

<template>
  <div class="bg-white px-3 py-1.5 rounded flex flex-col items-center shadow-sm">
    <span class="text-xl font-black tracking-tight leading-none">
      <span class="text-[#002D72]">EVR</span><span class="text-[#FF4500]">I</span>
    </span>
    <span class="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mt-0.5">delivery made for you</span>
  </div>
</template>
