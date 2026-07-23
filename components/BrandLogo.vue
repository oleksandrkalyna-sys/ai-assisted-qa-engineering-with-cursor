<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../utils/resolveAssetUrl'

const props = withDefaults(defineProps<{
  /**
   * `dark` — dark wordmark for light backgrounds (`motif-arc.png`)
   * `light` — white wordmark for dark backgrounds (`logo-mev.png`)
   */
  variant?: 'dark' | 'light'
  /** Optional size class override */
  size?: string
}>(), {
  variant: 'dark',
  size: 'h-10',
})

const src = computed(() =>
  resolveAssetUrl(
    props.variant === 'light'
      ? '/brand/logo-mev.png'
      : '/brand/motif-arc.png',
  ),
)
</script>

<template>
  <img
    class="brand-logo absolute top-6 right-8 z-10 object-contain"
    :class="size"
    :src="src"
    alt="MEV"
  >
</template>
