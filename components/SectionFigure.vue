<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../utils/resolveAssetUrl'

const FIGURES = {
  filmmaker: '/brand/figures/figure-filmmaker.png',
  'vintage-tv': '/brand/figures/figure-vintage-tv.png',
  'retro-computer': '/brand/figures/figure-retro-computer.png',
  'pointing-hand': '/brand/figures/figure-pointing-hand.png',
  'enter-runners': '/brand/figures/figure-enter-runners.png',
  'crt-communicator': '/brand/figures/figure-crt-communicator.png',
} as const

export type FigureName = keyof typeof FIGURES

const props = withDefaults(defineProps<{
  /** Figure key matching public/brand/figures/ */
  name: FigureName
  /** Placement hint */
  position?: 'right' | 'bottom' | 'left'
  size?: string
  alt?: string
}>(), {
  position: 'right',
  size: 'h-64',
  alt: '',
})

const src = computed(() => resolveAssetUrl(FIGURES[props.name]))

const positionClass = computed(() => {
  switch (props.position) {
    case 'bottom':
      return 'absolute bottom-4 right-8'
    case 'left':
      return 'absolute bottom-8 left-16'
    default:
      return 'absolute bottom-8 right-10'
  }
})
</script>

<template>
  <img
    class="section-figure z-1 object-contain pointer-events-none"
    :class="[size, positionClass]"
    :src="src"
    :alt="alt || name"
  >
</template>
