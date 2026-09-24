<script setup>
import { ref } from 'vue'

defineProps({
  items: { type: Array, required: true },
  idPrefix: { type: String, required: true }
})

const open = ref(new Set())

const toggle = (key) => {
  // Reassigning forces the reactivity Vue will not track inside a mutated Set.
  const next = new Set(open.value)
  next.has(key) ? next.delete(key) : next.add(key)
  open.value = next
}
</script>

<template>
  <ul class="divide-y divide-slate/15 border-y border-slate/15">
    <li v-for="(item, i) in items" :key="item.q">
      <h3>
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 py-5 text-left"
          :aria-expanded="open.has(idPrefix + i)"
          :aria-controls="idPrefix + i + '-panel'"
          @click="toggle(idPrefix + i)"
        >
          <span class="font-bold text-ink">{{ item.q }}</span>
          <svg
            class="h-5 w-5 shrink-0 text-flare-ink transition-transform"
            :class="{ 'rotate-45': open.has(idPrefix + i) }"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </h3>
      <div
        v-show="open.has(idPrefix + i)"
        :id="idPrefix + i + '-panel'"
        class="pb-5 pr-10"
      >
        <p class="leading-relaxed text-slate">{{ item.a }}</p>
      </div>
    </li>
  </ul>
</template>
