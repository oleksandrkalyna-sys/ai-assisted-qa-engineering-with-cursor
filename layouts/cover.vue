<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground, resolveAssetUrl } from './layoutHelper'

const props = defineProps({
  background: {
    type: String,
    default: '/brand/bg-default.jpg',
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout cover relative w-full h-full" :style="style">
    <img
      class="cover-logo z-2 object-contain"
      :src="resolveAssetUrl('/brand/motif-arc.png')"
      alt="MEV"
    >
    <!-- No position:relative here — absolute figures must anchor to the slide -->
    <div class="cover-content z-1 w-full">
      <slot />
    </div>
  </div>
</template>
