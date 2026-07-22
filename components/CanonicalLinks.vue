<script setup lang="ts">
import { canonicalLinks, stretchLinks } from '../data/links'

withDefaults(defineProps<{
  /** Include stretch links from PRD §6 */
  includeStretch?: boolean
}>(), {
  includeStretch: false,
})
</script>

<template>
  <ul class="canonical-links text-sm space-y-2 list-none pl-0">
    <li v-for="link in canonicalLinks" :key="link.url" class="flex flex-wrap gap-x-2 items-baseline">
      <span class="font-semibold text-[var(--mev-primary)]">{{ link.topic }}</span>
      <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.url }}</a>
      <span v-if="link.note" class="opacity-60 text-xs">({{ link.note }})</span>
    </li>
    <template v-if="includeStretch">
      <li class="pt-2 font-semibold text-[var(--mev-primary)]">Stretch</li>
      <li v-for="link in stretchLinks" :key="link.url" class="flex flex-wrap gap-x-2 items-baseline">
        <span class="font-semibold text-[var(--mev-primary)]">{{ link.topic }}</span>
        <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.url }}</a>
      </li>
    </template>
  </ul>
</template>
