<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from './layoutHelper'

const props = defineProps({
  /** `blue` (dark field) or `light` section opener */
  variant: {
    type: String,
    default: 'blue',
  },
  background: {
    type: String,
    default: '',
  },
  /** Bottom-left arc; set false on a slide to match light section look without the motif */
  showMotif: {
    type: Boolean,
    default: true,
  },
})

const bg = computed(() => {
  if (props.background)
    return props.background
  return props.variant === 'light'
    ? '/brand/bg-section-light.jpg'
    : '/brand/bg-section-blue.jpg'
})

const style = computed(() => handleBackground(bg.value))
const variantClass = computed(() =>
  props.variant === 'light' ? 'section--light' : 'section--blue',
)

const motifVisible = computed(() => {
  if (props.variant !== 'light')
    return false
  const v = props.showMotif as boolean | string
  return v !== false && v !== 'false'
})
</script>

<template>
  <div
    class="slidev-layout section relative w-full h-full"
    :class="variantClass"
    :style="style"
  >
    <BrandLogo :variant="variant === 'light' ? 'dark' : 'light'" />
    <BrandMotif v-if="motifVisible" />
    <div class="my-auto w-full max-w-4xl relative z-1">
      <slot />
    </div>
  </div>
</template>
