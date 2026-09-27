<script setup>
defineProps({
  title: { type: String, required: true },
  intro: { type: String, default: '' },
  eyebrow: { type: String, default: '' }
})
</script>

<template>
  <section class="on-dark bg-ink py-14 sm:py-16">
    <div class="shell max-w-3xl">
      <p v-if="eyebrow" class="text-sm font-bold uppercase tracking-wider text-flare">
        {{ eyebrow }}
      </p>
      <h1
        class="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        :class="eyebrow ? 'mt-3' : ''"
      >
        {{ title }}
      </h1>
      <p v-if="intro" class="mt-4 text-lg leading-relaxed text-white/85">
        {{ intro }}
      </p>
      <slot />
    </div>
  </section>
</template>
